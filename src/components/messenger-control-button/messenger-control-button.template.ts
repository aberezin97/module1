const template = `
. 
    !{addUserModal} 
    !{delUserModal} 
    !{delChatModal}
button.dropdown__open-button(type="button")
        i(class="fas fa-ellipsis-v fa-2x")
.dropdown__content(id="dropdown__content").
        !{addUserButton}
        !{delUserButton}
        !{delChatButton}
        
`;

export default template;
