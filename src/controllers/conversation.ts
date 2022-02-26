/* eslint-disable class-methods-use-this */
import store from '../utils/store';

class ConversationController {
  public async sendMessage(message) {
    const { socket } = store.getState();
    if (socket) {
      socket.send(
        JSON.stringify({
          content: message,
          type: 'message',
        })
      );
    }
  }
}

export default new ConversationController();
