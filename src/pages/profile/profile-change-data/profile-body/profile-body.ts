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
          value: props.data.email,
          isValid: true,
          validate: (value: string): boolean => emailRegex.test(value),
        }),
      }),
      loginField: new ProfileField({
        hint: 'Логин',
        input: new Input({
          id: 'login',
          name: 'login',
          type: 'text',
          value: props.data.login,
          isValid: true,
          validate: (value: string): boolean => loginRegex.test(value),
        }),
      }),
      firstNameField: new ProfileField({
        hint: 'Имя',
        input: new Input({
          id: 'first_name',
          name: 'first_name',
          type: 'text',
          value: props.data.firstName,
          isValid: true,
          validate: (value: string): boolean => nameRegex.test(value),
        }),
      }),
      secondNameField: new ProfileField({
        hint: 'Фамилия',
        input: new Input({
          id: 'second_name',
          name: 'second_name',
          type: 'text',
          value: props.data.secondName,
          isValid: true,
          validate: (value: string): boolean => nameRegex.test(value),
        }),
      }),
      displayNameField: new ProfileField({
        hint: 'Имя в чате',
        input: new Input({
          id: 'display_name',
          name: 'display_name',
          type: 'text',
          value: props.data.displayName,
          isValid: true,
          validate: (value: string): boolean => loginRegex.test(value),
        }),
      }),
      phoneField: new ProfileField({
        hint: 'Телефон',
        input: new Input({
          id: 'phone',
          name: 'phone',
          type: 'text',
          value: props.data.phone,
          isValid: true,
          validate: (value: string): boolean => phoneRegex.test(value),
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
