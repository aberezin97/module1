import ProfilePage from '../profile';
import ProfileBody from './profile-body/profile-body';
import ProfileFooter from './profile-footer/profile-footer';
import ProfileHeader from './profile-header/profile-header';
import render from '../../../modules/render';

const page = new ProfilePage({
  backUrl: 'profile.html',
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
  header: new ProfileHeader({}),
});
render('.app', page);
