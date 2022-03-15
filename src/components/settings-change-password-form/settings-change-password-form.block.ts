import Block from '../../utils/block';
import template from './settings-change-password-form.template';
import './settings-change-password-form.styles.scss';

import Input from '../input/input.block';
import Button from '../button/button.block';
import changeUserController from '../../controllers/change-user';
import { getDataFromInputs } from '../../utils/forms';
import { passwordRegex, passwordExplanation } from '../../utils/regex';

class SettingsChangePasswordForm extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      passwordExplanation,
      inputOldPassword: new Input({
        type: 'password',
        id: 'oldPassword',
      }),
      inputNewPassword: new Input({
        type: 'password',
        id: 'newPassword',
        name: 'newPassword',
        validate: (value: string): boolean => passwordRegex.test(value),
      }),
      inputNewPasswordRepeat: new Input({
        type: 'password',
        id: 'newPasswordRepeat',
        name: 'newPasswordRepeat',
        validate: (value: string): boolean => {
          const el: HTMLInputElement | null = document.getElementById(
            'newPassword'
          ) as HTMLInputElement;
          const foo = el ? el.value : '';
          return passwordRegex.test(value) && value === foo;
        },
      }),
      buttonSubmit: new Button({
        text: 'Изменить пароль',
        attributes: {
          class: 'btn btn-primary w-100',
          type: 'submit',
        },
      }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          changeUserController.changePassword(
            getDataFromInputs(['oldPassword', 'newPassword'])
          );
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SettingsChangePasswordForm;
