import { useState } from "react";
import "./ListaCompras.css";

function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  const eliminarProducto = (indexAEliminar) => {
    const listaActualizada = productos.filter((_, indexActual) => indexActual !== indexAEliminar);
    setProductos(listaActualizada);
  };

  return (
    <div className="lista-container">
      <h2 className="titulo">
        <svg className="icono" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        Despensa
      </h2>
      
      <div className="input-group">
        <input
          type="text"
          className="input-producto"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          placeholder="Agregar a la lista..."
        />
        <button className="btn-agregar" onClick={agregarProducto}>
          <svg className="icono" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>

      {productos.length === 0 ? (
        <p className="lista-vacia">La cesta está vacía.</p>
      ) : (
        <ul className="lista">
          {productos.map((producto, index) => (
            <li key={index} className="item-producto">
              <span>{producto}</span>
              <button className="btn-eliminar" onClick={() => eliminarProducto(index)}>
                <svg className="icono" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaCompras;