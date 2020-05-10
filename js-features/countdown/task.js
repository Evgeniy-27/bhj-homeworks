const newTimer = function () {
    const timer = document.getElementById('timer');

    if (timer.textContent > 0) {
        timer.textContent--;
    } else {
        clearInterval(counter);
        return alert('Вы победили в конкурсе!');
    }
};

let counter = setInterval(newTimer, 1000);