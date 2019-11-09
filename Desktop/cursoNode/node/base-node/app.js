const { crearArchivo } = require('./multiplicar/multiplicar');
let base = '6';
console.log(process);

crearArchivo(base).then(archivo => console.log(`se creo el archivo: ${archivo}`)).catch(e => console.log
    (e));

