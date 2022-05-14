/*****Variablen: Deklaration und Initialisierung******/
var sounds = [
    new Audio("assets/hihat.mp3"),
    new Audio("assets/kick.mp3"),
    new Audio("assets/snare.mp3"),
    new Audio("assets/A.mp3"),
    new Audio("assets/C.mp3"),
    new Audio("assets/F.mp3"),
    new Audio("assets/G.mp3"),
    new Audio("assets/laugh-1.mp3"),
    new Audio("assets/laugh-2.mp3")
];
/***Setup und VErteilen der EventListener*************/
const pads = document.querySelectorAll(".pad");
for (let i = 0; i < pads.length; i++) {
    pads[i].addEventListener("click", playSample);
}
document.querySelector(".playbutton").addEventListener("click", playSample);
/***********Funktionen***************** */
function playSample() {
    let activeIndex = document.querySelector(".pad:hover").getAttribute("id");
    sounds[activeIndex].play();
}
//# sourceMappingURL=script_drumpad.js.map