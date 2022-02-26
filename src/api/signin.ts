import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';
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
      .post(`${this.baseUrl}/auth/signin`, {
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
