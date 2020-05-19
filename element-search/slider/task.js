const sliderItem = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
let sliderNumber = 0;

function switchSlide(i) {
    sliderItem[sliderNumber].classList.remove("slider__item_active");
    sliderNumber = i;
    if (sliderNumber === sliderItem.length) {
        sliderNumber = 0;
    } else if (sliderNumber < 0) {
        sliderNumber = sliderItem.length - 1;
    }
    sliderItem[sliderNumber].classList.add("slider__item_active");
}

arrowNext.onclick = function () {
    switchSlide(sliderNumber + 1);
};

arrowPrev.onclick = function () {
    switchSlide(sliderNumber - 1);
};