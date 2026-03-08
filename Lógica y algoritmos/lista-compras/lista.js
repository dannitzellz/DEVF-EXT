let listaDeCompras = [];

const agregarProducto = (producto) => {
    if(!listaDeCompras.includes(producto)){
        if (listaDeCompras.push(producto)) 
        console.log("Producto agregado a la lista");
    }else{
        console.log("El producto ya se encuentra en la lista");
    }
}

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if(index !== -1){
        if (listaDeCompras.splice(index, 1)) 
            console.log(`Producto ${producto} eliminado a la lista`);
    }else {
    console.log("El producto no existe en la lista");
    }
}

const mostrarLista = () => {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
}
