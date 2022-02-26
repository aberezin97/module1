import Block from '../../utils/block';
import template from './messenger-attach-button.template';
import './messenger-attach-button.styles.scss';

import MessengerDropupButton from '../messenger-dropup-button/messenger-dropup-button.block';

class MessengerAttachButton extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      photoVideoButton: new MessengerDropupButton({
        id: 'attach_photo_video_button',
        icon: 'fas fa-photo-video',
        text: 'Фото или видео',
      }),
      fileButton: new MessengerDropupButton({
        id: 'attach_file_button',
        icon: 'far fa-file',
        text: 'Файл',
      }),
      geolocationButton: new MessengerDropupButton({
        id: 'attach_geolocation_button',
        icon: 'fas fa-location-arrow',
        text: 'Геолокация',
      }),
      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          const element: Element | null =
            document.getElementById('dropup__content');
          if (element) {
            element.classList.toggle('dropup__content_show');
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default MessengerAttachButton;
