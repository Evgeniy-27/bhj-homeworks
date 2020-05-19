const menuLink = document.querySelectorAll('.menu__link');


menuLink.forEach(element => {
    element.onclick = function () {

        let menuItem = element.parentElement;
        let menuSub = menuItem.querySelector('.menu_sub');
        let menuActive = document.querySelectorAll('.menu_active')

        if (menuSub.classList.contains('menu_active')) {
            menuSub.classList.remove('menu_active');
            return false;
        } else {
            menuActive.forEach(element => {
                element.classList.remove('menu_active');
            });
            menuSub.classList.add('menu_active');
            return false;
        }
    }
});