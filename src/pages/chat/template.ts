const template = `
.chat !{leftPanel}
    .rightpanel
        .topbar
            .topbar__leftside
                p #{user.first_name} #{user.second_name}
                p= status
            .topbar__rightside !{controlButton}              
        .conversation !{messages}
        .replybar. 
            !{attachButton} 
            #[input.replybar__message(type="text" name="message" placeholder="Сообщение...")] 
            !{sendButton}
`;

export default template;
