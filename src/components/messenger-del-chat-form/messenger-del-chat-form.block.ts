import Block from '../../utils/block';
import template from './messenger-del-chat-form.template';
import './messenger-del-chat-form.styles.scss';

import Button from '../button/button.block';
import { getDataFromInputs } from '../../utils/forms';
import { withCurrentChat } from '../../utils/connect';
import chatsController from '../../controllers/chats';

class MessengerDelChatForm extends Block {
  constructor(props: Object) {
    super('form', {
      ...props,
      id: 15,
      buttonSubmit: new Button({
        text: 'Удалить чат',
        attributes: {
          class: 'btn btn-danger w-100',
          type: 'submit',
        },
      }),
      events: {
        submit: (e) => {
          e.preventDefault();
          console.log(e);
          console.log(getDataFromInputs(['foobar']));
          const { foobar } = getDataFromInputs(['foobar']);
          console.log(chatId);
          chatsController.deleteChat(foobar);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withCurrentChat(MessengerDelChatForm);
