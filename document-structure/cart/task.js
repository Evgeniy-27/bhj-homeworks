const product = document.querySelectorAll('.product');
const quantityInc = document.querySelectorAll('.product__quantity-control_inc');
const quantityDec = document.querySelectorAll('.product__quantity-control_dec');
const productAdd = document.querySelectorAll('.product__add');
const basket = document.querySelector('.cart__products');

for (let i = 0; i < product.length; i++) {
    let quantity = quantityInc[i].closest('.product__quantity-controls').querySelector('.product__quantity-value');

    quantityInc[i].addEventListener('click', function () {
        ++quantity.textContent;

    });
    quantityDec[i].addEventListener('click', function () {
        if (quantity.textContent > 1) {
            --quantity.textContent;
        }
    })

    function addElement(element) {
        let addProduct = document.createElement('div');
        addProduct.setAttribute('class', 'cart__product');
        addProduct.setAttribute('data-id', `${element.getAttribute('data-id')}`);

        addProduct.innerHTML = `
            <img class="cart__product-image" src = ${element.querySelector('.product__image').getAttribute('src')} alt="">
            <div class="cart__product-count">${element.querySelector('.product__quantity-value').textContent}</div>
        `;
        return addProduct;
    }

    productAdd[i].addEventListener('click', () => {
        const arrBasket = basket.querySelectorAll('.cart__product');
        let productBasket;

        if (arrBasket.length == 0) {
            basket.insertAdjacentElement('beforeEnd', addElement(product[i]));
            basket.closest('.cart').classList.add('cart__active');
            productBasket = true;
        }
        for (let j = 0; j < arrBasket.length; j++) {
            
            

            if (arrBasket[j].getAttribute('data-id') == product[i].getAttribute('data-id')) {
                
                arrBasket[j].querySelector('.cart__product-count').innerText =
                parseInt(arrBasket[j].querySelector('.cart__product-count').innerText) +
                parseInt(product[i].querySelector('.product__quantity-value').innerText);
                productBasket = true;
            }
        }
        if (!productBasket) {
            basket.insertAdjacentElement('beforeEnd', addElement(product[i]));
            productBasket = true;
        }

    });
}