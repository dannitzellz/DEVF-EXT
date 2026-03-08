import {agregarProducto, eliminarProducto} from "./lista.js"
import { renderizarLista } from "./ui.js";

export const iniciarEventos = () => {
    const formularioProductos = document.getElementById("formulario-productos");
    const listaProductos = document.getElementById("lista-productos");
    const productoInput = document.getElementById("producto-input"); 

    formularioProductos.addEventListener("submit", (e) => {
        e.preventDefault();
        const producto = productoInput.value.trim();

        if(producto){
            const agregado = agregarProducto(producto);
            if (!agregado) {
                alert("El producto ya está en la lista");  
            }else{
                renderizarLista();
            }
            productoInput.value = "";
        }
    });

    listaProductos.addEventListener("click", (e) => {

        if (e.target.tagName === "BUTTON") {
            const producto = e.target.dataset.producto;

            eliminarProducto(producto);
            renderizarLista();
        }
    });
}