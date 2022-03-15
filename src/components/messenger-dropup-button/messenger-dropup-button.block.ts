import Block from '../../utils/block';
import template from './messenger-dropup-button.template';
import './messenger-dropup-button.styles.scss';

class MessengerDropupButton extends Block {
  constructor(props: Record<string, any>) {
    super('button', {
      ...props,
      attributes: {
        class: 'dropup__button',
        type: 'button',
        id: props.id,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerDropupButton;
