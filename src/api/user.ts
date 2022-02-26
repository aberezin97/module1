import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';

const http = new HTTPTransport();

class UserAPI extends BaseAPI {
  request() {
    return http
      .get(`${this.baseUrl}/auth/user`, {
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }

  post() {
    return http
      .post(`${this.baseUrl}/auth/logout`, {
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default UserAPI;
