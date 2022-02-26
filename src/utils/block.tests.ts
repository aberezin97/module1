import { expect } from 'chai';
import Block from './block';

const template = `h1= foo`;

class TestComponent extends Block {
    constructor(props: Record<string, any>) {
        super('div', props);
    }

    render(): string | DocumentFragment {
        return this.compile(template, this.props);
    }
}


describe('Проверяем работу компонента', () => {
  it('Проверяем что рендер работает правильно', () => {
      const component = new TestComponent({
          foo: 'Testing',
      });

      const fragment = component.render() as DocumentFragment;
      expect(fragment.querySelector('h1')?.textContent).to.equal('Testing');
  });
});