import Block from '../../../../modules/block';
import ProfileField from '../../profile-field/profile-field';
import Input from '../../../../components/input/input';
import {
  phoneRegex, emailRegex, loginRegex, nameRegex,
} from '../../../../modules/regex';
import template from './template';

const pug = require('pug');

class ProfileBody extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      ...props,
      emailField: new ProfileField({
        hint: 'Почта',
        input: new Input({
          id: 'email',
          name: 'email',
          type: 'email',
          regex: emailRegex,
          value: props.data.email,
        }),
      }),
      loginField: new ProfileField({
        hint: 'Логин',
        input: new Input({
          id: 'login',
          name: 'login',
          type: 'text',
          regex: loginRegex,
          value: props.data.login,
        }),
      }),
      firstNameField: new ProfileField({
        hint: 'Имя',
        input: new Input({
          id: 'first_name',
          name: 'first_name',
          type: 'text',
          regex: nameRegex,
          value: props.data.firstName,
        }),
      }),
      secondNameField: new ProfileField({
        hint: 'Фамилия',
        input: new Input({
          id: 'second_name',
          name: 'second_name',
          type: 'text',
          regex: nameRegex,
          value: props.data.secondName,
        }),
      }),
      displayNameField: new ProfileField({
        hint: 'Имя в чате',
        input: new Input({
          id: 'display_name',
          name: 'display_name',
          type: 'text',
          value: props.data.displayName,
        }),
      }),
      phoneField: new ProfileField({
        hint: 'Телефон',
        input: new Input({
          id: 'phone',
          name: 'phone',
          type: 'text',
          regex: phoneRegex,
          value: props.data.phone,
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
