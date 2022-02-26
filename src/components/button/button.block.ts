import Block from '../../utils/block';
import template from './button.template';
import './button.styles.scss';

class Button extends Block {
  constructor(props: Record<string, any>) {
    super('button', {
      isDisabled: false,
      type: 'button',
      attributes: {
        class: 'btn btn-primary',
      },
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default Button;
