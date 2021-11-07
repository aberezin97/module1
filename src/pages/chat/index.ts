import ChatPage from './chat';
import render from '../../modules/render';

const page = new ChatPage({
  name: 'Alexander Berezin',
  status: 'online',
});
render('.app', page);
