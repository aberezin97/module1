import UserAPI from '../api/user';
import store from '../modules/store';
import { router } from '../pages';

class UserController {
  public async getUser() {
    const userAPI = new UserAPI();
    try {
      const response = (await userAPI.request()) as XMLHttpRequest;
      if (response.status === 200) {
        console.log(response);
        const data = JSON.parse(response.response);
        store.set('user', data);
        console.log(data);
      } else {
        console.log(response);
        router.go('/');
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async logout() {
    const userAPI = new UserAPI();
    try {
      const response = (await userAPI.post()) as XMLHttpRequest;
      if (response.status === 200) {
        console.log(response);
      } else {
        console.log(response);
        router.go('/');
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserController;
