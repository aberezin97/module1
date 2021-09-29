import { validateEmail } from "../../scripts/utils";

const email = document.getElementsByName('email')[0];
const login = document.getElementsByName('login')[0];
const firstName = document.getElementsByTagName('first_name')[0];
const secondName = document.getElementsByTagName('second_name')[0];
const phone = document.getElementsByTagName('phone')[0];
const password = document.getElementsByTagName('password')[0];
const password_confirmation = document.getElementsByTagName('password_confirmation')[0];

let isEmailCorrect = false;
let isLoginCorrect = false;
let isFirstNameCorrect = false;
let isSecondNameCorrect = false;
let isPhoneCorrect = false;
let isPasswordCorrect = false;
let isPasswordConfirmationCorrect = false;

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

// Проверка имени
firstName.addEventListener('input', (e) => {

});

// Проверка фамилии
secondName.addEventListener('input', (e) => {

});

// Проверка телефона
phone.addEventListener('input', (e) => {

});

// Проверка пароля
password.addEventListener('input', (e) => {

});

// Проверка подтверждения пароля
password_confirmation.addEventListener('input', (e) => {

});

const handleSignup = () => {

}