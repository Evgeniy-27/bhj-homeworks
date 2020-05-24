const reveal = document.querySelectorAll('.reveal')

document.addEventListener('scroll', function () {
 
    reveal.forEach(element => {

        let heightElement = element.getBoundingClientRect().top;
        let bottomElement = element.getBoundingClientRect().bottom;

        if (heightElement < window.innerHeight) {
            element.classList.add('reveal_active')
        }
        if ((bottomElement < 0) || (heightElement > window.innerHeight)) {
            element.classList.remove('reveal_active')
        }
    })
});