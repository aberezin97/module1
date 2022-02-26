import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';

const http = new HTTPTransport();

class ChangeUserAvatarAPI extends BaseAPI {
  private data: string;
  constructor(data: FormData) {
    super();
    this.data = data;
  }

  update() {
    return http
      .put(`${this.baseUrl}/user/profile/avatar`, {
        withCredentials: true,
        data: this.data,
      })
      .then((response) => response);
  }
}

export default ChangeUserAvatarAPI;
