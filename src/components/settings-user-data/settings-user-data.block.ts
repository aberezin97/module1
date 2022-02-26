import Block from '../../utils/block';
import template from './settings-user-data.template';
import './settings-user-data.styles.scss';

import Input from '../input/input.block';
import {
  loginRegex,
  loginExplanation,
  emailRegex,
  emailExplanation,
  nameRegex,
  nameExplanation,
  phoneExplanation,
  phoneRegex,
} from '../../utils/regex';
import { withUser } from '../../utils/connect';

class SettingsUserData extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      loginExplanation,
      emailExplanation,
      phoneExplanation,
      nameExplanation,
    });
  }

  render() {
    this.children.inputEmail = new Input({
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Почта',
      value: this.props.user?.email,
      disabled: this.props.disabled,
      validate: (value: string): boolean => emailRegex.test(value),
    });

    this.children.inputLogin = new Input({
      id: 'login',
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      value: this.props.user?.login,
      disabled: this.props.disabled,
      validate: (value: string): boolean => loginRegex.test(value),
    });

    this.children.inputFirstname = new Input({
      id: 'first_name',
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя',
      value: this.props.user?.first_name,
      disabled: this.props.disabled,
      validate: (value: string): boolean => nameRegex.test(value),
    });

    this.children.inputSecondname = new Input({
      id: 'second_name',
      name: 'second_name',
      type: 'text',
      placeholder: 'Имя',
      value: this.props.user?.second_name,
      disabled: this.props.disabled,
      validate: (value: string): boolean => nameRegex.test(value),
    });

    this.children.inputDisplayname = new Input({
      id: 'display_name',
      name: 'display_name',
      type: 'text',
      placeholder: 'Имя в чате',
      value: this.props.user?.display_name,
      disabled: this.props.disabled,
      validate: (value: string): boolean => loginRegex.test(value),
    });

    this.children.inputPhone = new Input({
      id: 'phone',
      name: 'phone',
      type: 'text',
      placeholder: 'Телефон',
      value: this.props.user?.phone,
      disabled: this.props.disabled,
      validate: (value: string): boolean => phoneRegex.test(value),
    });

    return this.compile(template, this.props);
  }
}

export default withUser(SettingsUserData);
