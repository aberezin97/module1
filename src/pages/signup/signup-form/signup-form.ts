import Block from '../../../modules/block';
import Input from '../../../components/input/input';
import {
  emailRegex, nameRegex, loginRegex, phoneRegex, passwordRegex,
} from '../../../modules/regex';
import template from './template';

const pug = require('pug');

class SignupForm extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      inputEmail: new Input({
        name: 'email',
        id: 'email',
        type: 'email',
        placeholder: 'Почта',
        regex: emailRegex,
      }),
      inputLogin: new Input({
        name: 'login',
        id: 'login',
        type: 'text',
        placeholder: 'Логин',
        regex: loginRegex,
      }),
      inputFirstname: new Input({
        name: 'first_name',
        id: 'first_name',
        type: 'text',
        placeholder: 'Имя',
        regex: nameRegex,
      }),
      inputSecondname: new Input({
        name: 'second_name',
        id: 'second_name',
        type: 'text',
        placeholder: 'Фамилия',
        regex: nameRegex,
      }),
      inputPhone: new Input({
        name: 'phone',
        id: 'phone',
        type: 'text',
        placeholder: 'Телефон',
        regex: phoneRegex,
      }),
      inputPassword: new Input({
        name: 'password',
        id: 'password',
        type: 'password',
        placeholder: 'Пароль',
        regex: passwordRegex,
      }),
      inputPasswordConfirmation: new Input({
        name: 'password_confirmation',
        id: 'password_confirmation',
        type: 'password',
        placeholder: 'Пароль (ещё раз)',
        regex: passwordRegex,
        confirmation: ['password'],
      }),
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default SignupForm;
