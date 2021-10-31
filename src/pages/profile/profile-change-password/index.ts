import ProfilePage from '../profile';
import ProfileBody from './profile-body/profile-body';
import ProfileHeader from './profile-header/profile-header';
import ProfileFooter from './profile-footer/profile-footer';
import render from '../../../modules/render';

const page = new ProfilePage({
  backUrl: 'profile.html',
  body: new ProfileBody({}),
  header: new ProfileHeader({}),
  footer: new ProfileFooter({}),
});
render('.app', page);
