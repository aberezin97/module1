import ProfilePage from '../profile';
import ProfileHeader from './profile-header/profile-header';
import ProfileBody from './profile-body/profile-body';
import ProfileFooter from './profile-footer/profile-footer';
import render from '../../../modules/render';

const page = new ProfilePage({
  backUrl: 'chat.html',
  header: new ProfileHeader({
    displayName: 'Alex',
  }),
  body: new ProfileBody({
    data: {
      email: 'alex@foo.bar',
      login: 'Alex',
      firstName: 'Александр',
      secondName: 'Березин',
      displayName: 'Alex',
      phone: '+123456789',
    },
  }),
  footer: new ProfileFooter({}),
});
render('.app', page);
