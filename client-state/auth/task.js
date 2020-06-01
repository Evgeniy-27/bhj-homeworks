const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.userId) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('userId');
} else {
    signin.classList.add('signin_active');
};
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', ' https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            if (data.success == true) {
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                localStorage.userId = data.user_id;
                userId.innerText = data.user_id;
            } else {
                alert('Неверный логин/пароль');
            }
        }
    })
    xhr.send(formData);
})

