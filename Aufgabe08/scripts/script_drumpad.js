var Aufgabe08;
(function (Aufgabe08) {
    /*****Variablen: Deklaration und Initialisierung******/
    /*Variable vorbereitet für die Übergabe des aktiven Index für die Abspielfunktionen*/
    var activeIndex;
    /*Variable vorbereitet für die Id der setInterval Funktion später */
    var playbackID = 0;
    /*Array gefüllt mit allen Audio-Elementen */
    const sounds = [
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
    /*Array der Audio-Elemente für den wiederholenden Beat*/
    const beats = [
        new Audio("assets/hihat.mp3"),
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/kick.mp3")
    ];
    /*******Setup und Verteilen der EventListener*************/
    const pads = document.querySelectorAll(".pad"); /*Übergibt Array aller Elemente mit Klasse "pad" im document */
    for (let i = 0; i < pads.length; i++) { /*Schleife durchläuft Array und hängt an jedes element einen EventListener*/
        pads[i].addEventListener("click", playSample);
    }
    /*EventListener an den "Body" des dokuments hängen --> horcht auf Tasten */
    document.addEventListener("keydown", playSamplebyKeys);
    /*EventListener an den Play-Button hängen*/
    document.querySelector(".playbutton").addEventListener("click", repeatBeats);
    /***********Funktionen******************/
    /*Hauptfunktion: Übergit ID des gecklickten Elements und spielt entsprechende Stelle im Array sounds[] ab */
    function playSample() {
        activeIndex = document.querySelector(".pad:hover").getAttribute("id"); /*übergibt aktiven Index des gehoverten Elements */
        sounds[activeIndex].play(); /*Spiele die Sounddatei des aktiven Index ab*/
    }
    /*Funktion welche nach Tastendruck einen Ton abspielt */
    function playSamplebyKeys(pressed) {
        if (checkPressedKey(pressed.key) == true) {
            activeIndex = String((pressed.key) - 1);
            sounds[activeIndex].play();
        }
        else {
            return;
        }
    }
    function repeatBeats() {
        clearInterval(playbackID);
        playbackID = setInterval(playBeats, 1000);
    }
    function playBeats() {
        for (let i = 0; i < 4; i++) {
            setTimeout(function () { beats[i].play(); }, i * 250);
        }
    }
    function checkPressedKey(activeKey) {
        for (let i = 1; i < 10; i++) {
            if (activeKey == i) {
                console.log(i);
                return true;
            }
        }
        console.log("Wrong key");
        return false;
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script_drumpad.js.map