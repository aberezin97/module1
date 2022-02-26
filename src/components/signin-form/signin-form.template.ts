const template = `
.mb-2.
    #[label.form-label Имя пользователя]
    !{inputLogin}
.mb-2.
    #[label.form-label Пароль]
    !{inputPassword}
.mt-4.
    !{buttonSubmit}
    #[.text-center #[a(href='/sign-up') Нет аккаунта?]]
`;

export default template;
