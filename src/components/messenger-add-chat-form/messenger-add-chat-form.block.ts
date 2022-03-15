import Block from '../../utils/block';
import template from './messenger-add-chat-form.template';
import './messenger-add-chat-form.styles.scss';

import Button from '../button/button.block';
import Input from '../input/input.block';
import { loginRegex } from '../../utils/regex';
import { getDataFromInputs } from '../../utils/forms';
import chatsController from '../../controllers/chats';

class MessengerAddChatForm extends Block {
  constructor(props: Object) {
    super('form', {
      ...props,
      id: null,
      inputLogin: new Input({
        name: 'login',
        id: 'login',
        type: 'text',
        placeholder: 'Имя чата',
        validate: (value: string): boolean => loginRegex.test(value),
      }),
      buttonSubmit: new Button({
        text: 'Создать чат',
        attributes: {
          class: 'btn btn-primary w-100',
          type: 'submit',
        },
      }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const { login } = getDataFromInputs(['login']);
          chatsController.createChat(login);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerAddChatForm;
