document.addEventListener('DOMContentLoaded', function() {
    const imgMenu = document.querySelector('.menu-navbar');
    const menuMovile = document.querySelector('.mobile-menu');
    const navbarEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const shoppingCart = document.querySelector('.navbar-shopping-cart')
    const productDetail = document.querySelector('.product-detail')

    imgMenu.addEventListener('click', despliegueImg);
    navbarEmail.addEventListener('click', despliegue);
    shoppingCart.addEventListener('click', despliegueShopping)

    function despliegue() {
        desktopMenu.classList.toggle('inactive');
    }
    function despliegueImg() {
        menuMovile.classList.toggle('inactiveMovil');
    }
    function despliegueShopping() {
        productDetail.classList.toggle('inactiveShoppingCart')
    }

});

// desktopMenu.classList.length;
// console.log(desktopMenu);
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', ejecutar);

function ejecutar(event) {
    event.preventDefault();

    const email = 'zuri.d@gmail.com';
    const password = '123';

    const emailInput = document.querySelector('.input-email');
    const passwordInput = document.querySelector('.input-password');

    if (email === emailInput.value && password === passwordInput.value) {
        alert('¡Login exitoso!');
        // Redirigir a la siguiente página
        window.location.href = 'pagina-p.html';
    } else {
        alert('¡Credenciales incorrectas!');
        // Puedes mostrar un mensaje de error o realizar otra acción aquí
    }
}


