let nota = Number(prompt("Ingrese la nota del estudiante"));


if(nota >= 0 && nota <= 100){
    console.log("La nota del estudiante es: " + nota);
    document.write("La nota del estudiante es: " + nota + "<br>");

    if (nota >= 90) {
        console.log("Aprobado, Excelente");
        document.write("Aprobado, Excelente");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Aprobado, Bien");
        document.write("Aprobado, Bien");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Aprobado, Suficiente");
        document.write("Aprobado, Suficiente");
    } else {
        console.log("No aprueba :(");
        document.write("No aprueba :(");
    }
} else {
  console.log("La nota ingresada no es válida.");
  alert("La nota ingresada no es válida.");
}