// Active chat button logic
const chatButtons = document.getElementsByClassName('chat-button');
let currentChatButton = -1;
for (let i = 0; i < chatButtons.length; i++) {
    chatButtons[i].addEventListener('click', (event) => {
        if (currentChatButton != -1) {
            chatButtons[currentChatButton].classList.remove('chat-button_active');
        }
        currentChatButton = i;
        chatButtons[i].classList.add('chat-button_active');
    });
}

//  Логика Dropup
const dropupOpenButton = document.getElementsByClassName('dropup__open-button')[0];
const dropupContent = document.getElementsByClassName('dropup__content')[0];
dropupOpenButton.addEventListener('click', (event) => {
    dropupContent.classList.toggle('dropup__content_show');
});

// Логика Dropdown
const dropdownOpenButton = document.getElementsByClassName('dropdown__open-button')[0];
const dropdownContent = document.getElementsByClassName('dropdown__content')[0];
dropdownOpenButton.addEventListener('click', (event) => {
    dropdownContent.classList.toggle('dropdown__content_show');
});

// Логика кнопки добавить пользователя
const addUserButton = document.getElementById('add_user_button');
const addUserModal = document.getElementById('add_user_modal');
addUserButton.addEventListener('click', (event) => {
    addUserModal.classList.toggle('modal_show');
});

// Логика кнопки удалить пользователя
const delUserButton = document.getElementById('del_user_button');
const delUserModal = document.getElementById('del_user_modal');
delUserButton.addEventListener('click', (event) => {
    delUserModal.classList.toggle('modal_show');
});

// Логика кнопки удалить чат
const delChatButton = document.getElementById('del_chat_button');
const delChatModal = document.getElementById('del_chat_modal');
delChatButton.addEventListener('click', (event) => {
    delChatModal.classList.toggle('modal_show');
});