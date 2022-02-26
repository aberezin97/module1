import Block from '../../utils/block';
import template from './messenger-control-button.template';
import './messenger-control-button.styles.scss';

import MessengerAddUserForm from '../messenger-add-user-form/messenger-add-user-form.block';
import MessengerDelChatForm from '../messenger-del-chat-form/messenger-del-chat-form.block';
import MessengerDelUserForm from '../messenger-del-user-form/messenger-del-user-form.block';
import Card from '../card/card.block';
import Modal from '../modal/modal.block';
import MessengerDropdownButton from '../messenger-dropdown-button/messenger-dropdown-button.block';

class MessengerControlButton extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      attributes: {
        class: 'dropdown',
      },
      addUserButton: new MessengerDropdownButton({
        id: 'add_user_button',
        icon: 'fas fa-user-plus',
        text: 'Добавить пользователя',
        events: {
          click: (e: PointerEvent) => {
            e.stopPropagation();
            const element: Element | null =
              document.getElementById('add_user_modal');
            if (element) {
              element.classList.add('modal_show');
            }
          },
        },
      }),
      addUserModal: new Modal({
        id: 'add_user_modal',
        content: new Card({
          title: 'Добавить пользователя',
          body: new MessengerAddUserForm({}),
        }),
      }),
      delUserButton: new MessengerDropdownButton({
        id: 'del_user_button',
        icon: 'fas fa-user-minus',
        text: 'Удалить пользователя',
        events: {
          click: (e: PointerEvent) => {
            e.stopPropagation();
            const element: Element | null =
              document.getElementById('del_user_modal');
            if (element) {
              element.classList.add('modal_show');
            }
          },
        },
      }),
      delUserModal: new Modal({
        id: 'del_user_modal',
        content: new Card({
          title: 'Удалить пользователя',
          body: new MessengerDelUserForm({}),
        }),
      }),
      delChatButton: new MessengerDropdownButton({
        id: 'del_chat_button',
        icon: 'fas fa-trash',
        text: 'Удалить чат',
        events: {
          click: (e: PointerEvent) => {
            e.stopPropagation();
            const element: Element | null =
              document.getElementById('del_chat_modal');
            if (element) {
              element.classList.add('modal_show');
            }
          },
        },
      }),
      delChatModal: new Modal({
        id: 'del_chat_modal',
        content: new Card({
          title: 'Удалить чат',
          body: new MessengerDelChatForm({}),
        }),
      }),

      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          const element: Element | null =
            document.getElementById('dropdown__content');
          if (element) {
            element.classList.toggle('dropdown__content_show');
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerControlButton;
