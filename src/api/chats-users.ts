import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';

const http = new HTTPTransport();

class ChatsUsersAPI extends BaseAPI {
  private data: string;

  constructor(data = {}) {
    super();
    try {
      this.data = JSON.stringify(data);
    } catch (error) {
      console.log(error);
    }
  }

  create() {
    let _id;
    try {
      const { id } = JSON.parse(this.data);
      _id = id;
    } catch (error) {
      console.log(error);
    }
    return http
      .post(`${this.baseUrl}/chats/token/${_id}`, {
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }

  update() {
    return http
      .put(`${this.baseUrl}/chats/users`, {
        withCredentials: true,
        data: this.data,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }

  delete() {
    return http
      .delete(`${this.baseUrl}/chats/users`, {
        withCredentials: true,
        data: this.data,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default ChatsUsersAPI;
