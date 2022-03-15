import Block from '../../utils/block';
import template from './messenger-dropdown-button.template';
import './messenger-dropdown-button.styles.scss';

class MessengerDropdownButton extends Block {
  constructor(props: Record<string, any>) {
    super('button', {
      ...props,
      attributes: {
        class: 'dropdown__button',
        id: props.id,
        type: 'button',
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerDropdownButton;
