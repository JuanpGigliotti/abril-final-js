const product = [
    {
        id:1,
        name:"Brightening Day Cream",
        img: "/products/catego/categorias-img/face/1.webp",
        price: 30.00,
    },
    {
        id:2,
        name: "Rejuvenating Night Cream",
        img: "/products/catego/categorias-img/face/2.webp",
        price:20.00,
    },
    {
        id:3,
        name:"Facial Hydrating Toner" ,
        img: "/products/catego/categorias-img/face/3.webp",
        price:23.00 ,
    },
    {
        id:4,
        name:"Purifying Clay Mask",
        img: "/products/catego/categorias-img/face/4.webp",
        price:38.00,
    },
    {
        id:5,
        name: "Face Cleansing Oil",
        img: "/products/catego/categorias-img/face/5.webp",
        price:45.00,
    },
    {
        id:6,
        name: "Collagen Hyaluronic Firming Serum",
        img: "/products/catego/categorias-img/face/6.webp",
        price:29.00,
    },
    {
        id:7,
        name:"Precious Face Oil" ,
        img: "/products/catego/categorias-img/face/7.webp",
        price:44.00,
    },
    {
        id:8,
        name:"Velvet Cleansing Milk",
        img: "/products/catego/categorias-img/face/8.webp",
        price:55.00,
    }
];


const productsContainer = document.getElementById("products-container")

const verCarrito = document.getElementById("verCarrito");

const modalContainer = document.getElementById("modal-container");

let carrito = [];

function createProducts (articles) {
    articles.forEach(article=> {
        let newProduct = document.createElement("div")
        newProduct.classList = "product-box";
        newProduct.innerHTML = `
        <img src="${article.img}">
        <h3>${article.name}</h3>
        <p>$${article.price}</p>
        `
        productsContainer.appendChild(newProduct);

        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className = "Comprar"

    newProduct.append(comprar);

    comprar.addEventListener("click", ()=> {
        carrito.push({
            id: article.id,
            img: article.img,
            nombre: article.name,
            precio: article.price
        });
        console.log(carrito);
    });
    });
}
createProducts(product);

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className= "modal-header"
    modalHeader.innerHTML= `
    <h1 class="modal-header-tittle">Cart</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";
modalButton.addEventListener("click", ()=> {
    modalContainer.style.display = "none"
    

})

    modalHeader.append(modalButton);

    carrito.forEach((article) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src= "${article.img}">
        <h3>${article.nombre}"</h3>
        <p>$${article.precio}</p>
        `;
        
        modalContainer.append(carritoContent);
    });
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total $${total}`;
    modalContainer.append(totalBuying);

});

