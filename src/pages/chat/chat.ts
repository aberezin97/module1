import Block from '../../modules/block';
import ChatControlButton from './chat-control-button/chat-control-button';
import ChatAttachButton from './chat-attach-button/chat-attach-button';
import ChatSendButton from './chat-send-button/chat-send-button';
import SentMessage from './sent-message/sent-message';
import ReceivedMessage from './received-message/received-message';
import ChatLeftPannel from './chat-left-pannel/chat-left-pannel';
import template from './template';
import { withUser } from '../../modules/connect';
import UserController from '../../controllers/user';

const pug = require('pug');

class ChatPage extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      controlButton: new ChatControlButton({}),
      attachButton: new ChatAttachButton({}),
      sendButton: new ChatSendButton({}),
      leftPanel: new ChatLeftPannel({}),
      messages: new Array<SentMessage | ReceivedMessage>(),
      user: {
        first_name: '',
        second_name: '',
      },
    });
    const userController = new UserController();
    userController.getUser();
  }

  render() {
    console.log(this.props);
    const fn = pug.compile(template, {});
    document.title = 'Мессенджер - Чат';
    return fn({
      ...this.props,
      messages: (this.props.messages as string[]).join(''),
    });
  }
}

export default withUser(ChatPage);
