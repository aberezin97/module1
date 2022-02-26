const template = `
each chat in chats
    .chat-button(data-chat-data=chat)
      .image(style="background-image: url('" + chat.avatar + "');")
      .chat-info
          p.name= chat.title
          p.message= chat.message
      .status
          p.date= date
          p.count= chat.unread_count
`;

export default template;
