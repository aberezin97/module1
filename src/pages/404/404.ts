import Block from '../../modules/block';
import template from './template';

const pug = require('pug');

class Error404Page extends Block {
  constructor(props: Object) {
    super('div', props);
  }

  render() {
    const fn = pug.compile(template, {});
    document.title = 'Мессенджер - Страница не найдена';
    return fn(this.props);
  }
}

export default Error404Page;
