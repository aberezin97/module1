import Block from '../../modules/block';
import SignupForm from './signup-form/signup-form';
import Button from '../../components/button/button';
import template from './template';

const pug = require('pug');

class SignupPage extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      form: new SignupForm({}),
      signUpButton: new Button({
        text: 'Зарегистрироваться',
        type: Button.Type.Blue,
        events: {
          click: (e: PointerEvent) => {
            e.stopPropagation();
            const data: Record<string, any> = {};
            let isValid = true;
            const check = [
              'email',
              'login',
              'first_name',
              'second_name',
              'phone',
              'password',
              'password_confirmation',
            ];
            check.forEach((id) => {
              const element: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement;
              if (element) {
                data[id] = element.value;
                element.dispatchEvent(new Event('focus'));
                element.dispatchEvent(new Event('blur'));
                if (element.dataset.isValid && element.dataset.isValid === 'true') {
                  return;
                }
              }
              isValid = false;
            });
            if (isValid) {
              console.log(data);
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

export default SignupPage;
