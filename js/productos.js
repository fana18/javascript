const divcarrito = document.getElementById("carrito");
const divtotal = document.getElementById("total-precio");

const listado = document.getElementById("productosRow");
let carrito = [];

const pedirProductos = async () => {
    try {
        const response = await fetch("../productos.json");
        const data = await response.json();

        let contador = 0;
        let row;

        data.forEach((producto, index) => {
            if (contador % 4 === 0) {
                
                row = document.createElement("div");
                row.className = "row";
                listado.appendChild(row);
            }

            const div = document.createElement("div");
            div.className = 'col-3 card';
            div.style = 'width: 15rem;';
            div.innerHTML = `
              <img src='../img/${producto.imagen}' class='card-img-top' alt=''>
              <div class='card-body'>
                <h5 class='card-title'>${producto.nombre}</h5>
                <h6 class='card-title card-precio'>$ ${producto.precio}</h6>
                <a href='#' class='btn btn-primary card-boton' onclick='agregarAlCarrito(event, ${JSON.stringify(producto)})'>Añadir al carrito</a>
              </div>`;

            row.appendChild(div);
            contador++;
        });

    } catch (error) {
        console.error("Error: " + error);
    } finally {
        console.log("Terminado");
    }
};
const agregarAlCarrito = (event, producto) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace #
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
  };

  document
    .getElementById("btnVaciarCarrito")
    .addEventListener("click", () => {
      carrito = [];
      actualizarCarrito();
    });

  document.getElementById("btnTotal").addEventListener("click", () => {
    const total = carrito.reduce(
      (acumulador, producto) => acumulador + parseFloat(producto.precio),
      0
    );
    Swal.fire({
      title: `Gracias por su compra`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    

    carrito = [];
    actualizarCarrito();
  });


pedirProductos();