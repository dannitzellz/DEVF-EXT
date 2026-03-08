import { obtenerLista } from "./lista.js";

export const renderizarLista = () => {
    const listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = ""

    obtenerLista().forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.dataset.producto = producto;

        li.appendChild(btnEliminar);
        listaProductos.appendChild(li);

    });
}