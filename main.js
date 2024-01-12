document.addEventListener("DOMContentLoaded", function () {
  const imgMenu = document.querySelector(".menu-navbar");
  const menuMovile = document.querySelector(".mobile-menu");
  const navbarEmail = document.querySelector(".navbar-email");
  const desktopMenu = document.querySelector(".desktop-menu");
  const shoppingCart = document.querySelector(".navbar-shopping-cart");
  const productDetail = document.querySelector(".product-detail");
  const moreProductDetail = document.querySelector(".More-Product-Details");
  const productClose = document.querySelector('product-detail-close')
  const cardsContainer = document.querySelector(".cards-container");

  

  const productList = [];
  productList.push({
    nombre: "Bitcoin",
    precio: 40,
    imagen: "icons/shopping-cart-add.png",
    imagen2:
      "https://th.bing.com/th/id/R.3c775a69376a877a9fd2f2d11d528d6c?rik=X%2fLpN4tIl1D75w&riu=http%3a%2f%2fpxb.cdn.eldiariodelarepublica.com%2frepublica%2f012018%2f1515948682740.jpg&ehk=2ZBAoo%2fcwKB6GakTZXPYXUsnGI5fgVaxEfLD176FRAI%3d&risl=&pid=ImgRaw&r=0",
  });
  productList.push({
    nombre: "Ethereum",
    precio: 40,
    imagen: "icons/shopping-cart-add.png",
    imagen2:
      "https://cryptoshitcompra.com/wp-content/uploads/2021/06/ethereum.jpg",
  });
  productList.push({
    nombre: "BNB",
    precio: 40,
    imagen: "icons/shopping-cart-add.png",
    imagen2:
      "https://th.bing.com/th/id/R.3c775a69376a877a9fd2f2d11d528d6c?rik=X%2fLpN4tIl1D75w&riu=http%3a%2f%2fpxb.cdn.eldiariodelarepublica.com%2frepublica%2f012018%2f1515948682740.jpg&ehk=2ZBAoo%2fcwKB6GakTZXPYXUsnGI5fgVaxEfLD176FRAI%3d&risl=&pid=ImgRaw&r=0",
  });
  productList.push({
    nombre: "BNB",
    precio: 40,
    imagen: "icons/shopping-cart-add.png",
    imagen2:
      "https://th.bing.com/th/id/R.3c775a69376a877a9fd2f2d11d528d6c?rik=X%2fLpN4tIl1D75w&riu=http%3a%2f%2fpxb.cdn.eldiariodelarepublica.com%2frepublica%2f012018%2f1515948682740.jpg&ehk=2ZBAoo%2fcwKB6GakTZXPYXUsnGI5fgVaxEfLD176FRAI%3d&risl=&pid=ImgRaw&r=0",
  });
  productList.push({
    nombre: "BNB",
    precio: 40,
    imagen: "icons/shopping-cart-add.png",
    imagen2:
      "https://th.bing.com/th/id/R.3c775a69376a877a9fd2f2d11d528d6c?rik=X%2fLpN4tIl1D75w&riu=http%3a%2f%2fpxb.cdn.eldiariodelarepublica.com%2frepublica%2f012018%2f1515948682740.jpg&ehk=2ZBAoo%2fcwKB6GakTZXPYXUsnGI5fgVaxEfLD176FRAI%3d&risl=&pid=ImgRaw&r=0",
  });
  productList.push({
    nombre: "BNB",
    precio: 40,
    imagen: "icons/shopping-cart-add.png",
    imagen2:
      "https://th.bing.com/th/id/R.3c775a69376a877a9fd2f2d11d528d6c?rik=X%2fLpN4tIl1D75w&riu=http%3a%2f%2fpxb.cdn.eldiariodelarepublica.com%2frepublica%2f012018%2f1515948682740.jpg&ehk=2ZBAoo%2fcwKB6GakTZXPYXUsnGI5fgVaxEfLD176FRAI%3d&risl=&pid=ImgRaw&r=0",
  });
  productList.push({
    nombre: "BNB",
    precio: 40,
    imagen: "icons/shopping-cart-add.png",
    imagen2:
      "https://th.bing.com/th/id/R.3c775a69376a877a9fd2f2d11d528d6c?rik=X%2fLpN4tIl1D75w&riu=http%3a%2f%2fpxb.cdn.eldiariodelarepublica.com%2frepublica%2f012018%2f1515948682740.jpg&ehk=2ZBAoo%2fcwKB6GakTZXPYXUsnGI5fgVaxEfLD176FRAI%3d&risl=&pid=ImgRaw&r=0",
  });

  function renderProduct(arr) {
    for (let product of arr) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const imgFigure = document.createElement("img");
      imgFigure.setAttribute("src", product.imagen);

      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productInfodiv = document.createElement("div");

      const productName = document.createElement("p");
      productName.innerHTML = product.nombre;

      const productPrice = document.createElement("p");
      productPrice.innerHTML = "$" + product.precio;

      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.setAttribute("src", product.imagen2);

      cardsContainer.appendChild(productCard);
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
      productCard.appendChild(productInfodiv);
      productCard.appendChild(figure);
      productCard.addEventListener('click', openDespliegueCards)
      figure.appendChild(imgFigure);
      productInfodiv.appendChild(productName);
      productInfodiv.appendChild(productPrice);
      productInfo.appendChild(productInfodiv);
      productInfo.appendChild(figure);
      // console.log(product.precio === 40);
    }
  }

  renderProduct(productList);
  
  imgMenu.addEventListener("click", despliegueImg);
  navbarEmail.addEventListener("click", despliegue);
  shoppingCart.addEventListener("click", despliegueShopping);
  productClose.addEventListener('click', productCloseD);

  function despliegue() {
    desktopMenu.classList.toggle("inactive");
    menuMovile.classList.add("inactiveMovil");
    productDetail.classList.add("inactiveShoppingCart");
  }
  function despliegueImg() {
    menuMovile.classList.toggle("inactiveMovil");
    desktopMenu.classList.add("inactive");
    productDetail.classList.add("inactiveShoppingCart");
  }
  function despliegueShopping() {
    productDetail.classList.toggle("inactiveShoppingCart");
    menuMovile.classList.add("inactiveMovil");
    desktopMenu.classList.add("inactive");
  }
  function openDespliegueCards() {
    moreProductDetail.classList.remove("inactive-product");
    console.log('estoy cliqueando');
    menuMovile.classList.add("inactiveMovil");
    desktopMenu.classList.add("inactive");
    productDetail.classList.add("inactiveShoppingCart");
  }
  function productCloseD(){
    moreProductDetail.classList.add("inactive-product")
    console.log('estoy cliqueando');
  }
});

// desktopMenu.classList.length;
// console.log(desktopMenu);
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", ejecutar);

function ejecutar(event) {
  event.preventDefault();

  const email = "d@gmail.com";
  const password = "123";

  const emailInput = document.querySelector(".input-email");
  const passwordInput = document.querySelector(".input-password");

  if (email === emailInput.value && password === passwordInput.value) {
    // Redirigir a la siguiente página
    window.location.href = "pagina-p.html";
  } else {
    alert("¡Credenciales incorrectas!");
    // Puedes mostrar un mensaje de error o realizar otra acción aquí
  }
}
