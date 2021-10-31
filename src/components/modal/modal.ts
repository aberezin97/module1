import Block from '../../modules/block';
import template from './template';

const pug = require('pug');

class Modal extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      ...props,
      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          const target: Element = e.target as Element;
          const element: Element | null = document.querySelector(`#${props.id}`);
          if (element) {
            if (target === element) {
              element.classList.remove('modal_show');
            }
          }
        },
      },
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default Modal;
