import Block from '../../utils/block';
import template from './messenger-send-button.template';
import './messenger-send-button.styles.scss';

class MessengerSendButton extends Block {
  constructor(props: Object) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerSendButton;
