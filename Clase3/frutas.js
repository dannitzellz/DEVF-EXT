let frutas = ["Kiwi", "Platano", "Pera", "Manzana", "Naranja", "Kiwi", "Platano", "Melon", "Manzana", "Kiwi"];

//EN ESTE OBJETO SE GUARDARA LA FRUTA Y SU CANTIDAD
cantidadFrutas = {}

//SOLUCION CON FOR
for (let i = 0; i < frutas.length; i++){
    const fruta = frutas[i];
    if(cantidadFrutas[fruta]){
        cantidadFrutas[fruta]++;
    }else{
        cantidadFrutas[fruta] = 1;
    }

}
console.log("Resultados con For:");
console.log(cantidadFrutas);


cantidadFrutasWhile = {}
let i=0;
//SOLUCION CON WHILE
while(i < frutas.length){
    const fruta = frutas[i];
    if(cantidadFrutasWhile[fruta]){
        cantidadFrutasWhile[fruta]++;
    }else{
        cantidadFrutasWhile[fruta] = 1;
    }
    i++;
}
console.log("Resultados con While:");
console.log(cantidadFrutasWhile);
