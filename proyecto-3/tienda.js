// 1. Crear arreglo de productos
const productos = [
    { nombre: "Camisa", precio: 45, categoria: "ropa" },
    { nombre: "Zapatos", precio: 120, categoria: "calzado" },
    { nombre: "Lámpara", precio: 85, categoria: "hogar" },
    { nombre: "Libro", precio: 20, categoria: "libros" },
    { nombre: "Audífonos", precio: 150, categoria: "electrónica" }
  ];
  
  // 2. Filtrar productos menores a $100
  const productosBaratos = productos.filter(producto => {
    return producto.precio < 100;
  });
  console.log("Productos bajo $100:", productosBaratos);
  
  // 3. Ordenar alfabéticamente
  const productosOrdenados = productosBaratos.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
  });
  console.log("Productos ordenados:", productosOrdenados);
  
  // 4. Extraer solo nombres
  const nombresProductos = productosOrdenados.map(producto => {
    return producto.nombre;
  });
  console.log("Nombres de productos:", nombresProductos);
  
  // 5. (Opcional) Calcular precio promedio con reduce
  const total = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
  }, 0);
  console.log("Precio promedio:", (total / productos.length).toFixed(2));