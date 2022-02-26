import Block from '../../utils/block';
import template from './settings-change-data-form.template';
import './settings-change-data-form.styles.scss';

import SettingsUserData from '../settings-user-data/settings-user-data.block';
import { getDataFromInputs } from '../../utils/forms';
import changeUserController from '../../controllers/change-user';
import Button from '../button/button.block';

class SettingsChangeDataForm extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      userData: new SettingsUserData({
        isDisabled: false,
      }),
      buttonSubmit: new Button({
        text: 'Изменить данные',
        attributes: {
          class: 'btn btn-primary w-100',
          type: 'submit',
        },
      }),
      events: {
        submit: (e) => {
          e.preventDefault();
          changeUserController.changeProfile(
            getDataFromInputs([
              'email',
              'login',
              'first_name',
              'second_name',
              'display_name',
              'phone',
            ])
          );
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SettingsChangeDataForm;
