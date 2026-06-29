/*==========================================
    PROYECTO LUNA
==========================================*/

const envelope = document.querySelector(".envelope");
const cover = document.getElementById("cover");
const letter = document.getElementById("letter");
const nextMemory = document.getElementById("nextMemory");
const timeline = document.getElementById("timeline");
const music = document.getElementById("bgMusic");
let opened = false;

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened=true;

    envelope.classList.add("open");
setTimeout(() => {

    cover.style.display = "none";

    letter.classList.add("show");
music.play().catch(()=>{});
}, 1400);
});const memory = document.querySelector(".memory");

window.addEventListener("scroll", () => {

    const top = memory.getBoundingClientRect().top;

    if(top < window.innerHeight - 120){

        memory.classList.add("show");

    }

});nextMemory.addEventListener("click", ()=>{

    timeline.classList.add("show");

    nextMemory.style.display="none";

});const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

});

photos.forEach(photo=>observer.observe(photo));