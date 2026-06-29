/*==========================================
    PROYECTO LUNA
==========================================*/

const envelope = document.querySelector(".envelope");
const cover = document.getElementById("cover");
const letter = document.getElementById("letter");

let opened = false;

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened=true;

    envelope.classList.add("open");
setTimeout(() => {

    cover.style.display = "none";

    letter.classList.add("show");

}, 1400);
});