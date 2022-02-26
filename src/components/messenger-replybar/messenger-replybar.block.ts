import Block from '../../utils/block';
import template from './messenger-replybar.template';
import './messenger-replybar.styles.scss';

import Input from '../input/input.block';
import MessengerAttachButton from '../messenger-attach-button/messenger-attach-button.block';
import MessengerSendButton from '../messenger-send-button/messenger-send-button.block';
import converstationController from '../../controllers/conversation';
import { getDataFromInputs } from '../../utils/forms';

class MessengerReplybar extends Block {
  constructor(props: Object) {
    super('form', {
      ...props,
      attributes: {
        class: 'replybar',
      },
      buttonAttach: new MessengerAttachButton({}),
      inputMessage: new Input({
        id: 'message',
        placeholder: 'Сообщение...',
      }),
      buttonSend: new MessengerSendButton({
        events: {
          click: (e) => {
            const { message } = getDataFromInputs(['message']);
            converstationController.sendMessage(message);
          },
        },
      }),
      events: {
        submit: (e) => {
          e.preventDefault();
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerReplybar;
