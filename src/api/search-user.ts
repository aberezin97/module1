import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';

const http = new HTTPTransport();

class SearchUserAPI extends BaseAPI {
  private data: string;

  constructor(data = {}) {
    super();
    this.data = JSON.stringify(data);
  }

  request() {
    const { id } = JSON.parse(this.data);
    return http
      .get(`${this.baseUrl}/user/${id}`, {
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }

  post() {
    return http
      .post(`${this.baseUrl}/user/search`, {
        withCredentials: true,
        data: this.data,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default SearchUserAPI;
