import Block from '../../utils/block';
import template from './signup.template';
import './signup.styles.scss';

import Card from '../../components/card/card.block';
import SignupForm from '../../components/signup-form/signup-form.block';
import userController from '../../controllers/user';

class SignupPage extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      attributes: {
        class: 'page page-center',
      },
      card: new Card({
        title: 'Регистрация',
        body: new SignupForm({}),
      }),
    });
    userController.isAuthenticated();
  }

  render() {
    document.title = 'Мессенджер - Регистрация';
    return this.compile(template, this.props);
  }
}

export default SignupPage;
