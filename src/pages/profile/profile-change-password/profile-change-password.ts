import ProfilePage from "../profile";
import ProfileBody from "./profile-body/profile-body";
import ProfileHeader from "./profile-header/profile-header";
import ProfileFooter from "./profile-footer/profile-footer";
import Button from "../../../components/button/button";
import { getDataFromInputs, isAllInputsValid } from "../../../modules/forms";

const saveButton = new Button({
  text: "Сохранить",
  type: Button.Type.Blue,
  isDisabled: true,
  events: {
    click: (e: PointerEvent) => {
      e.stopPropagation();
      console.log(getDataFromInputs(["old_password", "new_password", "new_password_confirmation"]));
    },
  },
});

class ProfileChangePasswordPage extends ProfilePage {
    constructor(props) {
        super({
            ...props,
            backUrl: '/settings',
            body: new ProfileBody({
              events: {
                focusout: (e: FocusEvent) => {
                  if (isAllInputsValid()) {
                    saveButton.setProps({ isDisabled: false });
                  } else {
                    saveButton.setProps({ isDisabled: true });
                  }
                },
              },
            }),
            header: new ProfileHeader({}),
            footer: new ProfileFooter({
              saveButton,
            }),
        })
    }

    render() {
        document.title = 'Мессенджер - Изменить пароль';
        return super.render();
    }
}

export default ProfileChangePasswordPage;