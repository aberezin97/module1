/* eslint no-underscore-dangle: 0 */

import Block, { render } from './block';

function isEqual(lhs: any, rhs: any) {
  return lhs === rhs;
}

class Route {
  private _pathname: string;

  private _blockClass: new (props: Object) => Block;

  private _block: Block | null;

  private _props: Record<string, any>;

  constructor(
    pathname: string,
    view: new (props: Object) => Block,
    props: Record<string, any>
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      document.querySelector(`[data-id='${this._block.id}']`)?.remove();
      // console.log(this._block.id);
      // this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

export default Route;
