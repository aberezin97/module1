import HTTPTransport from '../utils/http';
import BaseAPI from '../utils/base-api';
import { SignupFormModel } from '../controllers/signup';

const http = new HTTPTransport();

class SignupAPI extends BaseAPI {
  private data: string;
  constructor(data: SignupFormModel) {
    super();
    this.data = JSON.stringify(data);
  }

  post() {
    return http
      .post(`${this.baseUrl}/auth/signup`, {
        withCredentials: true,
        data: this.data,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response);
  }
}

export default SignupAPI;
