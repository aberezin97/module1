import Block from '../../utils/block';
import template from './error500.template';
import './error500.styles.scss';

class Error500Page extends Block {
  constructor(props: Object) {
    super('div', props);
  }

  render() {
    document.title = 'Мессенджер - Ошибка сервера';
    return this.compile(template, this.props);
  }
}

export default Error500Page;
