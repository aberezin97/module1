import ProfilePage from '../profile';
import ProfileHeader from './profile-header/profile-header';
import ProfileBody from './profile-body/profile-body';
import ProfileFooter from './profile-footer/profile-footer';
import { withUser } from '../../../modules/connect';
import UserController from '../../../controllers/user';

class ProfileMainPage extends ProfilePage {
  constructor(props) {
    super({
      ...props,
      backUrl: '/messenger',
      header: new ProfileHeader({
        displayName: 'Alex',
      }),
      body: new ProfileBody({
        user: {
          email: '',
          login: '',
          first_name: '',
          second_name: '',
          display_name: '',
          phone: '',
        },
      }),
      footer: new ProfileFooter({}),
    });
    const userController = new UserController();
    userController.getUser();
  }

  render() {
    document.title = 'Мессенджер - Профиль';
    return super.render();
  }
}

export default withUser(ProfileMainPage);
