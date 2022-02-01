import ProfilePage from "../profile";
import ProfileHeader from "./profile-header/profile-header";
import ProfileBody from "./profile-body/profile-body";
import ProfileFooter from "./profile-footer/profile-footer";

class ProfileMainPage extends ProfilePage {
  constructor(props) {
    super({
      ...props,
      backUrl: "/messenger",
      header: new ProfileHeader({
        displayName: "Alex",
      }),
      body: new ProfileBody({
        data: {
          email: "alex@foo.bar",
          login: "Alex",
          firstName: "Александр",
          secondName: "Березин",
          displayName: "Alex",
          phone: "+123456789",
        },
      }),
      footer: new ProfileFooter({}),
    });
  }

  render() {
    document.title = 'Мессенджер - Профиль';
    return super.render();
  }
}

export default ProfileMainPage;
