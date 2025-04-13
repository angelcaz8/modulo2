const fs = require('fs');


const filePath = './notas.json';


function agregarNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(filePath)) {
 
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}


function listarNotas() {
  if (fs.existsSync(filePath)) {
    
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    
    console.log('\n=== Listado de Notas ===');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. [${nota.titulo}]`);
      console.log(`   ${nota.contenido}\n`);
    });
  } else {
    console.log('No hay notas guardadas.');
  }
}


 
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
   
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = JSON.parse(data);

    
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

  
    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}


agregarNota('compras', 'Comprar fruta.');
agregarNota('Recordatorio', 'Reunión a las 2:00');
listarNotas();
eliminarNota('compras');
listarNotas();


