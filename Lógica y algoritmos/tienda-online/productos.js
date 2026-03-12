const productos = [
    {nombre: "Mouse", precio: 70, categoria: "oficina"},
    {nombre: "Lavadora", precio: 8000, categoria: "Electrodomesticos"},
    {nombre: "Plancha", precio: 500, categoria: "Electrodomesticos"},
    {nombre: "Camisa", precio: 120, categoria: "Ropa"},
    {nombre: "Leche", precio: 15, categoria: "Alimentos"}
]

const menosDeCien = productos.filter((productos) => productos.precio < 100);
console.log(menosDeCien);

const ordenAlfabetico = productos.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log(ordenAlfabetico);

const soloNombres = productos.map(producto => producto.nombre);
console.log(soloNombres);

//Otros ejemplos
//Suma del costo total de todos lo productos
const total = productos.reduce((acumulador, producto) =>{
    return acumulador + producto.precio;
},0);

console.log(`El total de todos los productos es: ${total}`);

//Verificamos si entre los productos de la tienda al menos uno es ropa
const hayRopa = productos.some((producto) => producto.categoria == "Ropa")
console.log(hayRopa);

//Verificamos si todos los productos pueden ser pagados con solo billetes de 100 de manera exacta
const divisibleEntreCien = productos.every(producto => producto.precio % 100 === 0);
console.log(divisibleEntreCien);

//Vemos si la tienda tiene algun producto clasificado como Tecnologia
const categorias = productos.map(producto => producto.categoria);
console.log(categorias.includes("Tecnologia"));
