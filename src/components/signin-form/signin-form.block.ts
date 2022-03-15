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
        attributes: {
          class: 'btn btn-primary w-100',
          type: 'submit',
        },
      }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const { login, password } = getDataFromInputs(['login', 'password']);
          signinController.signin({ login, password });
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SigninForm;
