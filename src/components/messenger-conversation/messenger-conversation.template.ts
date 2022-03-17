const template = `
each message in messages
  .msg.msg-sent=message.content
    span.timestamp= message.time
    span.username=message.user_id
`;

export default template;
