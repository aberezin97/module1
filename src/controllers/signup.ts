import SignupAPI from '../api/signup';
import router from '../index';
import store from '../utils/store';

export interface SignupFormModel {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

class SignupController {
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
      store.set('error', JSON.parse(error.message)['reason']);
    }
  }
}

export default new SignupController();
