const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close_times');
const danger = document.querySelector('.btn_danger');
const success = document.querySelector('.btn_success');

modalMain.classList.add("modal_active");

danger.onclick = function () {
     modalMain.classList.remove("modal_active");
     modalSuccess.classList.add("modal_active");
};

success.onclick = function () {
     modalSuccess.classList.remove("modal_active");
};

modalClose.forEach(element => {
     element.addEventListener("click", function () {
          element.closest(".modal").classList.remove("modal_active");
     })
});
