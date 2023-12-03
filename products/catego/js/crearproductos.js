
const productsContainer = document.getElementById("products-container")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];




function createProducts (articles) {
    articles.forEach(article=> {
        let newProduct = document.createElement("div")
        newProduct.classList = "product-box";
        newProduct.innerHTML = `
        <a href= "${article.src}">
        <img src="${article.img}">
        <h3>${article.name}</h3>
        <p>$${article.price}</p>
        </a>
        `
        productsContainer.appendChild(newProduct);
        newProduct.addEventListener("click", (event)=> {
          if (event.target.tagName.toLowerCase() === 'img') {
            const productDescription =  window.open ("", "_blank")
            if (productDescription) {
                productDescription.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Product Description</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Estonia&display=swap" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,400;1,600&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="/styles.css">
                </head>
                <body class="body">
                    <header>
                    <nav class="desktop-nav">
                    <div class="left-nav-desktop">
                        <ul>
                          <li> <a href="/products/navslink/help.html">HELP</a> </li>
                          <li> <a href="/products/navslink/aboutus.html">ABOUT US</a> </li>
                          <li> <a href="/products/navslink/products.html">PRODUCTS</a> </li>
                        </ul>
                    </div>
                    <div class="center-nav-desktop">
                        <h1>FOREST</h1>
                    </div>
                    <div class="right-nav-desktop">
                      <i id="verCarrito" class="fa-solid fa-cart-shopping fa-2xl" style="color: #000000;"><span id="cantidadCarrito" class="cantidad-carrito"> </span><div id="modal-container" class="modal-container"></div></i>
                      <i id="searchBars" class="fa-solid fa-magnifying-glass fa-2xl" style="color: #000000;"></i>
                        <a href="login.html"> <i class="fa-solid fa-user fa-2xl" style="color: #000000;"></i> </a> 
                    </div>
                </nav>
                <nav class="navbar bg-body-tertiary fixed-top" id="mobile-nav">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="/index.html" id="logotype-mobile">FOREST</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                          <h2 class="offcanvas-title" id="offcanvasNavbarLabel">FOREST</h2>
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="/products/navs-links/products.html">Products</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/products/navs-links/cart.html">Shopping cart</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login / Create acount</a>
                              </li>
                            <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mas
                              </a>
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/products/navs-links/aboutus.html">ABOUT US</a></li>
                                <li><a class="dropdown-item" href="/products/navs-links/help.html">HELP</a></li>
                              </ul>
                            </li>
                          </ul>
                          <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    </nav>
                    </header>
                    <div class="productDescriptionContainer">
                    <div class="productDescriptionImg">
                        <img src="${article.img}">
                    </div>
                    <div class="productDescription">
                        <h2>${article.name}</h2>
                        <p>Description: ${article.description}</p>
                        <p>Price: $${article.price}</p>
                        <button id = "productDescriptionButton">Comprar</button>
                    </div>
                    </div>
                    <footer>
                    <h2>FOREST</h2>
                    <div class="footer-list">
                        <ul>
                            <li><a href="/products/navs-links/help.html">HELP</a></li>
                            <li><a href="/products/navs-links/aboutus.html">ABOUT US</a></li>
                            <li><a href="/products/navs-links/products.html">PRODUCTS</a></li>
                        </ul>
                    </div>
                    <div class="icons">
                        <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram fa-2xl" style="color: #fff;"></i></a>
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Des" target="_blank"><i class="fa-brands fa-twitter fa-2xl" style="color:#fff;"></i></a>
                        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook fa-2xl" style="color: #fff;"></i></a>
                    </div>
                    <div class="copy">
                        <p>&copy; 2023 FOREST. Todos los derechos reservados.</p>
                    </div>
                </footer>
                <script> 
                const scriptFontAwesome = document.createElement('script');
                scriptFontAwesome.src = 'https://kit.fontawesome.com/4e3fcfb506.js';
                scriptFontAwesome.crossOrigin = 'anonymous';
                document.head.appendChild(scriptFontAwesome);
        
                const scriptBootstrap = document.createElement('script');
                scriptBootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
                scriptBootstrap.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
                scriptBootstrap.crossOrigin = 'anonymous';
                document.head.appendChild(scriptBootstrap);
                </script>  
                <script src="../catego/js/eventonav.js"></script>
                <script src="../catego/js/face.js" defer></script>
                <script src="/products/catego/js/crearproductos.js"></script>
                <script src="/products/catego/js/verCarrito.js"></script>
                </body>
            </html>
                `
                );
                const productDescriptionButton = document.getElementById("productDescriptionButton");
                    productDescriptionButton.addEventListener("click", () => {
                        handleCompra(article);
                    });
            }
            };
        });
        

        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className = "Comprar"

    newProduct.append(comprar);

    comprar.addEventListener("click", ()=> {
        handleCompra(article);
    });
    });
}
function handleCompra(article) {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === article.id);
    if (repeat) {
        carrito.map((prod) => {
            if (prod.id === article.id) {
                prod.cantidad++;
            }
        });
    } else {
        carrito.push({
            id: article.id,
            img: article.img,
            nombre: article.name,
            precio: article.price,
            cantidad: article.cantidad
        });
    }
    carritoCounter();
    saveLocal();
}



