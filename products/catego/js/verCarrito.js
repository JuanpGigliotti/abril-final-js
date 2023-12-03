const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito")

const pintarCarrito = () => {
    modalContainer.style.display = "block";
    modalContainer.innerHTML = "";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-tittle">Cart</h1>
    `;
    modalContainer.appendChild(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";
    
    modalButton.addEventListener("click", () => {
        var event = event || window.event; 
        event.stopPropagation();
        modalContainer.style.display = "none";
        modalContainer.innerHTML = "";
    });

    modalHeader.append(modalButton);

    carrito.forEach((article) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.dataset.id = article.id;
        carritoContent.innerHTML = `
            <img src="${article.img}">
            <h3>${article.nombre}</h3>
            <p>$${article.precio}</p>
            <p>Cantidad: <span class="restar"> - </span> ${article.cantidad} <span class="sumar"> + </span></p>
            <span class="delete-product">❌</span>
        `;

        modalContainer.appendChild(carritoContent);

        carritoContent.querySelector(".restar").addEventListener("click", () => {
            restarCantidad(article.id);
        });

        carritoContent.querySelector(".sumar").addEventListener("click", () => {
            sumarCantidad(article.id);
        });

        carritoContent.querySelector(".delete-product").addEventListener("click", () => {
            eliminarProducto(article.id);
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total $${total}`;
    modalContainer.appendChild(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const restarCantidad = (articleId) => {
    const article = carrito.find((item) => item.id === articleId);

    if (article && article.cantidad > 1) {
        article.cantidad--;
        saveLocal();
        pintarCarrito();
    }
};

const sumarCantidad = (articleId) => {
    const article = carrito.find((item) => item.id === articleId);

    if (article) {
        article.cantidad++;
        saveLocal();
        pintarCarrito();
    }
};

const eliminarProducto = (articleId) => {
    carrito = carrito.filter((article) => article.id !== articleId);

    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};

carritoCounter();
