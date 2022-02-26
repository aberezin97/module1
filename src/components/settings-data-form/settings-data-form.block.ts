import Block from '../../utils/block';
import template from './settings-data-form.template';
import './settings-data-form.styles.scss';

import SettingsUserData from '../settings-user-data/settings-user-data.block';
import userController from '../../controllers/user';
import Button from '../button/button.block';

class SettingsDataForm extends Block {
  constructor(props: Object) {
    super('form', {
      ...props,
      userData: new SettingsUserData({
        disabled: true,
      }),
      buttonExit: new Button({
        text: 'Выйти',
        attributes: {
          class: 'btn btn-danger w-100',
          type: 'button',
        },
        events: {
          click: () => {
            userController.logout();
          },
        },
      }),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SettingsDataForm;
