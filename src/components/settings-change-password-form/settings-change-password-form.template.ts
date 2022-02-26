const template = `
form
  .mb-2.
    #[label.form-label Старый пароль]
    !{inputOldPassword}
  .mb-2.
    #[label.form-label Новый пароль]
    !{inputNewPassword}
    #[.invalid-feedback= passwordExplanation]
  .mb-2.
    #[label.form-label Новый пароль (ещё раз)]
    !{inputNewPasswordRepeat}
    #[.invalid-feedback Пароли не совпадают]
  .mt-4.
    !{buttonSubmit}
`;

export default template;
