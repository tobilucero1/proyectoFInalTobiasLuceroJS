const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class = "modal-header-title">Carrito de Compras</h1>
    `;
    modalContainer.append(modalHeader);
    const modalbuttom = document.createElement("h1");
    modalbuttom.innerText = "X";
    modalbuttom.className = "modal-header-buttom";

    modalbuttom.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbuttom);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
          <img src="${product.img}">
          <h3>${product.nombre}</h3>
          <p>${product.precio} $</p>
          <p>cantidad: ${product.cantidad}</p>
        `;

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "x";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const totalbuying = document.createElement("div");
    totalbuying.className = "total-content" ;
    totalbuying.innerHTML = `total a pagar: ${total} $`;
    
    modalContainer.append(totalbuying);
};

verCarrito.addEventListener("click" , pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    });

    pintarCarrito();
};