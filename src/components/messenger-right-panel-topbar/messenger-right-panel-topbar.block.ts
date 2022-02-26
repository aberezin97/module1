import Block from '../../utils/block';
import template from './messenger-right-panel-topbar.template';
import './messenger-right-panel-topbar.styles.scss';

import MessengerControlButton from '../messenger-control-button/messenger-control-button.block';
import { withCurrentChat } from '../../utils/connect';

class MessengerRightPanelTopbar extends Block {
  constructor(props: Object) {
    super('div', {
      controlButton: new MessengerControlButton({
        currentChat: props.currentChat,
      }),
      title: null,
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withCurrentChat(MessengerRightPanelTopbar);
