import ProfilePage from '../profile';
import ProfileBody from './profile-body/profile-body';
import ProfileHeader from './profile-header/profile-header';
import ProfileFooter from './profile-footer/profile-footer';
import Button from '../../../components/button/button';
import render from '../../../modules/render';
import { getDataFromInputs, isAllInputsValid } from '../../../modules/misc';

const saveButton = new Button({
  text: 'Сохранить',
  type: Button.Type.Blue,
  isDisabled: true,
  events: {
    click: (e: PointerEvent) => {
      e.stopPropagation();
      console.log(getDataFromInputs( [
        'old_password',
        'new_password',
        'new_password_confirmation',
      ]));
    },
  },
});

const page = new ProfilePage({
  backUrl: 'profile.html',
  body: new ProfileBody({
    events: {
      'focusout': (e) => {
        console.log(e);
        if (isAllInputsValid()) {
          saveButton.setProps({isDisabled: false});
        } else {
          saveButton.setProps({isDisabled: true});
        }
      }
    }
  }),
  header: new ProfileHeader({}),
  footer: new ProfileFooter({
    saveButton,
  }),
});
render('.app', page);
