const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

console.log(document.cookie);

window.onload = () => {
    if (document.cookie != 'modalClosed=modalactive') {
        modal.classList.add('modal_active');
    }
};
modalClose.onclick = () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=modalactive';

};
