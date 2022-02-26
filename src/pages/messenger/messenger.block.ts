import Block from '../../utils/block';
import template from './messenger.template';
import './messenger.styles.scss';

import MessengerLeftPanel from '../../components/messenger-left-panel/messenger-left-panel.block';
import MessengerRightPanel from '../../components/messenger-right-panel/messenger-right-panel.block';
import userController from '../../controllers/user';

const pug = require('pug');

class MessengerPage extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      attributes: {
        class: 'page',
      },
      leftPanel: new MessengerLeftPanel({}),
      rightPanel: new MessengerRightPanel({}),
    });
    userController.getUser();
  }

  render() {
    const fn = pug.compile(template, {});
    document.title = 'Мессенджер - Чат';
    return this.compile(template, this.props);
    // return fn({
    //   ...this.props,
    // });
  }
}

export default MessengerPage;
