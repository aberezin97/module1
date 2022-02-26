import Block from '../../utils/block';
import template from './settings-avatar.template';
import './settings-avatar.styles.scss';

import { withUser } from '../../utils/connect';

class SettingsAvatar extends Block {
  constructor(props: Record<string, any>) {
    super('span', {
      ...props,
      user: {
        avatar: null,
      },
      attributes: {
        class: 'avatar',
      },
    });
  }

  render() {
    console.log(this.props);
    this.props.attributes.style = `background-image: url(https://ya-praktikum.tech/api/v2/resources${this.props.avatar})`;
    return this.compile(template, this.props);
  }
}

export default withUser(SettingsAvatar);
