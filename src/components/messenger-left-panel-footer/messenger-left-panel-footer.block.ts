import Block from '../../utils/block';
import template from './messenger-left-panel-footer.template';
import './messenger-left-panel-footer.styles.scss';

import Modal from '../modal/modal.block';
import Card from '../card/card.block';
import Button from '../button/button.block';
import MessengerAddChatForm from '../messenger-add-chat-form/messenger-add-chat-form.block';

class MessengerLeftPanelFooter extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      attributes: {
        class: 'leftpanel__footer',
      },
      addChatButton: new Button({
        text: 'Создать чат',
        events: {
          click: (e) => {
            e.stopPropagation();
            const element: Element | null =
              document.getElementById('add_chat_modal');
            if (element) {
              element.classList.add('modal_show');
            }
          },
        },
      }),
      addChatModal: new Modal({
        id: 'add_chat_modal',
        content: new Card({
          title: 'Создать чат',
          body: new MessengerAddChatForm({}),
        }),
      }),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerLeftPanelFooter;
