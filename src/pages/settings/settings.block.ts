import Block from '../../utils/block';
import template from './settings.template';
import './settings.styles.scss';

import Card from '../../components/card/card.block';
import SettingsDataForm from '../../components/settings-data-form/settings-data-form.block';
import SettingsLinkback from '../../components/settings-linkback/settings-linkback.block';
import SettingsAvatar from '../../components/settings-avatar/settings-avatar.block';
import userController from '../../controllers/user';
import { withUser } from '../../utils/connect';

class SettingsPage extends Block {
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
        backUrl: '/messenger',
      }),
      card: new Card({
        title: 'Настройки',
        body: new SettingsDataForm({}),
      }),
      avatar: new SettingsAvatar({
      }),
    });
    userController.getUser();
  }

  render() {
    document.title = 'Мессенджер - Настройки';
    return this.compile(template, this.props);
  }
}

export default withUser(SettingsPage);
