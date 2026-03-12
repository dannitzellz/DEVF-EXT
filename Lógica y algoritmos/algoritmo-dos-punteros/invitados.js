const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];



function encontrarPar(arr){
    let inicio = 0; 
    
    while(inicio < arr.length - 1){
        if(arr[inicio][0] === arr[inicio + 1][0] ){
            return [arr[inicio], arr[inicio + 1]]
        }else{
            inicio++;
        }
    }

    return null // Si no se encuenta ningun par
}

console.log(encontrarPar(invitados));