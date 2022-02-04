import HTTPTransport from '../modules/http';
import BaseAPI from '../modules/base-api';
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
      .post(`${this.baseUrl}/api/v2/auth/signup`, {
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
