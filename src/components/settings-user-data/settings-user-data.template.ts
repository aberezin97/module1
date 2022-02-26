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
        #[label.form-label Имя в чате]
        !{inputDisplayname}
        #[.invalid-feedback= loginExplanation]
.mb-2.
        #[label.form-label Телефон]
        !{inputPhone}
        #[.invalid-feedback= phoneExplanation]
`;

export default template;
