import Block from '../../utils/block';
import template from './messenger-del-user-form.template';
import './messenger-del-user-form.styles.scss';

import Button from '../button/button.block';
import Input from '../input/input.block';
import { loginRegex } from '../../utils/regex';
import { getDataFromInputs } from '../../utils/forms';
import chatsController from '../../controllers/chats';
import { withCurrentChat } from '../../utils/connect';

class MessengerDelUserForm extends Block {
  constructor(props: Object) {
    super('form', {
      ...props,
      inputLogin: new Input({
        name: 'login',
        id: 'del_user_login',
        type: 'text',
        placeholder: 'Логин',
        validate: (value: string): boolean => loginRegex.test(value),
      }),
      buttonSubmit: new Button({
        text: 'Удалить пользователя',
        attributes: {
          class: 'btn btn-danger w-100',
          type: 'submit',
        },
      }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          console.log(this._element);
          const { del_user_chatid, del_user_login } = getDataFromInputs([
            'del_user_chatid',
            'del_user_login',
          ]);
          console.log(del_user_chatid, del_user_login);
          chatsController.delUserFromTheChat(del_user_chatid, del_user_login);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withCurrentChat(MessengerDelUserForm);
