const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function reset() {
    dead.textContent = 0;
    lost.textContent = 0;
}

function getHole() {

    for (let i = 1; i < 10; i++) {

        let clickHole = document.getElementById(`hole${i}`)

        clickHole.onclick = function () {

            clickHole.classList.contains("hole_has-mole") ? dead.textContent++ : lost.textContent++;

            if (dead.textContent == 10) {
                alert("Вы выиграли!");
                reset();
            }

            if (lost.textContent == 5) {
                alert("Вы проиграли!");
                reset();
            }
        }
    }
}
getHole();