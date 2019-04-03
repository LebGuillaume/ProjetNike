$(document).ready(function () {
    anime({
        targets: '.staggering-grid-demo .el',
        scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
    });

});

function Dropdown() {

    document.getElementById('nav').style.visibility = 'visible';
    document.getElementById('nav-shop').style.visibility = 'visible';


}
var imgSrc=$('#shoe').attr('src')
function changeShoe(color) {
    if (color === 'black') {

        $('.shoe3d').hide()
        $('.shoemodel').fadeIn(600);


        $('#shoe').attr('src', 'img/shoe1.png')
        imgSrc=$('#shoe').attr('src')

       // $('.img_cart').attr('src',imgSrc);

    } else if (color === 'white') {

        $('.shoe3d').hide()
        $('.shoemodel').fadeIn(600);

        $('#shoe').attr('src', 'img/shoe2.png')
        imgSrc=$('#shoe').attr('src')
        //$('.img_cart').attr('src',imgSrc);

    } else if (color === 'purple') {

        $('.shoe3d').hide();
        $('.shoemodel').fadeIn(600);

        $('#shoe').attr('src', 'img/shoe3.png')
        imgSrc=$('#shoe').attr('src')
        //$('.img_cart').attr('src',imgSrc);

    } else {
        $('.shoemodel').hide();

        $('.shoe3d').fadeIn(600);


    }
}

/*cart*/
var cartOpen = false;
var numberOfProducts = 0;

$('body').on('click', '.js-toggle-cart', toggleCart);
$('body').on('click', '.js-add-product', addProduct);
$('body').on('click', '.js-remove-product', removeProduct);

function toggleCart(e) {
    e.preventDefault();
    if(cartOpen) {
        closeCart();
        return;
    }
    openCart();
}

function openCart() {
    cartOpen = true;
    $('body').addClass('open');
}

function closeCart() {
    cartOpen = false;
    $('body').removeClass('open');
}

function addProduct(e) {
    e.preventDefault();
    openCart();


    $('.js-cart-empty').addClass('hide');
    var product = $('.js-cart-product-template').html();
    $('.js-cart-products').prepend(product);
    let img =$('.img_cart');
    $('.img_cart:first').attr('src',imgSrc);
    console.log( $('.img_cart img :last '));



    numberOfProducts++;
}

function removeProduct(e) {
    e.preventDefault();
    numberOfProducts--;
    $(this).closest('.js-cart-product').hide(250);
    if(numberOfProducts == 0) {
        $('.js-cart-empty').removeClass('hide');
    }
}
