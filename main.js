const divproductos = document.getElementById("productos");
const divcarrito = document.getElementById("carrito");
const divtotal = document.getElementById("total");

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  let productosdisponibles = JSON.parse(localStorage.getItem("productos"));
  generartarjetas(productosdisponibles);
});

const generartarjetas = (productos) => {
  productos.forEach((producto) => {
    let card = document.createElement("div");
    card.className = "producto";
    card.innerHTML = `
      <div class="card col-lg-4 col-md-4 col-sm-12 p-5px" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.categoria}</p>
          <p class="card-text">${producto.precio}</p>
          <button id="btncomprar${producto.id}" class="btn btn-primary">Comprar</button>
        </div>
      </div>`;

    divproductos.appendChild(card);

    const btncomprar = document.getElementById(`btncomprar${producto.id}`);
    btncomprar.addEventListener("click", () => agregarAlCarrito(producto));
  });
};

const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  actualizarCarrito();
};

const actualizarCarrito = () => {
  divcarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.className = "carrito-item";
    item.innerHTML = `
      <p>${producto.nombre} - ${producto.precio}</p>
      <button class="btn btn-danger btn-sm" id="btneliminar${producto.id}">Eliminar</button>
    `;
    divcarrito.appendChild(item);

    const btneliminar = document.getElementById(`btneliminar${producto.id}`);
    btneliminar.addEventListener("click", () => eliminarDelCarrito(producto));
  });
};

const eliminarDelCarrito = (producto) => {
  carrito = carrito.filter((p) => p.id !== producto.id);
  actualizarCarrito();
};

document.getElementById("btnVaciarCarrito").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

document.getElementById("btnTotal").addEventListener("click", () => {
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );
  alert(`Total: ${total}`);
  alert(`gracias por su compra`);
});
