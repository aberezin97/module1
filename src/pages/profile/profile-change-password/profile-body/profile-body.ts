import Block from '../../../../modules/block';
import ProfileField from '../../profile-field/profile-field';
import Input from '../../../../components/input/input';
import { passwordRegex } from '../../../../modules/regex';
import template from './template';

const pug = require('pug');

class ProfileBody extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      oldPasswordField: new ProfileField({
        hint: 'Старый пароль',
        input: new Input({
          id: 'old_password',
          name: 'oldPassword',
          type: 'password',
          placeholder: '...',
          isValid: false,
          validate: (value: string): boolean => passwordRegex.test(value),
        }),
      }),
      newPasswordField: new ProfileField({
        hint: 'Новый пароль',
        input: new Input({
          id: 'new_password',
          name: 'newPassword',
          type: 'password',
          placeholder: '...',
          isValid: false,
          validate: (value: string): boolean => passwordRegex.test(value),
        }),
      }),
      newPasswordConfirmationField: new ProfileField({
        hint: 'Повторите новый пароль',
        input: new Input({
          id: 'new_password_confirmation',
          name: 'newPasswordConfirmation',
          type: 'password',
          placeholder: '...',
          isValid: false,
          validate: (value: string): boolean => {
            const foo = document.getElementById('new_password') as HTMLInputElement;
            return passwordRegex.test(value) && value === foo.value;
          },
        }),
      }),
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default ProfileBody;
