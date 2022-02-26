import Block from '../../utils/block';
import template from './messenger-right-panel.template';
import './messenger-right-panel.styles.scss';

import MessengerRightPanelTopbar from '../messenger-right-panel-topbar/messenger-right-panel-topbar.block';
import MessengerConversation from '../messenger-conversation/messenger-conversation.block';
import MessengerReplybar from '../messenger-replybar/messenger-replybar.block';
import { withCurrentChat } from '../../utils/connect';

class MessengerRightPanel extends Block {
  constructor(props: Object) {
    super('div', {
      topbar: new MessengerRightPanelTopbar({}),
      conversation: new MessengerConversation({}),
      replybar: new MessengerReplybar({}),
      attributes: {
        class: 'rightpanel',
      },
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withCurrentChat(MessengerRightPanel);
