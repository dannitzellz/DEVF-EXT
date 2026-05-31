import './Tarjeta.css';

function Tarjeta() {
  // Definimos la información estática de la tarjeta
  const nombre = "Danna López";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  // Retornamos el JSX que representa la tarjeta
  return (
    <div className='tarjeta-contenedor'>
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2 className="tarjeta-nombre">{nombre}</h2>
      <h4 className="tarjeta-profesion">{profesion}</h4>
      <p className="tarjeta-mensaje">{mensaje}</p>
    </div>
  );
}

export default Tarjeta;