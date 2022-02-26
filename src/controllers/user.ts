import UserAPI from '../api/user';
import store from '../utils/store';
import router from '../index';

class UserController {
  public async isAuthenticated() {
    const userAPI = new UserAPI();
    try {
      const response = await userAPI.request();
      if (response.status === 200) {
        console.log(response);
        const data = JSON.parse(response.response);
        router.go('/messenger');
        store.set('user', data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async getUser() {
    const userAPI = new UserAPI();
    try {
      const response = await userAPI.request();
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
        router.go('/');
      } else {
        console.log(response);
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
