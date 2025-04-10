
const productos = [
    { nombre: "Camisa", precio: 45, categoria: "ropa" },
    { nombre: "Zapatos", precio: 99, categoria: "calzado" },
    { nombre: "Lámpara", precio: 85, categoria: "hogar" },
    { nombre: "Libro", precio: 20, categoria: "libros" },
    { nombre: "Audífonos", precio: 150, categoria: "electrónica" }
  ];
  
  const productosBaratos = productos.filter(producto => {
    return producto.precio < 100;
  });
  console.log("Productos bajo $100:", productosBaratos);
  
  
  const productosOrdenados = productosBaratos.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
  });
  console.log("Productos ordenados:", productosOrdenados);
  
 
  const nombresProductos = productosOrdenados.map(producto => {
    return producto.nombre;
  });
  console.log("Nombres de productos:", nombresProductos);
  
 
  const total = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
  }, 0);
  console.log("Precio promedio:", (total / productos.length).toFixed(2));