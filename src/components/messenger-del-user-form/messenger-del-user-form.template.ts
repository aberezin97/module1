const template = `
.mb-2.
    #[label.form-label Имя пользователя]
    #[input(style="display: none" name="chatId" id="del_user_chatid" value=id)]
    !{inputLogin}
.mt-4.
    !{buttonSubmit}
`;

export default template;
