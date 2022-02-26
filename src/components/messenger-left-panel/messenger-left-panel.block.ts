import Block from '../../utils/block';
import template from './messenger-left-panel.template';
import './messenger-left-panel.styles.scss';

import MessengerChats from '../messenger-chats/messenger-chats.block';
import MessengerLeftPanelTopbar from '../messenger-left-panel-topbar/messenger-left-panel-topbar.block';
import MessengerLeftPanelFooter from '../messenger-left-panel-footer/messenger-left-panel-footer.block';

class MessengerLeftPanel extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      chats: new MessengerChats({}),
      header: new MessengerLeftPanelTopbar({}),
      footer: new MessengerLeftPanelFooter({}),
      attributes: {
        class: 'leftpanel',
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerLeftPanel;
