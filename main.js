/* 
PRE-ENTREGA2: cosas a incluir 
arrays
objetos 
funciones de alto ordeb 
metodos 
van los temas de la clase 4 hasta la clase 8
*/
let saludo = alert(`Bienvenido/a a nuestra tienda `);
let pedirNombre = prompt(`Ingrese su nombre de usuario porfavor `);
let carrito = [
  { nombre: "Camisa", precio: 12000, id: 1 },
  { nombre: "Jean", precio: 12500, id: 2 },
  { nombre: "Remera Polo", precio: 12700, id: 3 },
  { nombre: "Pantalon Cargo", precio: 13500, id: 4 },
  { nombre: "Campera", precio: 21000, id: 5 },
  { nombre: "Buzo", precio: 14000, id: 6 },
  { nombre: "Sweater", precio: 12300, id: 7 },
  { nombre: "Cardigan", precio: 12900, id: 8 },
];

// tengo que mostrar los productos que estan en el arreglo
let productosDisponibles = "Productos disponibles:\n";
for (let producto of carrito) {
  productosDisponibles += `${producto.nombre}\n`;
}
alert(productosDisponibles);

//  compra
let productosElegidos = prompt(
  "Ingrese los nombres de los productos que desea comprar, separados por comas:"
).toLowerCase();

//productos
let productosSeleccionados = [];
if (productosElegidos) {
  let productosElegidosArray = productosElegidos.split(",");
  for (let nombreProducto of productosElegidosArray) {
    let productoEncontrado = carrito.find(
      (producto) =>
        producto.nombre.toLowerCase() === nombreProducto.trim().toLowerCase()
    );
    if (productoEncontrado) {
      productosSeleccionados.push(productoEncontrado);
    }
  }
}

// Mostrar nombres
let detallesProductos = "Detalles de productos seleccionados:\n";
let total = productosSeleccionados.reduce((acumulador, producto) => {
  detallesProductos += ` ${producto.nombre} - Precio: ${producto.precio}\n`;
  return acumulador + producto.precio;
}, 0);

alert(detallesProductos);

// parte en la que le pregunto al usuario si tiene un descuento
let descuento = prompt(
  "¿Tiene un descuento? (escriba  si o  no)"
).toLowerCase();
if (descuento === "si") {
  let porcentajeDescuento = parseFloat(
    prompt("Ingrese el porcentaje de descuento:")
  );
  if (porcentajeDescuento === 15) {
    let descuentoAplicado = total * (porcentajeDescuento / 100);
    let totalConDescuento = total - descuentoAplicado;
    alert(`Total con descuento: ${totalConDescuento}`);
  } else {
    alert("Solo aceptamos descuentos del 15%.");
  }
} else if (descuento === "no") {
  alert(`Total a pagar: ${total}`);
}
let agradecimiento = alert(`Gracias por su compra ${pedirNombre}`);
