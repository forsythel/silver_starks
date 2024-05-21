// script.js

document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    let currentIndex = 0;

    function showProduct(index) {
        products.forEach((product, i) => {
            if (i === index) {
                product.classList.add('active');
            } else {
                product.classList.remove('active');
            }
        });
    }

    document.querySelector('.left').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        showProduct(currentIndex);
    });

    document.querySelector('.right').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % products.length;
        showProduct(currentIndex);
    });
});
