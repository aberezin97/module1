const template = `
.center-wrapper
    .enter-form
        .enter-form__header
            h1 Вход
        .enter-form__body.
            !{form}
        .enter-form__footer !{signInButton}
            a(href="/sign-up") Нет аккаунта?
`;

export default template;
