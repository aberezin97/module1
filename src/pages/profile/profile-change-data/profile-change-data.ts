import ProfilePage from "../profile";
import ProfileBody from "./profile-body/profile-body";
import ProfileFooter from "./profile-footer/profile-footer";
import ProfileHeader from "./profile-header/profile-header";
import Button from "../../../components/button/button";
import { getDataFromInputs, isAllInputsValid } from "../../../modules/forms";

const saveButton = new Button({
  text: "Сохранить",
  type: Button.Type.Blue,
  isDisabled: true,
  events: {
    click: (e: PointerEvent) => {
      e.stopPropagation();
      console.log(getDataFromInputs(["email", "login", "first_name", "second_name", "display_name", "phone"]));
    },
  },
});

class ProfileChangeDataPage extends ProfilePage {
  constructor(props) {
    super({
      ...props,
      backUrl: "/settings",
      body: new ProfileBody({
        data: {
          email: "alex@foo.bar",
          login: "Alex",
          firstName: "Александр",
          secondName: "Березин",
          displayName: "Alex",
          phone: "+1234567890",
        },
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
      footer: new ProfileFooter({
        saveButton,
      }),
      header: new ProfileHeader({}),
    });
  }

  render() {
    document.title = 'Мессенджер - Изменить данные';
    return super.render();
  }
}

export default ProfileChangeDataPage;
