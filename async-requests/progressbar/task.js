const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = (event) => {
        progress.value = event.loaded / event.total
    }
    xhr.send(formData)
})
