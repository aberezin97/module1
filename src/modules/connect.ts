import Block from './block';
import store from './store';
import { StoreEvents } from './store';
import { Indexed } from './set';

function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: any) {
        super({ ...props, ...mapStateToProps(store.getState()) });

        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // вызываем обновление компонента, передав данные из хранилища
          this.setProps({ ...mapStateToProps(store.getState()) });
        });
      }
    };
  };
}

export const withUser = connect((state) => ({ user: state.user }));
