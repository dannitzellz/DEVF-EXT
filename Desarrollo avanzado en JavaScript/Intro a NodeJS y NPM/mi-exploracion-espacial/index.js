const planetas = require('./planetas');
const cowsay = require('cowsay');

planetas.forEach(planeta => {
    const informeEspacial = 
    `DATOS DE EXPLORACIÓN
    -------------------
    Mundo: ${planeta.nombre}
    Clasificación: ${planeta.tipo}
    Descubierto en: ${planeta.descubiertoEn}
    Distancia: ${planeta.distanciaEnAnosLuz} años luz
    Descripción: ${planeta.descripcion}`;
    
    console.log(cowsay.say({
        text : informeEspacial,
        f: 'tux' 
    }));

    console.log('\n');
});