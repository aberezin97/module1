import Block from '../../../modules/block';
import Input from '../../../components/input/input';
import { loginRegex, passwordRegex } from '../../../modules/regex';
import template from './template';

const pug = require('pug');

class SigninForm extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      inputLogin: new Input({
        name: 'login',
        id: 'login',
        type: 'text',
        placeholder: 'Логин',
        validate: (value: string): boolean => loginRegex.test(value),
      }),
      inputPassword: new Input({
        name: 'password',
        id: 'password',
        type: 'password',
        placeholder: 'Пароль',
        validate: (value: string): boolean => passwordRegex.test(value),
      }),
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default SigninForm;
