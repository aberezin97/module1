import Block from '../../../../modules/block';
import ProfileField from '../../profile-field/profile-field';
import Input from '../../../../components/input/input';
import template from './template';

const pug = require('pug');

class ProfileBody extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      ...props,
      emailField: new ProfileField({
        hint: 'Почта',
        input: new Input({
          isDisabled: true,
          value: props.data.email,
        }),
      }),
      loginField: new ProfileField({
        hint: 'Логин',
        input: new Input({
          isDisabled: true,
          value: props.data.login,
        }),
      }),
      firstNameField: new ProfileField({
        hint: 'Имя',
        input: new Input({
          isDisabled: true,
          value: props.data.firstName,
        }),
      }),
      secondNameField: new ProfileField({
        hint: 'Фамилия',
        input: new Input({
          isDisabled: true,
          value: props.data.secondName,
        }),
      }),
      displayNameField: new ProfileField({
        hint: 'Имя в чате',
        input: new Input({
          isDisabled: true,
          value: props.data.displayName,
        }),
      }),
      phoneField: new ProfileField({
        hint: 'Телефон',
        input: new Input({
          isDisabled: true,
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
