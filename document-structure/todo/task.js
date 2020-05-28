const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');


button.addEventListener('click', (event) => {
    event.preventDefault();

    if (input.value.length === 0) {
        return;
    } else {
        let htmlContainer =
            `<div class="task">
       <div class="task__title">${input.value}</div>
       <a href="#" class="task__remove">&times;</a>
     </div>`;

        list.insertAdjacentHTML('beforeEnd', htmlContainer);
    }
    input.value = '';
});

list.addEventListener("click", (event) => {

    if (event.target.classList.contains("task__remove")) {
        event.target.closest(".task").remove();
    }
});
