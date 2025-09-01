
function mostrarNombre() {
  const nombre = document.getElementById("input").value;
  const resultado = document.getElementById("resultado");

  if (nombre.trim() === "") {
    resultado.textContent = "Por favor, escribe tu nombre.";
  } else {
    resultado.textContent = "Hola, " + nombre + " 👋";
  }
}

var lista = []; //Variable Global


function InsertarLista() {
  var valorAleatorio = Math.floor(Math.random() * 10);
  const resultado = document.getElementById("resultado");

  lista.push(valorAleatorio);

  const nuevoBoton = document.createElement("button");
  nuevoBoton.classList.add("boton-lista");
  nuevoBoton.textContent = valorAleatorio;

  resultado.appendChild(nuevoBoton);

  setTimeout(() => {
    nuevoBoton.classList.add("visible");
  }, 10);
  console.log(lista.toString())
}

// lista = [8,10,6,7,8,10,10,5,...]
function EliminarElementoLista() {
  //El valor del elemento (pedir el input al usuario)
  const input = Number(document.getElementById("input").value);
  //El elemento esta incluido en la lista?
  console.log("Input del usuario: ", input)
  while (lista.includes(input)) {
    console.log("El input esta incluido en la Lista")
    var pos = lista.indexOf(input);
    console.log("Input en la posición: ", pos)
    lista.splice(pos, 1);
    console.log("Input eliminado ------------ :", input)
  }
  console.log("Lista actualizada !!!")
  console.log(lista.toString())
}



// lista = [8,10,6,7,8,10,10,5,...]
/*
ListaObjetoValentina = [
  {nombre: "Juan Medina", edad: 20, correo: "jmedina@ucb.edu.bo", carrera: "MEDICINA", telefono: "+591 98789451"},
  {nombre: "Marco Lopex", edad: 21, correo: "mlopex@ucb.edu.bo", carrera: "DERECHO",  telefono: "+591 62189451"},
...
10 REGISTROS
]
*/


ListaObjetoValentina = [
  {nombre: "Juan Medina", edad: 20, correo: "jmedina@ucb.edu.bo", carrera: "MEDICINA", telefono: "+591 98789451"},
  {nombre: "Marco Lopex", edad: 21, correo: "mlopex@ucb.edu.bo", carrera: "DERECHO",  telefono: "+591 62189451"}
]
