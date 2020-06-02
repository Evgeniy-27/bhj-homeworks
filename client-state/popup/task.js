const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

console.log(document.cookie.includes('modalClosed=modalactive'));
console.log(document.cookie);

window.onload = () => {
    if (document.cookie.includes('modalClosed=modalactive') === false) {
        modal.classList.add('modal_active');
    }
};
modalClose.onclick = () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=modalactive';

};
