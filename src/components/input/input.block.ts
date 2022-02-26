import Block from '../../utils/block';
import template from './input.template';
import './input.styles.scss';

class Input extends Block {
  constructor(props: Record<string, any>) {
    super('input', {
      isDisabled: false,
      value: '',
      validate: null,
      ...props,
      attributes: {
        class: 'form-control',
        id: props.id || '',
        name: props.name || '',
        placeholder: props.placeholder || '',
        value: props.value || '',
        type: props.type || 'text',
        disabled: props.disabled,
      },
      events: {
        events: props.events || {},
        focus: (e: FocusEvent) => {
          if (e.target) {
            const target: HTMLInputElement = e.target as HTMLInputElement;
            target.dataset.isValid = 'false';
            target.classList.remove('is-valid');
            target.classList.remove('is-invalid');
          }
        },
        blur: (e: FocusEvent) => {
          if (e.target) {
            if (this.props.validate) {
              const target: HTMLInputElement = e.target as HTMLInputElement;
              if (target.value.length > 0) {
                if (this.props.validate(target.value)) {
                  target.classList.add('is-valid');
                  target.dataset.isValid = 'true';
                } else {
                  target.classList.add('is-invalid');
                }
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
    return this.compile(template, this.props);
  }
}

export default Input;
