import Block from '../../utils/block';
import template from './card.template';
import './card.styles.scss';

class Card extends Block {
  constructor(props: Record<string, any>) {
    super('div', {
      ...props,
      attributes: {
        class: `card ${props.className}`,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default Card;
