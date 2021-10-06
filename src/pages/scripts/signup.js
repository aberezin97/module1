import { validateEmail } from "../../scripts/utils";

const email = document.getElementsByName('email')[0];
const login = document.getElementsByName('login')[0];

let isEmailCorrect = false;
let isLoginCorrect = false;

// Проверка почты
email.addEventListener('input', (e) => {
    let value = e.target.value;
    if (!validateEmail(value)) {
        email.classList.remove('input-field-active');
        if (value.length !== 0) {
            email.classList.add('input-field-wrong');
        } else {
            email.classList.remove('input-field-wrong');
        }
        isEmailCorrect = false;
    } else {
        email.classList.remove('input-field-wrong');
        email.classList.add('input-field-active');
        isEmailCorrect = true;
    }
});

// Проверка логина
login.addEventListener('input', (e) => {
    let value = e.target.value;
    if (value.length !== 0) {
        login.classList.add('input-field-active');
        isLoginCorrect = true;
    } else {
        login.classList.remove('input-field-active');
        isLoginCorrect = false;
    }
});


const handleSignup = () => {
    if (isEmailCorrect && isLoginCorrect) {
        
    }
}