const template = `
each message in messages
  .msg.msg-sent=message.content
    - 
      let time = new Date(message.time).toLocaleString('ru-ru', {
        weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        hour: 'numeric', // numeric, 2-digit
        minute: 'numeric', // numeric, 2-digit
        second: 'numeric', // numeric, 2-digit
      });
    span.timestamp= time
    span.username=message.user_id
`;

export default template;
