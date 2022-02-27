import ChangeUserAvatarAPI from '../api/change-user-avatar';
import ChangeUserProfileAPI from '../api/change-user-profile';
import ChangeUserPasswordAPI from '../api/change-user-password';
import store from '../utils/store';
import router from '../index';

export interface ChangeProfileFormModel {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface ChangePasswordFormModel {
  oldPassword: string;
  newPassword: string;
}

class ChangeUserController {
  public async changeProfile(data: ChangeProfileFormModel) {
    const changeUserProfileAPI = new ChangeUserProfileAPI(data);
    try {
      const response = await changeUserProfileAPI.update();
      if (response.status === 200) {
        const data = JSON.parse(response.response);
        store.set('user', data);
      } else {
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async changeAvatar(data: FormData) {
    const changeUserAvatarAPI = new ChangeUserAvatarAPI(data);
    try {
      const response = await changeUserAvatarAPI.update();
      if (response.status === 200) {
        const data = JSON.parse(response.response);
        store.set('user', data);
      } else {
        throw new Error(response.responseText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async changePassword(data: ChangePasswordFormModel) {
    const changeUserPasswordAPI = new ChangeUserPasswordAPI(data);
    try {
      const response = await changeUserPasswordAPI.update();
      if (response.status === 200) {
        console.log('Ok');
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChangeUserController();
