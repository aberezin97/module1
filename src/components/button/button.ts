import Block from '../../modules/block';
import template from './template';

const pug = require('pug');

enum Type {
  Blue = 'blue',
  Red = 'red',
}

class Button extends Block {
  static Type = Type;

  constructor(props: Record<string, any>) {
    super('div', props);
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default Button;
