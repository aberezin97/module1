const template = `
.profile
    .linkback
        a(href=backUrl)
            i(class="fas fa-arrow-circle-left fa-2x")
    .profile__content.
        !{header}
        !{body}
        !{footer}
`;

export default template;
