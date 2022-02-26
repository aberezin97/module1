import Block from '../../utils/block';
import template from './settings-change-avatar-form.template';
import './settings-change-avatar-form.styles.scss';

import Button from '../button/button.block';
import Input from '../input/input.block';
import changeUserController from '../../controllers/change-user';

class SettingsChangeAvatarForm extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      inputAvatar: new Input({
        name: 'avatar',
        id: 'avatar',
        type: 'file',
        accept: 'image/*',
      }),
      buttonSubmit: new Button({
        text: 'Изменить аватар',
        type: 'submit',
        attributes: {
          class: 'btn btn-primary w-100',
        },
      }),
      events: {
        submit: (e) => {
          e.preventDefault();
          const avatarForm = document.getElementById('avatar-form');
          const form = new FormData(avatarForm);
          changeUserController.changeAvatar(form);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SettingsChangeAvatarForm;
