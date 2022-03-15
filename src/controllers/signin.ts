import SigninAPI from '../api/signin';
import router from '../index';

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
      console.log(error);
    }
  }
}

export default new SigninController();
