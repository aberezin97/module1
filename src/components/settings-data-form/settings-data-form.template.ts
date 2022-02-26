const template = `
.mb-2.
    !{userData}
.mt-4
    a.btn.btn-primary.w-100(href="/settings/change/data") Изменить данные
.mt-2
    a.btn.btn-primary.w-100(href="/settings/change/password") Изменить пароль
.mt-2.
    !{buttonExit}
`;

export default template;
