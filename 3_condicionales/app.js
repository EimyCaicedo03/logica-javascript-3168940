//ejemplo 1
// Solicita nombre y edad al usuario
let nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuál es tu edad?"));

// Verifica condiciones de entrada
if (edad >= 18) {
    alert("Puedes ingresar a la discoteca.");
} else {
    alert("No puedes ingresar a la discoteca.");
}

// Verifica acceso VIP
if (nombre.toLowerCase() === "mario" || nombre.toLowerCase() === "carlos") {
    alert("¡Tienes acceso VIP!");
}


//ejmplo 2
// Solicita estatura, velocidad y edad
let estatura = parseFloat(prompt("¿Cuál es tu estatura en metros? (Ej: 1.70)"));
let velocidad = parseFloat(prompt("¿Cuál es tu velocidad en segundos en 100m? (Ej: 12.5)"));
let años = parseInt(prompt("¿Cuantos años tiene?"));

// Verifica si puede ingresar al equipo
if (estatura >= 170 && velocidad >= 27) {
    alert("Puedes ingresar al equipo.");

 // Clasificación por edad
    if (edad < 18) {
        alert("Irás a las divisiones menores.");
    } else {
        alert("Irás al equipo profesional.");
    }
} else {
    alert("No cumples con los requisitos para ingresar al equipo.");
}
