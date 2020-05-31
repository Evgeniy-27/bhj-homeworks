const items = document.getElementById("items");
const loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);

        for (let currency in data.response.Valute) {
            let currencyName = document.createElement('div');
            currencyName.classList.add('item');
            items.appendChild(currencyName);

            currencyName.innerHTML = `
            <div class="item__code">${data.response.Valute[currency].CharCode}</div>
            <div class="item__value">${data.response.Valute[currency].Value}</div>
            <div class="item__currency">руб.</div>`;
        }
        loader.classList.remove('loader_active');
    };
};
