const template = `
.mb-2.
    #[label.form-label Имя чата]
    #[input(style="display: none" name="chatId" id="chatId" value=id)]
    !{inputLogin}
.mt-4.
    !{buttonSubmit}
`;

export default template;
