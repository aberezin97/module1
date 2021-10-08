const changeAvatarButton = document.getElementById('avatar_change_div');
const changeAvatarModal = document.getElementById('change_avatar_modal');

changeAvatarButton.addEventListener('click', (event) => {
    changeAvatarModal.classList.toggle('modal_show');
});

const fileInputs = document.getElementsByClassName('file-input');
for (let i = 0; i < fileInputs.length; i++) {
    let label = fileInputs[i].nextElementSibling;

    fileInputs[i].addEventListener('change', (event) => {
        let fileName = event.target.value;
        if (fileName) {
            label.innerHTML = fileName;
        } else {
            label.innerHTML = 'Ошибка!';
        }
    })
}
