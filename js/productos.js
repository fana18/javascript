const divcarrito = document.getElementById("carrito");
const divtotal = document.getElementById("total-precio");
const selectOrdenar = document.getElementById("inputGroupSelect01");
const productosRow = document.getElementById("productosRow");
let carrito = [];
let productosData = [];

const pedirProductos = async () => {
  try {
    const response = await fetch("../productos.json");
    const data = await response.json();

    const productosEnLocalStorage =
      JSON.parse(localStorage.getItem("carrito")) || [];

    let contador = 0;
    let row;

    data.forEach((producto, index) => {
      if (contador % 4 === 0) {
        row = document.createElement("div");
        row.className = "row";
        productosRow.appendChild(row);
      }

      const div = document.createElement("div");
      div.className = "col-3 card";
      div.style = "width: 15rem;";
      div.innerHTML = `
        <img src='../img/${producto.imagen}' class='card-img-top' alt=''>
        <div class='card-body'>
          <h5 class='card-title'>${producto.nombre}</h5>
          <h6 class='card-title card-precio'>$ ${producto.precio}</h6>
          <a href='#' class='btn btn-primary card-boton' onclick='agregarAlCarrito(event, ${JSON.stringify(
            producto
          )})'>Añadir al carrito</a>
        </div>`;

      row.appendChild(div);
      contador++;
    });

    if (productosEnLocalStorage.length === 0) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    if (productosEnLocalStorage.length > 0) {
      carrito = productosEnLocalStorage;
      actualizarCarrito();
    }

    productosData = data;
  } catch (error) {
    console.error("Error: " + error);
  } finally {
    console.log("Terminado");
  }
};

selectOrdenar.addEventListener("change", () => {
  const valorSeleccionado = selectOrdenar.value;
  if (valorSeleccionado === "1") {
    productosData.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
  } else if (valorSeleccionado === "2") {
    productosData.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
  }

  productosRow.innerHTML = "";
  carrito = [];
  productosData.forEach((producto, index) => {
    const div = document.createElement("div");
    div.className = "col-3 card";
    div.style = "width: 15rem;";
    div.innerHTML = `
      <img src='../img/${producto.imagen}' class='card-img-top' alt=''>
      <div class='card-body'>
        <h5 class='card-title'>${producto.nombre}</h5>
        <h6 class='card-title card-precio'>$ ${producto.precio}</h6>
        <a href='#' class='btn btn-primary card-boton' onclick='agregarAlCarrito(event, ${JSON.stringify(
          producto
        )})'>Añadir al carrito</a>
      </div>`;

    productosRow.appendChild(div);
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));
});

const agregarAlCarrito = (event, producto) => {
  event.preventDefault();
  carrito.push(producto);
  actualizarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const actualizarCarrito = () => {
  divcarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.className = "carrito-item";
    item.innerHTML = `
      <p>${producto.nombre} - $${producto.precio}</p>
      <button class="btn btn-danger btn-sm" onclick='eliminarDelCarrito(${JSON.stringify(
        producto
      )})'>Eliminar</button>
    `;
    divcarrito.appendChild(item);
    total += parseFloat(producto.precio);
  });

  divtotal.textContent = `Total: $${total}`;
};

const eliminarDelCarrito = (producto) => {
  carrito = carrito.filter((p) => p.id !== producto.id);
  actualizarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

document.getElementById("btnVaciarCarrito").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
  localStorage.removeItem("carrito");
});

document.getElementById("btnTotal").addEventListener("click", () => {
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + parseFloat(producto.precio),
    0
  );
  Swal.fire({
    title: `Gracias por su compra`,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  }).then(() => {
   
    window.location.href = "../index.html";
  });

  localStorage.removeItem("carrito");

  carrito = [];
  actualizarCarrito();
});

pedirProductos();

