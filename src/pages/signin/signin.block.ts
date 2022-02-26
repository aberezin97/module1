import Block from '../../utils/block';
import template from './signin.template';
import './signin.styles.scss';

import SigninForm from '../../components/signin-form/signin-form.block';
import Card from '../../components/card/card.block';
import userController from '../../controllers/user';

class SigninPage extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      attributes: {
        class: 'page page-center',
      },
      card: new Card({
        title: 'Войти',
        body: new SigninForm({}),
      }),
    });
    userController.isAuthenticated();
  }

  render() {
    document.title = 'Мессенджер - Авторизация';
    return this.compile(template, this.props);
  }
}

export default SigninPage;
