import store, { Indexed, StoreEvents } from './store';

function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function (Component: any) {
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

export const withUser = connect((state) => ({
  user: state.user,
  avatar: state.user?.avatar,
  loign: state.user?.login,
}));

export const withChats = connect((state) => ({
  chats: state.chats,
}));

export const withCurrentChat = connect((state) => ({
  id: state.currentChat?.id,
  avatar: state.currentChat?.avatar,
  created_by: state.currentChat?.created_by,
  title: state.currentChat?.title,
  unread_count: state.currentChat?.unread_count,
}));

export const withToken = connect((state) => ({
  token: state?.token,
}));

export const withMessages = connect((state) => ({
  messages: state.messages ? state.messages : [],
}));

export const withError = connect((state) => ({
  error: state?.error
}));

export default connect;
