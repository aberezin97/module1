import Block from '../../utils/block';
import template from './alert.template';
import './alert.styles.scss';

class Alert extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      ...props,
      attributes: {
        class: 'alert',
        id: props.id,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default Alert;
