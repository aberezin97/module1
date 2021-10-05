const dropup__dropbtn = document.getElementsByClassName('dropup__dropbtn')[0];
const dropup__content = document.getElementsByClassName('dropup__content')[0];
const chatbuttons = document.getElementsByClassName('chatbutton');
const sendbutton = document.getElementsByClassName('send')[0];
const messagefield = document.querySelector('.rightpanel__replybar .message');

// Send message button logic
sendbutton.addEventListener('click', () => {
    if (messagefield.value !== '') {
        alert('You\'ve sent the message');
    }
});

// Attach dropup button logic
dropup__dropbtn.addEventListener('click', () => {
    dropup__content.classList.toggle('dropup__content_show');
})

// Active chat button logic
let currentChatButton = -1;
for (let i = 0; i < chatbuttons.length; i++) {
    chatbuttons[i].addEventListener('click', () => {
        if (currentChatButton != -1) {
            chatbuttons[currentChatButton].classList.remove('chatbutton_active');
        }
        currentChatButton = i;
        chatbuttons[i].classList.add('chatbutton_active');
    });
}