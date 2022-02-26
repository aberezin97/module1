import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';
import { ChangePasswordFormModel } from '../controllers/change-user';

const http = new HTTPTransport();

class ChangeUserPasswordAPI extends BaseAPI {
  private data: string;
  constructor(data: ChangePasswordFormModel) {
    super();
    this.data = JSON.stringify(data);
  }

  update() {
    return http
      .put(`${this.baseUrl}/user/password`, {
        withCredentials: true,
        data: this.data,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default ChangeUserPasswordAPI;
