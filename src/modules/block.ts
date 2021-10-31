/* eslint no-underscore-dangle: 0 */

import { v4 as makeUUID } from 'uuid';
import EventBus from './eventbus';

enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_RENDER = 'flow:render',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_CHILDREN = 'flow:component-children',
}

class Block {
  props: Record<string, any>;

  eventBus: () => EventBus;

  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();

    this._id = makeUUID();
    this._wasRendered = false;
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy({ ...props, __id: this._id });
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  get element() {
    return this._element;
  }

  get id() {
    return this._id;
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  addEvents() {}

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  componentDidMount(oldProps = {}) {
    if (oldProps) return true;
    return true;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  componentDidUpdate(oldProps: Object, newProps: Object) {
    if (oldProps && newProps) return true;
    return true;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  render() {}

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

  private _meta: { tagName: string; props: {} };

  private _element: any;

  private _id: string;

  private _wasRendered: boolean;

  private _makePropsProxy(props: {}): Object {
    const self = this;

    // eslint-disable-next-line no-param-reassign
    props = new Proxy(props, {
      set(target: Record<string, any>, prop: string, value) {
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        self.eventBus().emit(EVENTS.FLOW_CDU);
        return true;
      },

      deleteProperty() {
        throw new Error('Нет доступа!');
      },
    });

    return props;
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(EVENTS.FLOW_CHILDREN, this._children.bind(this));
  }

  private _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  private _componentDidUpdate(oldProps: Object, newProps: Object): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }

  private _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
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
    this._element.innerHTML = block;
    if (!this._wasRendered) {
      this._element = this._element.firstChild;
      this._element.setAttribute('data-id', this._id);
      this._wasRendered = true;
    }
    this._addEvents();
    this.eventBus().emit(EVENTS.FLOW_CHILDREN);
  }

  private _children() {
    Object.keys(this.props).forEach((propName) => {
      if (this.props[propName] instanceof Block) {
        const id = this.props[propName].props.__id;
        const element = this._element.querySelector(`[data-id='${id}']`);
        const { parentElement } = element;
        parentElement.replaceChild(this.props[propName].element, element);
      }
    });
  }

  private _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }
}

export default Block;
