/* eslint no-underscore-dangle: 0 */

import { v4 as makeUUID } from 'uuid';
import EventBus from './eventbus';

const pug = require('pug');

export enum BlockEvents {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_RENDER = 'flow:render',
  FLOW_CDU = 'flow:component-did-update',
}

export function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root) {
    root.appendChild(block.getContent());
  }
  block.dispatchComponentDidMount();
  return root;
}

class Block {
  protected props: Record<string, any>;

  protected eventBus: () => EventBus;

  protected _meta: { tagName: string; props: {} };

  protected _element: HTMLElement;

  protected _id: string;

  protected children: Record<string, Block>;

  constructor(tagName = 'div', propsAndChildren = {}) {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    this._id = makeUUID();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(BlockEvents.INIT);
  }

  get element() {
    return this._element;
  }

  get id() {
    return this._id;
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(BlockEvents.FLOW_RENDER);
  }

  compile(template: string, props: Object) {
    const fn = pug.compile(template, {});
    const propsAndStubs: Record<string, any> = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement;
    fragment.innerHTML = fn(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
      stub?.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  addEvents() {}

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  componentDidMount(_oldProps = {}) {
    return true;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: Object, _newProps: Object) {
    return true;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  render(): string | DocumentFragment {
    return '';
  }

  setProps = (nextProps: Object) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  getContent() {
    return this.element;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  toString() {
    return this._element.outerHTML;
  }

  private _getChildren(propsAndChildren: Record<string, any>) {
    const children: Record<string, any> = {};
    const props: Record<string, any> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _makePropsProxy(props: {}): Object {
    const self = this;

    // eslint-disable-next-line no-param-reassign
    props = new Proxy(props, {
      set(target: Record<string, any>, prop: string, value) {
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        self.eventBus().emit(BlockEvents.FLOW_CDU);
        return true;
      },

      deleteProperty() {
        throw new Error('Нет доступа!');
      },
    });

    return props;
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(BlockEvents.INIT, this.init.bind(this));
    eventBus.on(BlockEvents.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(BlockEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(BlockEvents.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(BlockEvents.FLOW_CDM);
  }

  private _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  private _componentDidUpdate(oldProps: Object, newProps: Object): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(BlockEvents.FLOW_RENDER);
    }
  }

  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  private _addAttributes() {
    const { attributes = {} } = this.props;

    Object.keys(attributes).forEach((attribute) => {
      if (attribute === 'disabled') {
        if (attributes[attribute] == true) {
          this._element.setAttribute(attribute, '');
        }
      } else {
        this._element.setAttribute(attribute, attributes[attribute]);
      }
    });
  }

  private _delEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  private _render() {
    const block = this.render();
    this._delEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block as Node);
    this._addAttributes();
    this._addEvents();
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }
}

export default Block;
