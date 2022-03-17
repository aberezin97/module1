import Block from '../../utils/block';
import template from './messenger-chats.template';
import './messenger-chats.styles.scss';

import chatsController from '../../controllers/chats';
import { withChats } from '../../utils/connect';

class MessengerChats extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      attributes: {
        class: 'leftpanel__chats',
      },
      chats: [],
      events: {
        click: (e: PointerEvent) => {
          const chatButtons = document.getElementsByClassName('chat-button');
          const target: Element | null = e.target as Element;
          for (let i = 0; i < chatButtons.length; i += 1) {
            chatButtons[i].classList.remove('chat-button_active');
          }
          if (target) {
            const button = target.closest('.chat-button') as HTMLElement;
            if (button) {
              button.classList.add('chat-button_active');
              chatsController.setCurrentChat(
                JSON.parse(button.dataset.chatData as string)
              );
            } else {
              chatsController.setCurrentChat(null);
            }
          }
        },
      },
    });
    chatsController.getChats();
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withChats(MessengerChats);
