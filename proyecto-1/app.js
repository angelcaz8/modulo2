// Importar funciones desde el módulo
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Función flecha para iniciar la aplicación
const iniciarApp = () => {
    // Registrar destinos de ejemplo
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    
    // Mostrar itinerario completo
    mostrarItinerario();
};

// Ejecutar aplicación
iniciarApp();