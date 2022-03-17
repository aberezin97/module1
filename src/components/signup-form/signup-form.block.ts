import Block from '../../utils/block';
import template from './signup-from.template';
import './signup-form.styles.scss';

import Button from '../button/button.block';
import Input from '../input/input.block';
import signupController, { SignupFormModel } from '../../controllers/signup';
import { getDataFromInputs } from '../../utils/forms';
import {
  emailRegex,
  emailExplanation,
  nameRegex,
  nameExplanation,
  loginRegex,
  loginExplanation,
  phoneRegex,
  phoneExplanation,
  passwordRegex,
  passwordExplanation
} from '../../utils/regex';

class SignupForm extends Block {
  constructor(props: Object) {
    super('form', {
      ...props,
      emailExplanation,
      inputEmail: new Input({
        name: 'email',
        id: 'email',
        type: 'email',
        placeholder: 'Почта',
        validate: (value: string): boolean => emailRegex.test(value),
      }),
      loginExplanation,
      inputLogin: new Input({
        name: 'login',
        id: 'login',
        type: 'text',
        placeholder: 'Логин',
        validate: (value: string): boolean => loginRegex.test(value),
      }),
      nameExplanation,
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
      phoneExplanation,
      inputPhone: new Input({
        name: 'phone',
        id: 'phone',
        type: 'text',
        placeholder: 'Телефон',
        validate: (value: string): boolean => phoneRegex.test(value),
      }),
      passwordExplanation,
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
          const el: HTMLInputElement | null = document.getElementById(
            'password'
          ) as HTMLInputElement;
          const foo = el ? el.value : '';
          return passwordRegex.test(value) && value === foo;
        },
      }),
      buttonSubmit: new Button({
        text: 'Зарегистрироваться',
        type: 'submit',
        attributes: {
          class: 'btn btn-primary w-100',
        },
      }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          signupController.signup(
            getDataFromInputs([
              'email',
              'password',
              'login',
              'first_name',
              'second_name',
              'phone',
            ]) as SignupFormModel
          );
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SignupForm;
