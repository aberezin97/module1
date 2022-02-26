import Block from '../../utils/block';
import template from './messenger-search-input.template';
import './messenger-search-input.styles.scss';

import Input from '../input/input.block';

class MessengerSearchInput extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      attributes: {
        class: 'input-icon',
      },
      inputSearch: new Input({
        placeholder: 'Поиск...',
      }),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerSearchInput;
