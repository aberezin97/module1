import HTTPTransport from '../modules/http';
import BaseAPI from '../modules/base-api';
import { SigninFormModel } from '../controllers/signin';

const http = new HTTPTransport();

class SigninAPI extends BaseAPI {
  private data: string;
  constructor(data: SigninFormModel) {
    super();
    this.data = JSON.stringify(data);
  }

  request() {
    return http
      .post(`${this.baseUrl}/api/v2/auth/signin`, {
        withCredentials: true,
        data: this.data,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default SigninAPI;
