import React, { useState, useEffect, useMemo } from 'react';
import "./App.css";

function App() {
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtro, setFiltro] = useState("todas");

  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const calcularTiempoTotal = useMemo(() => {
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]);

  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion),
        fecha: Date.now()
      };

      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  const tareasFiltradas = useMemo(() => {
    let resultado = [...tareas];

    if (filtro === "cortas") {
      return resultado.filter(tarea => tarea.duracion < 30);
    }

    if (filtro === "largas") {
      return resultado.filter(tarea => tarea.duracion >= 30);
    }

    if (filtro === "recientes") {
      return resultado.sort((a, b) => b.fecha - a.fecha).slice(0, 5);
    }

    return resultado;
  }, [tareas, filtro]);

  return (
    <div>
      <h1>Contador de Tareas</h1>

      <div className="controles">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />

        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
        />

        <button onClick={agregarTarea}>
          Agregar tarea
        </button>

        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="cortas">Menos de 30 minutos</option>
          <option value="largas">30 minutos o más</option>
          <option value="recientes">Más recientes</option>
        </select>
      </div>

      <h2>Tareas</h2>

      <ul>
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.fecha}>
            <span>{tarea.nombre}</span>
            <span>{tarea.duracion} minutos</span>
          </li>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;