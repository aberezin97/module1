const template = `
.chat-button
    .image(style="background-image: url('" + image + "');")
    .chat-info
        p.name= name
        p.message= message
    .status
        p.date= date
        p.count= count
`;

export default template;
