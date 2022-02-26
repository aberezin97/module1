import Block from '../../utils/block';
import template from './settings-change-data.template';
import './settings-change-data.styles.scss';

import Card from '../../components/card/card.block';
import Modal from '../../components/modal/modal.block';
import SettingsChangeDataForm from '../../components/settings-change-data-form/settings-change-data-form.block';
import SettingsChangeAvatarForm from '../../components/settings-change-avatar-form/settings-change-avatar-form.block';
import SettingsLinkback from '../../components/settings-linkback/settings-linkback.block';
import SettingsAvatar from '../../components/settings-avatar/settings-avatar.block';
import userController from '../../controllers/user';
import { withUser } from '../../utils/connect';

class SettingsChangeDataPage extends Block {
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
      changeAvatarModal: new Modal({
        id: 'change_avatar_modal',
        content: new Card({
          title: 'Изменить аватар',
          body: new SettingsChangeAvatarForm({}),
        }),
      }),
      avatar: new SettingsAvatar({
        events: {
          click: (e: PointerEvent) => {
            e.stopPropagation();
            const element: Element | null = document.getElementById(
              'change_avatar_modal'
            );
            if (element) {
              element.classList.add('modal_show');
            }
          },
        },
      }),
      card: new Card({
        title: 'Изменить данные',
        body: new SettingsChangeDataForm({}),
      }),
    });
    userController.getUser();
  }

  render() {
    console.log(this.props);
    document.title = 'Мессенджер - Сменить данные';
    return this.compile(template, this.props);
  }
}

export default withUser(SettingsChangeDataPage);
