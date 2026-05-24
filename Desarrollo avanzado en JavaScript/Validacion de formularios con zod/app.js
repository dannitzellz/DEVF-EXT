// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
    name: z.string().trim().min(1, 'El nombre no puede estar vacio'),
    email: z.string().email("Correo inválido"),
    password: z.string().min(6, 'La contraseña no puede tener menos de 6 caracteres')

});

const errorMessage = document.getElementById("errors");

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Capturamos los valores ingresados
    const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    };

    const result = registerSchema.safeParse(formData);

    if(result.success){
        alert("Registro exitoso");
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    }else{
        errorMessage.textContent = result.error.errors.map(e => e.message).join(", ");
        errorMessage.style.display = "block";
    }
});