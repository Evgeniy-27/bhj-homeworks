const fontSizes = document.querySelectorAll(".font-size");
const books = document.querySelectorAll(".book");

fontSizes.forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault();
        let sizesActive = document.querySelector(".font-size_active");

        sizesActive.classList.remove("font-size_active");
        element.closest(".book").className = "book";
        element.classList.add("font-size_active");

        let dataSize = element.getAttribute("data-size");

        if (dataSize) {
            element.closest(".book").classList.add(`book_fs-${dataSize}`);
        }
    });
});