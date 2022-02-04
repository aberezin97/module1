import HTTPTransport from '../modules/http';
import BaseAPI from '../modules/base-api';

const http = new HTTPTransport();

class UserAPI extends BaseAPI {
  constructor() {
    super();
  }

  request() {
    return http
      .get(`${this.baseUrl}/api/v2/auth/user`, {
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }

  post() {
    return http
      .post(`${this.baseUrl}/api/v2/auth/logout`, {
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default UserAPI;
