const interestCheck = document.querySelectorAll('.interest__check');

interestCheck.forEach((checkbox) => {

    checkbox.addEventListener('click', (event) => {

        const parent = checkbox.closest('.interest');
        const children = parent.querySelectorAll('.interest__check');

        for (let child of children) {
            if (checkbox.checked) {
                child.checked = true;
            } else {
                child.checked = false;
            }
        }
    })

});