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
    console.log(this.props);
    return this.compile(template, this.props);
  }
}

export default withMessages(MessengerConversation);
