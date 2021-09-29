let user = {
    login: 'user',
    password: 'password'
}

const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];
const button = document.getElementsByTagName('button')[0];

let isLoginCorrect = false;
let isPasswordCorrect = false;

const isCredentialsCorrect = () => {
    let correct = isLoginCorrect && isPasswordCorrect;
    if (correct) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
};

login.addEventListener('input', (e) => {
    let value = e.target.value;
    if (value.length !== 0) {
        login.classList.add('input-field-active');
        isLoginCorrect = true;
    } else {
        login.classList.remove('input-field-active');
        isLoginCorrect = false;
    }

    isCredentialsCorrect();
})

password.addEventListener('input', (e) => {
    let value = e.target.value;
    if (value.length !== 0) {
        password.classList.add('input-field-active');
        isPasswordCorrect = true;
    } else {
        password.classList.remove('input-field-active');
        isPasswordCorrect = false;
    }

    isCredentialsCorrect();
})

const handleSignin = () => {
    let success = login.value === user.login && password.value === user.password
    if (success) {
        alert('Вы успешно авторизованы');
    } else {
        alert('Ошибка авторизации!');
    }
}