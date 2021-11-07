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
        validate: (value: string): boolean => emailRegex.test(value),
      }),
      inputLogin: new Input({
        name: 'login',
        id: 'login',
        type: 'text',
        placeholder: 'Логин',
        validate: (value: string): boolean => loginRegex.test(value),
      }),
      inputFirstname: new Input({
        name: 'first_name',
        id: 'first_name',
        type: 'text',
        placeholder: 'Имя',
        validate: (value: string): boolean => nameRegex.test(value),
      }),
      inputSecondname: new Input({
        name: 'second_name',
        id: 'second_name',
        type: 'text',
        placeholder: 'Фамилия',
        validate: (value: string): boolean => nameRegex.test(value),
      }),
      inputPhone: new Input({
        name: 'phone',
        id: 'phone',
        type: 'text',
        placeholder: 'Телефон',
        validate: (value: string): boolean => phoneRegex.test(value),
      }),
      inputPassword: new Input({
        name: 'password',
        id: 'password',
        type: 'password',
        placeholder: 'Пароль',
        validate: (value: string): boolean => passwordRegex.test(value),
      }),
      inputPasswordConfirmation: new Input({
        name: 'password_confirmation',
        id: 'password_confirmation',
        type: 'password',
        placeholder: 'Пароль (ещё раз)',
        validate: (value: string): boolean => {
          const el: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
          const foo = el ? el.value : '';
          return passwordRegex.test(value) && value === foo;
        },
      }),
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default SignupForm;
