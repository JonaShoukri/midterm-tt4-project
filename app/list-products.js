import './list-products.scss';
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-primary');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Product added to cart');
        });
    });
});