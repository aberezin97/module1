import Block from '../../modules/block';
import template from './template';

const pug = require('pug');

class Input extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      isDisabled: false,
      value: '',
      validate: (value: string): boolean => true,
      ...props,
      events: {
        events: props.events || {},
        focus: (e: FocusEvent) => {
          if (e.target) {
            const target: HTMLInputElement = e.target as HTMLInputElement;
            target.dataset.isValid = 'false';
            target.classList.remove('text-input_active');
            target.classList.remove('text-input_wrong');
          }
        },
        blur: (e: FocusEvent) => {
          if (e.target) {
            const target: HTMLInputElement = e.target as HTMLInputElement;
            if (target.value.length > 0) {
              if (this.props.validate(target.value)) {
                target.classList.add('text-input_active');
                target.dataset.isValid = 'true';
              } else {
                target.classList.add('text-input_wrong');
              }
            }
          }
        },
      },
    });
    if (props.isValid) {
      this.element.dataset.isValid = 'true';
    }
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default Input;
