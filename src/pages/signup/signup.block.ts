import Block from '../../utils/block';
import template from './signup.template';
import './signup.styles.scss';

import Card from '../../components/card/card.block';
import Alert from '../../components/alert/alert.block';
import SignupForm from '../../components/signup-form/signup-form.block';
import userController from '../../controllers/user';
import { withError } from '../../utils/connect';

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
      alert: new Alert({}),
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
    document.title = 'Мессенджер - Регистрация';
    return this.compile(template, this.props);
  }
}

export default withError(SignupPage);
