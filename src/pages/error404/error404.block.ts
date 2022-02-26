import Block from '../../utils/block';
import template from './error404.template';
import './error404.styles.scss';

const pug = require('pug');

class Error404Page extends Block {
  constructor(props: Object) {
    super('div', props);
  }

  render() {
    const fn = pug.compile(template, {});
    document.title = 'Мессенджер - Страница не найдена';
    return this.compile(template, this.props);
  }
}

export default Error404Page;
