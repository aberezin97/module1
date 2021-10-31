import Block from '../../../modules/block';
import ChatChats from './chat-chats/chat-chats';
import ChatHeader from './chat-header/chat-header';
import template from './template';

const pug = require('pug');

class ChatLeftPannel extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      chats: new ChatChats({}),
      header: new ChatHeader({}),
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default ChatLeftPannel;
