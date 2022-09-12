const comprarTicketX10 = document.getElementById("comprarTicketX10");
const comprarTicketX20 = document.getElementById("comprarTicketX20");

const botonElegirGanador = document.getElementById("botonElegirGanador");
const nombreGanador = document.getElementById("nombreGanador");
const añadido = document.getElementById("añadido");
const resetear = document.getElementById("resetear");

let participantes = [];
let monto = 0;

comprarTicketX10.addEventListener("click", inscribirParticipanteX10);
comprarTicketX20.addEventListener("click", inscribirParticipanteX20);
botonElegirGanador.addEventListener("click", elegirGanador);
resetear.addEventListener("click", resetearLoteria);

function inscribirParticipanteX10(event) {
  event.preventDefault();

  if (participantes.length == 100) alert("La cantidad máxima es 100 participantes");
  else {

    let participante = document.getElementById("participante").value;
    participante = participante.toUpperCase();
    // Lo ponemos todo en mayuscula para que no escriban el mismo nombre alternando en minúsculas y mayúsculas

    if (participante === "") alert("¿Quién está comprando el ticket?"); // si no ponen nada
    else if (!isNaN(parseInt(participante))) alert("Poné un nombre válido"); // si ponen un numero
    else if (participantes.includes(participante)) alert("Esa persona ya está inscripta");
    else {
      participantes.push(participante);

      añadido.innerHTML = "¡Añadido con éxito!".toUpperCase();

      setTimeout(() => {
        añadido.innerHTML = "";
      }, 1000);

      monto += 10;

      console.log(participantes);
    }
  }
}


function inscribirParticipanteX20(event) {
  event.preventDefault();

  if (participantes.length == 100) alert("La cantidad máxima es 100 participantes");
  else if (participantes.length == 99) alert("No puedo inscribir a más personas por $20");
  else {
    let participante = document.getElementById("participante").value;
    participante = participante.toUpperCase();

    if (participante === "") alert("¿Quién está comprando el ticket?");
    else if (!isNaN(parseInt(participante))) alert("Poné un nombre válido");
    else if (participantes.includes(participante)) alert("Esa persona ya está inscripta");

    else {
      for (i = 0; i < 2; i++) {
        participantes.push(participante);
      }

      añadido.innerHTML = "¡Añadido con éxito!".toUpperCase();

      setTimeout(() => {
        añadido.innerHTML = "";
      }, 1000);

      monto += 20;

      console.log(participantes);
    }
  }
}

function elegirGanador() {
  nombreGanador.innerHTML = "";
  // esto es por si eligen otro ganador mas sin haber reseteado la loteria

  if (participantes.length == 0) alert("No hay ningún participante");
  else {
    felicitacion.innerHTML = `El ganador es...`;
    let numeroRandom = Math.floor((Math.random() * participantes.length));

    // Esto es por si nos toca un número rándom mayor que la cantidad de participantes
    while (numeroRandom > participantes.length - 1) {
      numeroRandom = parseInt(Math.random() * 100);
    }

    for (i in participantes) {

      // Como el índice en el array es una string, lo comparo con el numero random con == y no con ===
      if (i == numeroRandom) {
        let ganador = participantes[i];

        setTimeout(() => {
          nombreGanador.innerHTML = `¡${ganador}!`;
          felicitacion.innerHTML = `¡FELICIDADES ${ganador}! ¡GANASTE ${monto} DÓLARES!`;
        }, 3000);

        console.log(
          `El ganador de ${monto} dólares es ${ganador}. ¡Felicidades ${participantes[i]}!`
        );
      }
    }
  }
}

function resetearLoteria() {
  console.clear();
  participantes = [];
  monto = 0;
  nombreGanador.innerHTML = "";
  felicitacion.innerHTML = "";
}
