let value = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const link = document.querySelectorAll('.dropdown__link');

value.addEventListener('click', function () {
    if (!list.classList.contains('dropdown__list_active')) {
        list.classList.add('dropdown__list_active');
        return false;
    } else {
        list.classList.remove('dropdown__list_active');
        return false;
    }
});
link.forEach(element => {
    element.onclick = function () {
        event.preventDefault();
        value.textContent = element.textContent;
        list.classList.remove('dropdown__list_active');
    }
});