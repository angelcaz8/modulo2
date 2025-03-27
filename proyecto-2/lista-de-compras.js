// 1. Crear un arreglo vacío para almacenar los productos.
const listaDeCompras = [];

// 2. Función para agregar un producto al final del arreglo (sin duplicados).
const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) { // Verifica si el producto no existe.
        listaDeCompras.push(producto); // Agrega el producto al final del arreglo.
    }
};

// 3. Función para eliminar un producto del arreglo.
const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto); // Busca el índice del producto.
    if (indice !== -1) { // Si el producto existe en el arreglo.
        listaDeCompras.splice(indice, 1); // Elimina el producto usando su índice.
    }
};

// 4. Función para mostrar la lista de productos en la consola.
const mostrarLista = () => {
    console.log("Lista de compras:"); // Encabezado.
    listaDeCompras.forEach((producto, indice) => { // Itera cada producto.
        console.log(`${indice + 1}. ${producto}`); // Muestra el índice y nombre del producto.
    });
};
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Manzanas"); // Duplicado: no debería agregarse
mostrarLista();

eliminarProducto("Leche");
mostrarLista();