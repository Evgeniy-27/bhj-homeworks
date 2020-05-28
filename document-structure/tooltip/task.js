const items = document.querySelectorAll('.has-tooltip');

for (let item of items) {
    item.addEventListener('click', event => {
        event.preventDefault();

        const title = event.target.getAttribute('title');
        let tooltip = document.querySelector('.tooltip_active');
        const helper = `<div class="tooltip">${item.title}</div>`;

        if (tooltip) {
            if (tooltip.textContent != title) {
                tooltip.remove();
                item.insertAdjacentHTML('afterEnd', helper);
                event.target.nextSibling.classList.add('tooltip_active');
            } else {
                tooltip.remove();
            }
        } else {
            item.insertAdjacentHTML('afterEnd', helper);
            event.target.nextSibling.classList.add('tooltip_active');
        }
    })
}
