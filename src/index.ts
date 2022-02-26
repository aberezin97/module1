import Router from './utils/router';
import SigninPage from './pages/signin/signin.block';
import SignupPage from './pages/signup/signup.block';
import MessengerPage from './pages/messenger/messenger.block';
import Error404Page from './pages/error404/error404.block';
import Error500Page from './pages/error500/error500.block';
import SettingsPage from './pages/settings/settings.block';
import SettingsChangeDataPage from './pages/settings-change-data/settings-change-data.block';
import SettingsChangePasswordPage from './pages/settings-change-password/settings-change-password.block';

const router = new Router('.app');
router
  .use('/', SigninPage)
  .use('/sign-up', SignupPage)
  .use('/messenger', MessengerPage)
  .use('/404', Error404Page)
  .use('/500', Error500Page)
  .use('/settings', SettingsPage)
  .use('/settings/change/data', SettingsChangeDataPage)
  .use('/settings/change/password', SettingsChangePasswordPage)
  .start();

export default router;
