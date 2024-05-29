const text = document.getElementById("text");
const letters = ['r','o','t','l','x',7];
const lettersToGenerate = 100000;

window.addEventListener("load",() => {
    let rand;
    for(let i=0; i<lettersToGenerate; i++) {
        rand = Math.floor(Math.random()*letters.length);
        text.textContent += letters[rand];
    }
});