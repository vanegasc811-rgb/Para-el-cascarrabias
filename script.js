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

photos.forEach(photo=>observer.observe(photo));const birthday = new Date("2026-07-08T00:00:00");
const countText = document.getElementById("countText");

function updateCountdown(){

    const now = new Date();

    const diff = birthday - now;

    if(diff <= 0){

        countText.innerHTML =
        "🎉 ¡Feliz cumpleaños, mi amor! Hoy por fin llegó el día que llevaba tanto tiempo esperando ❤️";

        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));

    countText.innerHTML =
    `Faltan <strong>${days}</strong> días para celebrar contigo. 🌙`;
}

updateCountdown();const gift = document.getElementById("gift");

const finalContent = document.getElementById("finalContent");

const playAudio = document.getElementById("playAudio");

const voice = new Audio("musica/mensaje.mp3");

gift.addEventListener("click",()=>{

    gift.style.display="none";

    document.querySelector(".gift-text").style.display="none";

    document.querySelector(".final-title").style.display="none";

    document.querySelector(".final-text").style.display="none";

    finalContent.style.display="block";

});

playAudio.addEventListener("click",()=>{

    voice.play();

});const openGift = document.getElementById("openGift");
const surprise = document.getElementById("surprise");

const cinematic = document.getElementById("cinematicIntro");
const cinematicText = document.getElementById("cinematicText");

gift.addEventListener("click",()=>{

    gift.style.transform="scale(1.5)";
    gift.style.opacity="0";

    setTimeout(()=>{

        gift.style.display="none";

        document.querySelector(".gift-text").style.display="none";

        document.querySelector(".final-title").style.display="none";

        document.querySelector(".final-text").style.display="none";

        finalContent.style.display="block";

    },900);

});

    cinematic.style.display="flex";

    cinematicText.innerHTML="Si has llegado hasta aquí...";

    setTimeout(()=>{

        cinematicText.style.opacity=1;

    },300);

    setTimeout(()=>{

        cinematicText.style.opacity=0;

    },2500);

    setTimeout(()=>{

        cinematicText.innerHTML="Es porque quería regalarte algo más que palabras.";

        cinematicText.style.opacity=1;

    },3500);

    setTimeout(()=>{

        cinematicText.style.opacity=0;

    },6500);

    setTimeout(()=>{

        cinematic.style.display="none";

        surprise.scrollIntoView({

            behavior:"smooth"

        });

    },7600);