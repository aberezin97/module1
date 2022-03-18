import Block from '../../utils/block';
import template from './signin.template';
import './signin.styles.scss';

import SigninForm from '../../components/signin-form/signin-form.block';
import Card from '../../components/card/card.block';
import Alert from '../../components/alert/alert.block';
import userController from '../../controllers/user';
import { withError } from '../../utils/connect';

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
      alert: new Alert({
      }),
    });
    userController.isAuthenticated();
  }

  componentDidUpdate(_oldProps: Object, _newProps: Object): boolean {
    this.children.alert.setProps({
      content: this.props.error,
    })
    return true;
  }

  render() {
    document.title = 'Мессенджер - Авторизация';
    return this.compile(template, this.props);
  }
}

export default withError(SigninPage);
