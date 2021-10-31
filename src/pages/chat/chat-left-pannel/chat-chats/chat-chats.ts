import Block from '../../../../modules/block';
import ChatButton from './chat-button/chat-button';
import template from './template';

const pug = require('pug');

class ChatChats extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      chatButtons: new Array<ChatButton>(),
      events: {
        click: (e: PointerEvent) => {
          const chatButtons = document.getElementsByClassName('chat-button');
          const target: Element | null = e.target as Element;
          for (let i = 0; i < chatButtons.length; i += 1) {
            chatButtons[i].classList.remove('chat-button_active');
          }
          if (target) {
            const button = target.closest('.chat-button');
            if (button) {
              button.classList.add('chat-button_active');
            }
          }
        },
      },
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn({
      ...this.props,
      chatButtons: this.props.chatButtons.map((chatButton: ChatButton) => chatButton).join(''),
    });
  }
}

export default ChatChats;
