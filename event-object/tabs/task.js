const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');


for (let i = 0; i < tab.length; i++) {

    tab[i].addEventListener('click', () => {

        let tabActive = document.querySelector('.tab_active');
        let contentActive = document.querySelector('.tab__content_active')
        
        tabActive.classList.remove('tab_active');
        contentActive.classList.remove('tab__content_active');
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    });
}