const divcarrito = document.getElementById("carrito");
const divtotal = document.getElementById("total-precio");

const listado = document.getElementById("productos");
let carrito = [];

const pedirProductos = async () => {
  try {
    const response = await fetch("../productos.json");
    const data = await response.json();

    data.forEach((producto) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class='col-4 card' style='width: 15rem;'>
          <img src='../img/${producto.imagen}' class='card-img-top' alt=''>
          <div class='card-body'>
            <h5 class='card-title'>${producto.nombre}</h5>
            <h6 class='card-title card-precio'>$ ${producto.precio}</h6>
            <a href='#' class='btn btn-primary card-boton' onclick='agregarAlCarrito(${JSON.stringify(producto)})'>Añadir al carrito</a>
          </div>
        </div>`;

      listado.appendChild(div);
    });

  } catch (error) {
    console.error("Error: " + error);
  } finally {
    console.log("Terminado");
  }
};

const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  actualizarCarrito();
};

const actualizarCarrito = () => {
  divcarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.className = "carrito-item";
    item.innerHTML = `
      <p>${producto.nombre} - $${producto.precio}</p>
      <button class="btn btn-danger btn-sm" onclick='eliminarDelCarrito(${JSON.stringify(producto)})'>Eliminar</button>
    `;
    divcarrito.appendChild(item);
    total += producto.precio;
  });

  divtotal.textContent = total.toFixed(2);
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
  alert(`Total: $${total.toFixed(2)}`);
  alert("¡Gracias por su compra!");
});

pedirProductos();
