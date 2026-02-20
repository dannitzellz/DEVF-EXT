const formulario = document.getElementById("formulario");
const comentarioTextBox = document.getElementById("comentarioTextBox");
let containerComentarios = document.getElementById("comentariosContainer");

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

function crearElementoComentario(item) {
    const comentarioElement = document.createElement("div");
    comentarioElement.classList.add("comentario-card", "comentario");

    const layout = document.createElement("div");
    layout.classList.add("comentario-layout");

    const avatar = document.createElement("img");
    avatar.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    avatar.alt = "Avatar";
    avatar.classList.add("avatar");

    const contenido = document.createElement("div");
    contenido.classList.add("comentario-contenido");

    const fecha = document.createElement("small");
    fecha.textContent = item.fecha;

    const texto = document.createElement("p");
    texto.textContent = item.texto; 

    contenido.appendChild(fecha);
    contenido.appendChild(texto);

    layout.appendChild(avatar);
    layout.appendChild(contenido);

    comentarioElement.appendChild(layout);

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn-eliminar");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.onclick = () => {
        comentarios = comentarios.filter(c => c.id !== item.id);
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
        comentarioElement.remove();
    };

    comentarioElement.appendChild(botonEliminar);

    return comentarioElement;
}


function cargarComentarios() {
    comentarios.forEach((item, index) => {
        const nuevoNodo = crearElementoComentario(item, index);
        containerComentarios.prepend(nuevoNodo);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let texto = comentarioTextBox.value.trim();
    
    if (texto === "") return;

    const nuevoComentario = {
        id: Date.now(),
        texto: texto,
        fecha: new Date().toLocaleString()
    };

    comentarios.push(nuevoComentario);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    const nuevoNodo = crearElementoComentario(nuevoComentario);
    containerComentarios.prepend(nuevoNodo);

    comentarioTextBox.value = "";
});


cargarComentarios();
