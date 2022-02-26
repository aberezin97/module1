import Block from '../../utils/block';
import template from './settings-linkback.template';
import './settings-linkback.styles.scss';

class SettingsLinkback extends Block {
  constructor(props: Object) {
    super('div', {
      attributes: {
        class: 'linkback',
      },
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SettingsLinkback;
