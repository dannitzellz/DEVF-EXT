let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro}`);
    });
}
    

agregarLibro("El Quijote");
agregarLibro("Cien Años de Soledad");
agregarLibro("1984");
agregarLibro("Matar a un Ruiseñor");

mostrarLibrosLeidos();