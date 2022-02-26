const template = `
.mb-2.
    #[label.form-label Имя пользователя]
    #[input(style="display: none" name="chatId" id="add_user_chatid" value=id)]
    !{inputLogin}
    #[.invalid-feedback= loginExplanation]
.mt-4.
    !{buttonSubmit}
`;

export default template;
