// Send message button logic
// const sendbutton = document.getElementsByClassName('send')[0];
// const messagefield = document.querySelector('.');
// sendbutton.addEventListener('click', () => {
//     if (messagefield.value !== '') {
//         alert('You\'ve sent the message');
//     }
// });

// Dropup button logic
const dropup__openbtn = document.getElementsByClassName('dropup__open-button')[0];
const dropup__content = document.getElementsByClassName('dropup__content')[0];
dropup__openbtn.addEventListener('click', () => {
    dropup__content.classList.toggle('dropup__content_show');
});

// Dropdown button logic
const dropdown__openbtn = document.getElementsByClassName('dropdown__open-button')[0];
const dropdown__content = document.getElementsByClassName('dropdown__content')[0];
dropdown__openbtn.addEventListener('click', () => {
    dropdown__content.classList.toggle('dropdown__content_show');
});

// Active chat button logic
const chatbuttons = document.getElementsByClassName('chatbutton');
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

// Add user button logic
const add_user_button = document.getElementById('add_user_button');
const add_user_modal = document.getElementById('add_user_modal');
add_user_button.addEventListener('click', () => {
    add_user_modal.classList.toggle('modal_show');
})

// Del user button logic
const del_user_button = document.getElementById('del_user_button');
const del_user_modal = document.getElementById('del_user_modal');
del_user_button.addEventListener('click', () => {
    del_user_modal.classList.toggle('modal_show');
})

// Del user button logic
const del_chat_button = document.getElementById('del_chat_button');
const del_chat_modal = document.getElementById('del_chat_modal');
del_chat_button.addEventListener('click', () => {
    del_chat_modal.classList.toggle('modal_show');
})