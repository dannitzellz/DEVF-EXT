let listaDeCompras = [];

export const agregarProducto = (producto) => {
    if(!listaDeCompras.includes(producto)){
        if (listaDeCompras.push(producto)) 
        console.log("Producto agregado a la lista");
        return true;
    }
    console.log("El producto ya se encuentra en la lista");
    return false;
}

export const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if(index !== -1){
        if (listaDeCompras.splice(index, 1)) 
            console.log(`Producto ${producto} eliminado de la lista`);
            return true;
    }
    console.log("El producto no existe en la lista");
    return false;
}

export const obtenerLista = () => {
    return listaDeCompras;
}

export const mostrarLista = () => {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
}
