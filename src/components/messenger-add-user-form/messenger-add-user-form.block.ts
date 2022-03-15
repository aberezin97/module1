import Block from '../../utils/block';
import template from './messenger-add-user-form.template';
import './messenger-add-user-form.styles.scss';

import Button from '../button/button.block';
import Input from '../input/input.block';
import { loginRegex, loginExplanation } from '../../utils/regex';
import { withCurrentChat } from '../../utils/connect';
import { getDataFromInputs } from '../../utils/forms';
import chatsController from '../../controllers/chats';

class MessengerAddUserForm extends Block {
  constructor(props: Object) {
    super('form', {
      ...props,
      id: null,
      loginExplanation,
      inputLogin: new Input({
        name: 'login',
        id: 'add_user_login',
        type: 'text',
        placeholder: 'Логин',
        validate: (value: string): boolean => loginRegex.test(value),
      }),
      buttonSubmit: new Button({
        text: 'Добавить пользователя',
        attributes: {
          class: 'btn btn-primary w-100',
          type: 'submit',
        },
      }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          console.log(this._element);
          const { add_user_chatid, add_user_login } = getDataFromInputs([
            'add_user_chatid',
            'add_user_login',
          ]);
          console.log(add_user_chatid, add_user_login);
          chatsController.addUserToTheChat(add_user_chatid, add_user_login);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withCurrentChat(MessengerAddUserForm);
