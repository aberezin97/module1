import Block from '../../modules/block';
import template from './template';
import { withUser } from '../../modules/connect';

const pug = require('pug');

class ProfilePage extends Block {
  constructor(props: Object) {
    super('div', props);
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default withUser(ProfilePage);
