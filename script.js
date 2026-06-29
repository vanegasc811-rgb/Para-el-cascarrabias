/*==========================================
    PROYECTO LUNA
==========================================*/

const envelope = document.querySelector(".envelope");

let opened = false;

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened=true;

    envelope.classList.add("open");

});