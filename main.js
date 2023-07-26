const productos = {
    camisa: 5000,
    pantalon: 8000,
    remera: 3000,
    campera: 1200,
    buzo: 6000,
    jean: 7500,
    sweater: 9000,
  };
  
  const mostrarProductos = () => {
    let mensaje = "Productos disponibles:\n";
    for (const producto in productos) {
      mensaje += `${producto}: $${productos[producto]}\n`;
    }
    alert(mensaje);
  };
  
  const obtenerProductoElegido = () => {
    let productoElegido = prompt("Ingrese el nombre del producto que desea comprar:");
    productoElegido = productoElegido.toLowerCase();
    return productoElegido;
  };
  
  const obtenerDescuentoYMostrarPrecio = (producto, precio) => {
    let tieneDescuento = prompt("¿Tiene algún descuento? Responda 'si' o 'no'");
    
    if (tieneDescuento.toLowerCase() === "si") {
      let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
      
      if (descuento === 15) {
        const precioConDescuento = precio - (precio * (descuento / 100));
        alert(`¡Descuento aplicado! Precio final de ${producto}: $${precioConDescuento}`);
      } else {
        alert("Lo siento, solo hacemos descuentos del 15%.");
      }
    } else {
      alert(`Precio final de ${producto}: $${precio}`);
    }
  };
  
  const final = () => {
    mostrarProductos();
    const productoElegido = obtenerProductoElegido();
    
    if (productos[productoElegido]) {
      obtenerDescuentoYMostrarPrecio(productoElegido, productos[productoElegido]);
    } else {
      alert("Producto no válido. Vuelva a intentarlo.");
    }
  };
  
  final();
  