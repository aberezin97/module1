import SigninAPI from '../api/signin';
import router from '../index';
import store from '../utils/store';

export interface SigninFormModel {
  login: string;
  password: string;
}

class SigninController {
  public async signin(data: SigninFormModel) {
    const signinAPI = new SigninAPI(data);
    try {
      const response = (await signinAPI.request()) as XMLHttpRequest;
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

export default new SigninController();
