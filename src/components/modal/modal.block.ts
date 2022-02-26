import Block from '../../utils/block';
import template from './modal.template';
import './modal.styles.scss';

class Modal extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      ...props,
      attributes: {
        class: 'modal',
        id: props.id,
      },
      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          const target: Element = e.target as Element;
          const element: Element | null = document.querySelector(
            `#${props.id}`
          );
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
    return this.compile(template, this.props);
  }
}

export default Modal;
