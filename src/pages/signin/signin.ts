import Block from '../../modules/block';
import SigninForm from './signin-form/signin-form';
import Button from '../../components/button/button';
import template from './template';
import { getDataFromInputs, isAllInputsValid } from '../../modules/misc';

const pug = require('pug');

class SigninPage extends Block {
  constructor(props: Object) {
    const signInButton = new Button({
      text: 'Войти',
      type: Button.Type.Blue,
      isDisabled: true,
      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          console.log(getDataFromInputs([
            'login',
            'password',
          ]));
        },
      },
    });
    super('div', {
      ...props,
      signInButton,
      form: new SigninForm({
        events: {
          focusout: (e: Event) => {
            if (isAllInputsValid()) {
              signInButton.setProps({ isDisabled: false });
            } else {
              signInButton.setProps({ isDisabled: true });
            }
          },
        },
      }),
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default SigninPage;
