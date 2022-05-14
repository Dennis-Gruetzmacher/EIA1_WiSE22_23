/*****Variablen: Deklaration und Initialisierung******/
var activeIndex;
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
var sampleBeat = [2, 2, 2, 1, 0, 0, 1, 2, 2, 2];
/***Setup und VErteilen der EventListener*************/
const pads = document.querySelectorAll(".pad");
for (let i = 0; i < pads.length; i++) {
    pads[i].addEventListener("click", playSample);
}
document.querySelector("body").addEventListener("keypress", playSamplebyKeyes);
document.querySelector(".playbutton").addEventListener("click", playBeats);
/***********Funktionen***************** */
function playSample() {
    activeIndex = document.querySelector(".pad:hover").getAttribute("id");
    sounds[activeIndex].play();
}
function playSamplebyKeyes(beat) {
    activeIndex = String((beat.key) - 1);
    sounds[activeIndex].play();
}
function repeatBeats() {
    setInterval(playBeats, 500);
}
function playBeats() {
    for (let i = 0; i < sampleBeat.length; i++) {
        sounds[sampleBeat[i]].play();
    }
}
//# sourceMappingURL=script_drumpad.js.map