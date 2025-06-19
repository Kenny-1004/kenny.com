let yes = 1;

function increment() {

    yes += 4;
    const yesbtn = document.getElementById("yesButton");
    yesbtn.style.scale = yes;

const h1 = document.getElementById("increment-btn");
const maxX = window.innerWidth - 100; 
const maxY = window.innerHeight - 100;
const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

h1.style.left = `${randomX}px`;
h1.style.top = `${randomY}px`;
}


function bigger() {
    window.location.href = "yes.html";
}


