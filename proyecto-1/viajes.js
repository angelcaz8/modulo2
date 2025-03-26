// Array constante para almacenar destinos
const destinos = [];

// Función flecha para calcular costos
const calcularCosto = (destino, transporte) => {
    const costosBase = { Paris: 500, Londres: 400, "New York": 600 };
    const costosTransporte = { "Avión": 200, "Tren": 100 };
    return (costosBase[destino] || 0) + (costosTransporte[transporte] || 0);
};

// Función flecha para registrar destinos (con object shorthand)
const registrarDestino = (destino, fecha, transporte) => {
    destinos.push({
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    });
};

// Función flecha para mostrar itinerario con template literals
const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
};

// Exportar como módulo ES6
export { registrarDestino, mostrarItinerario };