import Block from '../../utils/block';
import template from './signin-form.template';
import './signin-form.styles.scss';

import Button from '../button/button.block';
import Input from '../input/input.block';
import signinController from '../../controllers/signin';
import { getDataFromInputs } from '../../utils/forms';

class SigninForm extends Block {
  constructor(props: Object) {
    super('form', {
      ...props,
      inputLogin: new Input({
        name: 'login',
        id: 'login',
        type: 'text',
        placeholder: 'Логин',
      }),
      inputPassword: new Input({
        name: 'password',
        id: 'password',
        type: 'password',
        placeholder: 'Пароль',
      }),
      buttonSubmit: new Button({
        text: 'Войти',
        type: 'submit',
        attributes: {
          class: 'btn btn-primary w-100',
          disabled: true,
          id: 'signin_button',
        },
      }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const { login, password } = getDataFromInputs(['login', 'password']);
          signinController.signin({ login, password });
        },
        focusout: () => {
          const isLoginValid = (document.getElementById('login') as HTMLInputElement).value !== '';
          const isPasswordValid = (document.getElementById('password') as HTMLInputElement).value !== '';
          const signinButton = document.getElementById('signin_button');
          if (isLoginValid && isPasswordValid) {
            signinButton?.removeAttribute('disabled');
          } else {
            signinButton?.setAttribute('disabled', '');
          }
        }
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SigninForm;
