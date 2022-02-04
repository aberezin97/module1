import Block from '../../../../modules/block';
import ProfileField from '../../profile-field/profile-field';
import Input from '../../../../components/input/input';
import template from './template';
import { withUser } from '../../../../modules/connect';
import UserController from '../../../../controllers/user';

const pug = require('pug');

class ProfileBody extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      ...props,
      emailField: new ProfileField({
        hint: 'Почта',
        input: new Input({
          isDisabled: true,
          value: props.user.email,
        }),
      }),
      loginField: new ProfileField({
        hint: 'Логин',
        input: new Input({
          isDisabled: true,
          value: props.user.login,
        }),
      }),
      firstNameField: new ProfileField({
        hint: 'Имя',
        input: new Input({
          isDisabled: true,
          value: props.user.first_name,
        }),
      }),
      secondNameField: new ProfileField({
        hint: 'Фамилия',
        input: new Input({
          isDisabled: true,
          value: props.user.second_name,
        }),
      }),
      displayNameField: new ProfileField({
        hint: 'Имя в чате',
        input: new Input({
          isDisabled: true,
          value: props.user.display_name,
        }),
      }),
      phoneField: new ProfileField({
        hint: 'Телефон',
        input: new Input({
          isDisabled: true,
          value: props.user.phone,
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
