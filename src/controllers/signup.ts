import SignupAPI from '../api/signup';
import store from '../modules/store';
import { router } from '../pages';

export interface SignupFormModel {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export class SignupController {
  public async signup(data: SignupFormModel) {
    const signupAPI = new SignupAPI(data);
    try {
      const response = (await signupAPI.post()) as XMLHttpRequest;
      if (response.status === 200) {
        router.go('/messenger');
      } else {
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
