const element = document.getElementById('avatar_change_div');
const modal = document.getElementById('change_avatar_modal');

element.onclick = () => {
    modal.classList.toggle('modal_show');
}

const inputs = document.querySelectorAll('.file');
for (let i = 0; i < inputs.length; i++) {
    let label = inputs[i].nextElementSibling;

    inputs[i].addEventListener('change', (e) => {
        let fileName = e.target.value;
        if (fileName) {
            label.innerHTML = fileName;
        } else {
            label.innerHTML = 'Ошибка!';
        }
    })
}
