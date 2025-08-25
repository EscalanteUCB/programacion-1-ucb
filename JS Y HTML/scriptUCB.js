
function mostrarNombre() {
  const nombre = document.getElementById("nombres").value;
  const resultado = document.getElementById("resultado");

  if (nombre.trim() === "") {
    resultado.textContent = "Por favor, escribe tu nombre.";
  } else {
    resultado.textContent = "Hola, " + nombre + " 👋";
  }
}

var lista = [];
function InsertarLista() {
  //const nombre = document.getElementById("nombres").value;
  var valorAleatorio = Math.floor(Math.random() * 10);
  const resultado = document.getElementById("resultado");

  lista.push(valorAleatorio);

  // Crear nuevo botón
  const nuevoBoton = document.createElement("button");
  nuevoBoton.classList.add("boton-lista");
  nuevoBoton.textContent = valorAleatorio;

  // Agregar al contenedor
  resultado.appendChild(nuevoBoton);

  // Forzar animación CSS con un pequeño retraso
  setTimeout(() => {
    nuevoBoton.classList.add("visible");
  }, 10);
}

function EliminarLista(){
  //El valor del elemento (pedir el input al usuario)
  //Eliminar el elemento y si hay repetidos igual eliminarlos
  //actualizar la lista
}

