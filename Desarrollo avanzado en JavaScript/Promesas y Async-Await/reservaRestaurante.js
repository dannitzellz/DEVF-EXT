// Simulando una base de datos de mesas
var mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(mesasDisponibles >= mesasSolicitadas){
        mesasDisponibles -= mesasSolicitadas;
        resolve('Mesas reservadas correctamente');
      }else reject(`No hay suficientes mesas, solo quedan ${mesasDisponibles}`);
    }, 2000); 
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.floor(Math.random() * 10 + 1)
        if(number <= 5) {
            resolve(`Correo de confirmacion enviado a ${nombreCliente} exitosamente`);
        }
        else reject(`Ocurrio un error al enviar el correo de confirmación de ${nombreCliente}`)
    }, 1500);
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);
    const enviado = await enviarConfirmacionReserva(nombreCliente);
    console.log(enviado);
    
  } catch (error) {
    console.log("Error:", error);
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3); 
hacerReserva("Sofia López", 4); 
hacerReserva("Luis Gutierrez", 2); 