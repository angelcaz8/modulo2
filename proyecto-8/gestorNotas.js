const fs = require('fs');
const filePath = './notas.json';

// Función para agregar una nueva nota
function agregarNota(titulo, contenido) {
    let notas = [];
    
    // 1. Verificar si el archivo existe
    if (fs.existsSync(filePath)) {
        // 2. Leer el contenido actual del archivo
        const data = fs.readFileSync(filePath, 'utf8');
        // 3. Convertir de JSON a array de objetos
        notas = JSON.parse(data);
    }

    // 4. Agregar la nueva nota al array
    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    // 5. Escribir el array actualizado en el archivo
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log(' Nota agregada con éxito.');
}

// Función para listar todas las notas
function listarNotas() {
    if (fs.existsSync(filePath)) {
        // 1. Leer y parsear el archivo
        const data = fs.readFileSync(filePath, 'utf8');
        const notas = JSON.parse(data);
        
        // 2. Mostrar formato amigable
        console.log('\n LISTA DE NOTAS:');
        notas.forEach((nota, index) => {
            console.log(`${index + 1}. Título: ${nota.titulo}`);
            console.log(`   Contenido: ${nota.contenido}\n`);
        });
    } else {
        console.log('ℹ No hay notas guardadas.');
    }
}

// Función para eliminar una nota
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
        // 1. Obtener notas actuales
        const data = fs.readFileSync(filePath, 'utf8');
        let notas = JSON.parse(data);
        
        // 2. Filtrar las notas
        const notasOriginales = notas.length;
        notas = notas.filter(nota => nota.titulo !== titulo);
        
        // 3. Verificar si se eliminó algo
        if (notas.length === notasOriginales) {
            console.log(' No se encontró la nota indicada');
            return;
        }

        // 4. Guardar cambios
        fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
        console.log(` Nota "${titulo}" eliminada correctamente.`);
    } else {
        console.log(' No hay notas para eliminar.');
    }
}

// Ejemplo de uso
agregarNota('Compras', 'Leche, pan y huevos');
agregarNota('Tareas', 'Estudiar Node.js');
listarNotas();
eliminarNota('Compras');
listarNotas();