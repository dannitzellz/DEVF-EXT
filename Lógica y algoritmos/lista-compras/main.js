import { iniciarEventos } from "./eventos.js";
import { renderizarLista } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    iniciarEventos();
    renderizarLista();
});