export const productos = [
  {
    id: 1,
    nombre: "smirnoff",
    precio: 3200,
    imagen:
      "https://distribuidorabelgrano.com/wp-content/uploads/2019/09/smirnodd-e1568912331494.jpg",
    categoria: "vodka",
  },
  {
    id: 2,
    nombre: "sky",
    precio: 3300,
    imagen:
      "https://dmcdonald.s3.us-east-2.amazonaws.com/bebidas/productos/6988/1.webp",
    categoria: "vodka",
  },
  {
    id: 3,
    nombre: "blue label ",
    precio: 900000,
    imagen:
      "https://www.weshayo.com/wp-content/uploads/2016/08/johnnie-walker-blue-label.png",
    categoria: "whisky",
  },
  {
    id: 4,
    nombre: "red label ",
    precio: 10000,
    imagen:
      "https://static.wixstatic.com/media/d2b1c5_e02cdde13fb9437ebff3163ba4f07a0c~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d2b1c5_e02cdde13fb9437ebff3163ba4f07a0c~mv2.png",
    categoria: "whisky",
  },
  {
    id: 5,
    nombre: "black label ",
    precio: 20000,
    imagen:
      "https://borrachines.com.ar/wp-content/uploads/2023/02/Johnnie-Walker-Whisky-Black-label-1000ml-Cestuche-001-Mercado-2.png",
    categoria: "whisky",
  },
  {
    id: 6,
    nombre: " fernet comun ",
    precio: 3500,
    imagen:
      "https://acdn.mitiendanube.com/stores/001/211/660/products/fernet-branca-4501-a9cdb5957840d19c3f16061431833595-480-0.jpg",
    categoria: "fernet",
  },
  {
    id: 7,
    nombre: " fernet de menta  ",
    precio: 3000,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/226764/7790290101480_02.jpg?v=637715449436000000",
    categoria: "fernet",
  },
  {
    id: 8,
    nombre: " gin gordons  ",
    precio: 3000,
    imagen:
      "https://ardiaprod.vtexassets.com/arquivos/ids/256760/Gin-Gordons-700-Ml-_1.jpg?v=638253643969070000",
    categoria: "gin",
  },
  {
    id: 9,
    nombre: " gins lonson dry   ",
    precio: 3000,
    imagen: "https://www.envero.com.ar/image/cache/data/beefeater-500x500.jpg",
    categoria: "gin ",
  },
];
JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
