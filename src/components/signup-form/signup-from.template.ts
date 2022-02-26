const template = `
.mb-2.
        #[label.form-label Почта]
        !{inputEmail}
        #[.invalid-feedback= emailExplanation]
.mb-2.
        #[label.form-label Логин]
        !{inputLogin}
        #[.invalid-feedback= loginExplanation]
.mb-2.
        #[label.form-label Имя]
        !{inputFirstname}
        #[.invalid-feedback= nameExplanation]
.mb-2.
        #[label.form-label Фамилия]
        !{inputSecondname}
        #[.invalid-feedback= nameExplanation]
.mb-2.
        #[label.form-label Телефон]
        !{inputPhone}
        #[.invalid-feedback= phoneExplanation]
.mb-2.
        #[label.form-label Пароль]
        !{inputPassword}
        #[.invalid-feedback= passwordExplanation]
.mb-2.
        #[label.form-label Пароль (ещё раз)]
        !{inputPasswordConfirmation}
        #[.invalid-feedback Пароли не совпадают]
.mt-4.
        !{buttonSubmit}
        #[.text-center #[a(href="/") Войти]]
`;

export default template;
