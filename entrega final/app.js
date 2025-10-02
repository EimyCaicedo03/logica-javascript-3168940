// 1. Cambiar color de fondo de introducción
function cambiarColor() {
  document.getElementById("intro").style.background = "#ffe4c4";
}

// 2. Agregar un nuevo capítulo dinámicamente
function agregarCapitulo() {
  let nuevo = document.createElement("li");
  nuevo.textContent = "Capítulo extra: Conexión con el presente.";
  document.getElementById("listaCapitulos").appendChild(nuevo);
}

// 3. Mostrar/Ocultar sección de creadores
function mostrarOcultar() {
  let info = document.getElementById("infoCreadores");
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}

// 4. Validar formulario de contacto
function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;
  let exito = document.getElementById("mensajeExito");

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  exito.textContent = " Mensaje enviado con éxito.";
  exito.style.color = "green";
  return false; // Para que no recargue la página
}

// 5. Botón volver arriba
function volverArriba() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
