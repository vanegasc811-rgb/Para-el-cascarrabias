/* ==========================================
   PROYECTO LUNA
   JavaScript principal
========================================== */

// Elementos
const envelope = document.querySelector(".envelope");
const flap = document.querySelector(".envelope-flap");
const seal = document.querySelector(".seal");

// Estados
let opened = false;

// Eventos
envelope.addEventListener("click", openEnvelope);

// Función principal
function openEnvelope() {

    if (opened) return;

    opened = true;

    console.log("Proyecto Luna comenzó ❤️");

}
