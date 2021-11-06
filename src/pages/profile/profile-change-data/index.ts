import ProfilePage from '../profile';
import ProfileBody from './profile-body/profile-body';
import ProfileFooter from './profile-footer/profile-footer';
import ProfileHeader from './profile-header/profile-header';
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
      console.log(getDataFromInputs([
        'email',
        'login',
        'first_name',
        'second_name',
        'display_name',
        'phone',
      ]));
    },
  },
});

const page = new ProfilePage({
  backUrl: 'profile.html',
  body: new ProfileBody({
    data: {
      email: 'alex@foo.bar',
      login: 'Alex',
      firstName: 'Александр',
      secondName: 'Березин',
      displayName: 'Alex',
      phone: '+1234567890',
    },
    events: {
      'focusout': (e) => {
        if (isAllInputsValid()) {
          saveButton.setProps({isDisabled: false});
        } else {
          saveButton.setProps({isDisabled: true});
        }
      }
    }
  }),
  footer: new ProfileFooter({
    saveButton
  }),
  header: new ProfileHeader({}),
});
render('.app', page);
