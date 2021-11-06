import ChatPage from './chat';
import SentMessage from './sent-message/sent-message';
import ReceivedMessage from './received-message/received-message';
import ChatButton from './chat-left-pannel/chat-chats/chat-button/chat-button';
import render from '../../modules/render';

const page = new ChatPage({
  name: 'Alexander Berezin',
  status: 'online',
});
render('.app', page);

const messages = new Array<SentMessage | ReceivedMessage>();
const chatButtons = new Array<ChatButton>();
page.setProps({
  name: 'Alexander Ivansov',
});
page.setProps({
  name: 'Alexander Ivansovs',
});
page.setProps({
  name: 'Alexander Ivansove',
});
page.setProps({
  name: 'Alexander Ivansova',
});
setTimeout(() => {
  chatButtons.push(new ChatButton({
    name: 'Alexander Berezin',
    message: 'Hello, world!',
    date: 'Now',
    count: '99',
  }));
  chatButtons.push(new ChatButton({
    name: 'Alexander Berezin',
    message: 'Hello, world!',
    date: 'Now',
    count: '99',
  }));
  messages.push(new SentMessage({ msg: 'Hello, world!', time: 'Now' }));
  messages.push(new ReceivedMessage({ msg: 'Hello, world!', time: 'Now' }));
  page.setProps({
    name: 'Alexander Ivanov',
    status: 'online',
    messages,
  });
  page.props.leftPanel.props.chats.setProps({
    chatButtons,
  });
}, 1000);
