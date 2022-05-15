/*****Variablen: Deklaration und Initialisierung******/
var activeIndex: string;
var sounds: HTMLAudioElement[] = 
[
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
var sampleBeat:number[] = [2, 2, 2, 1, 0, 0, 1, 2, 2, 2];
/***Setup und Verteilen der EventListener*************/
const pads = document.querySelectorAll(".pad");
for (let i = 0; i < pads.length; i++)
{
   pads[i].addEventListener("click", playSample);
}
document.querySelector("body").addEventListener("keypress", playSamplebyKeys);
document.querySelector(".playbutton").addEventListener("click", repeatBeats);

/***********Funktionen***************** */
function playSample()
{
    activeIndex = document.querySelector(".pad:hover").getAttribute("id");
    sounds[activeIndex].play();
}
function playSamplebyKeys(beat)
{
    if(checkPressedKey(beat.key) == true)
    {
    activeIndex = String((beat.key) - 1);
    sounds[activeIndex].play();
    }
    else
    {
        return;
    }
}

function repeatBeats()
{
    setInterval(playBeats, 500);
}
function playBeats()
{
    for( let i = 0; i < sampleBeat.length; i++)
        {
            sounds[sampleBeat[i]].play();
        }
}
function checkPressedKey(test)
{
    for(let i = 1; i < 10; i++)
    {
        if ( test == i )
        {
            console.log(i);
            return true;
        }
    }
    console.log("Wrong key");
    return false;
}
