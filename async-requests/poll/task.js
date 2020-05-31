const pollAnswers = document.getElementById("poll__answers");
const pollTitle = document.getElementById("poll__title");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText).data;
        pollTitle.textContent = data.title;

        for (let answer of Array.from(data.answers)) {
            pollAnswers.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${answer}</button>`)
        }
        let buttonsArray = document.querySelectorAll('.poll__answer');

        buttonsArray.forEach(element => {
            element.addEventListener("click", () => {
                alert("Спасибо, ваш голос защитан!");
                window.location.reload();
            });
        })
        //console.log(data.title);
    };
};

