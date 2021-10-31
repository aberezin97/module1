import Block from '../../../../modules/block';
import Modal from '../../../../components/modal/modal';
import Button from '../../../../components/button/button';
import template from './template';

const pug = require('pug');

class ProfileHeader extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      avatarModal: new Modal({
        id: 'change_avatar_modal',
        header: 'Сменить аватар',
        body: `<input class="file-input" name="avatar" id="avatar" type="file">
               <label for="avatar" class="file-input-label">Выберите файл на компьютере</label>`,
        footer: new Button({
          text: 'Поменять',
          type: Button.Type.Blue,
        }),
      }),
      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          const element: Element | null = document.getElementById('change_avatar_modal');
          if (element) {
            element.classList.add('modal_show');
          }
          const fileInputs = document.getElementsByClassName('file-input');
          for (let i = 0; i < fileInputs.length; i += 1) {
            const label = document.getElementsByClassName('file-input-label')[0];
            fileInputs[i].addEventListener('change', (event: PointerEvent) => {
              const fileName: HTMLInputElement | null = event.target as HTMLInputElement;
              if (fileName) {
                const { value } = fileName;
                if (label) {
                  if (value) {
                    label.innerHTML = value;
                  } else {
                    label.innerHTML = 'Ошибка!';
                  }
                }
              }
            });
          }
        },
      },
    });
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default ProfileHeader;
