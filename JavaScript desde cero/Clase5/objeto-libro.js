const libro = {
    titulo : "El Quijote",
    autor : "Miguel de Cervantes",
    anio: 1605,
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3", "Capítulo 4"],

    describirLibro(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    agregarCapitulo(nuevoCapitulo){
        this.capitulos.push(nuevoCapitulo);
        console.log(`Capítulo ${nuevoCapitulo} agregado al libro ${this.titulo}`);
    },
    eliminarCapitulo(indice){
        if(indice >= 0 && indice < this.capitulos.length){
            console.log(`Capítulo ${this.capitulos[indice]} eliminado del libro ${this.titulo}`);
            this.capitulos.splice(indice, 1);
        }else{
            console.log("Indice no valido");
        }
    },
    mostrarCapitulos(){
        this.capitulos.forEach((capitulo, i) => {
            console.log(`${i + 1} ${capitulo}`);
        })
    }
}

libro.mostrarCapitulos();
libro.agregarCapitulo("Capítulo 5");
libro.mostrarCapitulos();
libro.eliminarCapitulo(4);
libro.mostrarCapitulos();
