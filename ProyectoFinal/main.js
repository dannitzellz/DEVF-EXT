const formulario = document.getElementById("formulario");
const comentarioTextBox = document.getElementById("comentarioTextBox");
let containerComentarios = document.getElementById("comentariosContainer");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let comentario = comentarioTextBox.value; 
    let fecha = new Date().toLocaleString();

    if (comentario.trim() === "") {
        alert("El comentario no puede estar vacío");
        return;
    }
    const comentarioElement = document.createElement("div");
    comentarioElement.classList.add("comentario");

    comentarioElement.innerHTML = `
        <strong>${fecha}</strong><br>
        ${comentario}
    `;
    //boton de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function(){
        comentarioElement.remove();
    });
    comentarioElement.appendChild(botonEliminar);

    //Lo agregamos al contenedor de comentarios
    containerComentarios.appendChild(comentarioElement);

    //limpiar el textbox
    comentarioTextBox.value = "";
});
