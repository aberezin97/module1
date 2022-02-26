import Block from '../../utils/block';
import template from './messenger-left-panel-topbar.template';
import './messenger-left-panel-topbar.styles.scss';

import Input from '../input/input.block';
import MessengerSearchInput from '../messenger-search-input/messenger-serach-input.block';

class MessengerLeftPanelTopbar extends Block {
  constructor(props: Object) {
    super('div', {
      attributes: {
        class: 'leftpanel__header',
      },
      ...props,
      inputSearch: new MessengerSearchInput({}),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerLeftPanelTopbar;
