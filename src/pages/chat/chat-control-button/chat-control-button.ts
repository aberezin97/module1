import Block from '../../../modules/block';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';
import { loginRegex } from '../../../modules/regex';
import Modal from '../../../components/modal/modal';
import DropdownButton from './dropdown-button/dropdown-button';
import template from './template';

const pug = require('pug');

class ChatControlButton extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      addUserButton: new DropdownButton({
        id: 'add_user_button',
        icon: 'fas fa-user-plus',
        text: 'Добавить пользователя',
        events: {
          click: (e: PointerEvent) => {
            e.stopPropagation();
            const element: Element | null = document.getElementById('add_user_modal');
            if (element) {
              element.classList.add('modal_show');
            }
          },
        },
      }),
      addUserModal: new Modal({
        id: 'add_user_modal',
        header: 'Добавить пользователя',
        body: new Input({
          placeholder: 'Имя пользователя',
          regex: loginRegex,
        }),
        footer: new Button({
          text: 'Добавить пользователя',
          type: Button.Type.Blue,
        }),
      }),
      delUserButton: new DropdownButton({
        id: 'del_user_button',
        icon: 'fas fa-user-minus',
        text: 'Удалить пользователя',
        events: {
          click: (e: PointerEvent) => {
            e.stopPropagation();
            const element: Element | null = document.getElementById('del_user_modal');
            if (element) {
              element.classList.add('modal_show');
            }
          },
        },
      }),
      delUserModal: new Modal({
        id: 'del_user_modal',
        header: 'Удалить пользователя',
        body: new Input({
          placeholder: 'Имя пользователя',
          regex: loginRegex,
        }),
        footer: new Button({
          text: 'Удалить пользователя',
          type: Button.Type.Red,
        }),
      }),
      delChatButton: new DropdownButton({
        id: 'del_chat_button',
        icon: 'fas fa-trash',
        text: 'Удалить чат',
        events: {
          click: (e: PointerEvent) => {
            e.stopPropagation();
            const element: Element | null = document.getElementById('del_chat_modal');
            if (element) {
              element.classList.add('modal_show');
            }
          },
        },
      }),
      delChatModal: new Modal({
        id: 'del_chat_modal',
        header: 'Удалить чат',
        body: '<p>Подтвердите удаления чата</p>',
        footer: new Button({
          text: 'Удалить чат',
          type: Button.Type.Red,
        }),
      }),

      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          const element: Element | null = document.getElementById('dropdown__content');
          if (element) {
            element.classList.toggle('dropdown__content_show');
          }
        },
      },
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default ChatControlButton;
