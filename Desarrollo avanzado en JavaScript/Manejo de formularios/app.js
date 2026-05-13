document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      // Valida minimo de caracteres en nombre
      if(nombre.length < 2) {
        alert('El nombre debe tener al menos 2 caracteres.');
        return;
      }

      // Valida numero de telefono
      const telefonoRegex = /^[0-9]{10}$/;
      if(!telefonoRegex.test(telefono)){
        alert('El teléfono debe tener 10 dígitos y solo números.');
        return;
      }

      // Valida fecha no pasada
      const hoy = new Date().toISOString().split('T')[0];
      if(fecha < hoy){
        alert('La fecha no puede ser anterior a hoy.');
        return;
      }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });