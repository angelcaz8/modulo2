const inventario = [
    {
      id: 1,
      nombre: "Laptop Gamer",
      categoria: "electrónica",
      precio: 1500,
      stock: 0, // Primer producto sin stock
      vendidos: 25,
      envioGratis: "si",
      oferta: "no"
    },
    {
      id: 2,
      nombre: "Smartwatch",
      categoria: "wearables",
      precio: 200,
      stock: 15,
      vendidos: 10,
      envioGratis: "no",
      oferta: "si"
    },
    {
      id: 3,
      nombre: "Auriculares Bluetooth",
      categoria: "accesorios",
      precio: 80,
      stock: 30,
      vendidos: 50,
      envioGratis: "si",
      oferta: "si"
    },
    {
      id: 4,
      nombre: "Teclado Mecánico",
      categoria: "accesorios",
      precio: 120,
      stock: 10,
      vendidos: 15,
      envioGratis: "no",
      oferta: "no"
    }
  ];
  const nombresSinStock = inventario
  .filter(producto => producto.stock === 0)
  .map(producto => producto.nombre);

console.log("Productos sin stock:", nombresSinStock);