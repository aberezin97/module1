import Block from '../../utils/block';
import template from './settings-change-password.template';
import './settings-change-password.styles.scss';

import SettingsAvatar from '../../components/settings-avatar/settings-avatar.block';
import SettingsChangePasswordForm from '../../components/settings-change-password-form/settings-change-password-form.block';
import SettingsLinkback from '../../components/settings-linkback/settings-linkback.block';
import Card from '../../components/card/card.block';
import userController from '../../controllers/user';
import { withUser } from '../../utils/connect';

class SettingsChangePasswordPage extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      user: {
        login: '',
      },
      attributes: {
        class: 'page page-center',
      },
      linkback: new SettingsLinkback({
        backUrl: '/settings',
      }),
      avatar: new SettingsAvatar({}),
      card: new Card({
        title: 'Изменить пароль',
        body: new SettingsChangePasswordForm({}),
      }),
    });
    userController.getUser();
  }

  render() {
    document.title = 'Мессенджер - Сменить пароль';
    return this.compile(template, this.props);
  }
}

export default withUser(SettingsChangePasswordPage);
