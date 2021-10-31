const template = `
.dropup
    button.dropup__open-button
        i(class="fas fa-paperclip fa-2x")
    .dropup__content(id="dropup__content").
        !{photoVideoButton}
        !{fileButton}
        !{geolocationButton}
`;

export default template;
