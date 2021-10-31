import Block from '../../../modules/block';
import DropupButton from './dropup-button/dropup-button';
import template from './template';

const pug = require('pug');

class ChatAttachButton extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      photoVideoButton: new DropupButton({
        id: 'attach_photo_video_button',
        icon: 'fas fa-photo-video',
        text: 'Фото или видео',
      }),
      fileButton: new DropupButton({
        id: 'attach_file_button',
        icon: 'far fa-file',
        text: 'Файл',
      }),
      geolocationButton: new DropupButton({
        id: 'attach_geolocation_button',
        icon: 'fas fa-location-arrow',
        text: 'Геолокация',
      }),
      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          const element: Element | null = document.getElementById('dropup__content');
          if (element) {
            element.classList.toggle('dropup__content_show');
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

export default ChatAttachButton;
