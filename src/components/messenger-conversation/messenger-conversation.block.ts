import Block from '../../utils/block';
import template from './messenger-conversation.template';
import './messenger-conversation.styles.scss';

import { withMessages } from '../../utils/connect';

class MessengerConversation extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      attributes: {
        class: 'conversation',
      },
      messages: [],
    });
  }

  render() {
    for (let message of this.props.messages) {
      message['time'] = new Date(message.time).toLocaleString('ru-ru', {
        weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        hour: 'numeric', // numeric, 2-digit
        minute: 'numeric', // numeric, 2-digit
        second: 'numeric', // numeric, 2-digit
      });
    }
    return this.compile(template, this.props);
  }
}

export default withMessages(MessengerConversation);
