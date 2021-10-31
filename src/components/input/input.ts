import Block from '../../modules/block';
import template from './template';

const pug = require('pug');

class Input extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      isDisabled: false,
      value: '',
      ...props,
      events: {
        focus: (e: FocusEvent) => {
          if (e.target) {
            const target: HTMLInputElement = e.target as HTMLInputElement;
            target.classList.remove('text-input_active');
            target.classList.remove('text-input_wrong');
          }
        },
        blur: (e: FocusEvent) => {
          if (e.target) {
            const target: HTMLInputElement = e.target as HTMLInputElement;
            target.dataset.isValid = 'false';
            if (target.value.length > 0) {
              const re: RegExp | null = props.regex as RegExp;
              let isConfirmed = true;
              if (props.confirmation) {
                for (let i = 0; i < props.confirmation.length; i += 1) {
                  const element = document.getElementById(props.confirmation[i]) as HTMLInputElement;
                  if (element.value !== target.value) {
                    isConfirmed = false;
                    break;
                  }
                }
              }
              if (!re || (re.test(target.value) && isConfirmed)) {
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
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default Input;
