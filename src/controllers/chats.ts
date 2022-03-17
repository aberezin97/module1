/* eslint-disable class-methods-use-this */
import ChatsAPI from '../api/chats';
import ChatsUsersAPI from '../api/chats-users';
import SearchUserAPI from '../api/search-user';
import store from '../utils/store';

class ChatsController {
  public async getChats() {
    const chatsAPI = new ChatsAPI();
    try {
      const response = await chatsAPI.request() as XMLHttpRequest;
      if (response.status === 200) {
        const data = JSON.parse(response.response);
        store.set('chats', data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteChat(id: Number) {
    const chatsAPI = new ChatsAPI({ chatId: id });
    try {
      const response = await chatsAPI.delete() as XMLHttpRequest;
      if (response.status === 200) {
        const { chats } = store.getState();
        store.set('chats', chats.filter((chat: Record<string, any>) => chat.id != id));
        store.set('currentChat', null);
      } else {
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async createChat(title: string) {
    const chatsAPI = new ChatsAPI({ title: title });
    try {
      const response = await chatsAPI.create() as XMLHttpRequest;
      if (response.status === 200) {
        const { id } = JSON.parse(response.response);
        const { chats } = store.getState();
        const newChat = {
          id,
          title,
          avatar: null,
          unread_count: 0,
          last_message: null,
        };
        if (chats) {
          store.set('chats', [...chats, newChat]);
        } else {
          store.set('chats', [newChat]);
        }
      } else {
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async setCurrentChat(chat: Record<string, any> | null) {
    store.set('currentChat', chat);
    if (chat === null) return;
    const chatsUsersAPI = new ChatsUsersAPI({ id: chat.id });
    try {
      const response = await chatsUsersAPI.create() as XMLHttpRequest;
      if (response.status === 200) {
        const { token } = JSON.parse(response.response);
        const { user } = store.getState();
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${user.id}/${chat.id}/${token}`);
        store.set('socket', socket);
        store.set('messages', []);
        socket.addEventListener('message', event => {
          const { messages } = store.getState();
          const data = JSON.parse(event.data);
          if (messages) {
            store.set('messages', Array.isArray(data) ? [...messages, ...data] : [...messages, data]);
          } else {
            store.set('messages', Array.isArray(data) ? [...data] : [data]);
          }
        });
        socket.addEventListener('open', () => {
          socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
          })); 
        });
        socket.addEventListener('close', () => {
          store.set('messages', []);
        });
        socket.addEventListener('error', (e) => {
          console.log(`Error: ${e}`);
        });
      } else {
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async addUserToTheChat(chatId: Number, login: string) {
    const searchUserAPI = new SearchUserAPI({ login });
    try {
      const searchResponse = await searchUserAPI.post() as XMLHttpRequest;
      if (searchResponse.status === 200) {
        const users = JSON.parse(searchResponse.response).filter(
          (user: Record<string, any>) => user.login === login
        );
        if (users.length !== 1) {
          throw new Error('No such user');
        };
        const userId = users[0]['id'];
        const chatsUsersAPI = new ChatsUsersAPI({
          users: [
            userId,
          ],
          chatId
        });
        const addResponse = await chatsUsersAPI.update() as XMLHttpRequest;
        if (addResponse.status === 200) {
          console.log(addResponse.response);
        } else {
          throw new Error(addResponse.responseText);
        }
      } else {
        throw new Error(searchResponse.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async delUserFromTheChat(chatId: Number, login: string) {
    const searchUserAPI = new SearchUserAPI({ login });
    try {
      const searchResponse = await searchUserAPI.post() as XMLHttpRequest;
      if (searchResponse.status === 200) {
        const users = JSON.parse(searchResponse.response).filter(
          (user: Record<string, any>) => user.login === login
        );
        if (users.length !== 1) {
          throw new Error('No such user');
        };
        const userId = users[0]['id'];
        const chatsUsersAPI = new ChatsUsersAPI({
          users: [
            userId,
          ],
          chatId
        });
        const addResponse = await chatsUsersAPI.delete() as XMLHttpRequest;
        if (addResponse.status === 200) {
          console.log(addResponse.response);
        } else {
          throw new Error(addResponse.responseText);
        }
      } else {
        throw new Error(searchResponse.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatsController();
