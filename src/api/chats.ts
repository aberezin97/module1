import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';

const http = new HTTPTransport();

class ChatsAPI extends BaseAPI {
  private data: string;

  constructor(data = {}) {
    super();
    this.data = JSON.stringify(data);
  }

  request() {
    return http
      .get(`${this.baseUrl}/chats`, {
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }

  create() {
    return http
      .post(`${this.baseUrl}/chats`, {
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
      .delete(`${this.baseUrl}/chats`, {
        withCredentials: true,
        data: this.data,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default ChatsAPI;
