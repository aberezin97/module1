import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';
import { ChangeProfileFormModel } from '../controllers/change-user';

const http = new HTTPTransport();

class ChangeUserProfileAPI extends BaseAPI {
  private data: string;
  constructor(data: ChangeProfileFormModel) {
    super();
    this.data = JSON.stringify(data);
  }

  update() {
    return http
      .put(`${this.baseUrl}/user/profile`, {
        withCredentials: true,
        data: this.data,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default ChangeUserProfileAPI;
