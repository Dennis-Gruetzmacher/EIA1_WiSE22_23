"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    /*****Variablen: Deklaration und Initialisierung******/
    /*Variable vorbereitet für die Übergabe des aktiven Index für die Abspielfunktionen*/
    var activeIndex;
    /*Variable vorbereitet für die Id der setInterval Funktion später*/
    var playbackID = 0;
    /*Array gefüllt mit allen vorbereiteten Audio-Elementen */
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
    /*Array der Indizes der im array sounds[] liegenden Audio-Elemente für den wiederholenden Beat
    hihat, kick,snare*/
    const beats = [0, 1, 2, 0];
    /*******Setup und Verteilen der EventListener*************/
    const pads = document.querySelectorAll(".pad"); /*Übergibt Array aller Elemente mit Klasse "pad" im document */
    for (let i = 0; i < pads.length; i++) { /*Schleife durchläuft Array und hängt an jedes element "".pad" einen EventListener*/
        pads[i].addEventListener("click", playSample);
    }
    /*EventListener an den "Body" des dokuments hängen --> horcht auf Tasten */
    document.addEventListener("keydown", playSamplebyKeys);
    /*EventListener an den Play-Button hängen --> horcht auf klick*/
    document.querySelector(".playbutton").addEventListener("click", repeatBeats);
    /***********Funktionen******************/
    /*Hauptfunktion: Übergit ID des gecklickten Elements und spielt entsprechende Stelle im Array sounds[] ab */
    function playSample() {
        activeIndex = document.querySelector(".pad:hover").getAttribute("id"); /*übergibt aktiven Index des gehoverten Elements */
        sounds[activeIndex].play(); /*Spiele die Sounddatei des aktiven Index ab*/
    }
    /*Funktion welche nach Tastendruck einen Ton abspielt */
    function playSamplebyKeys(pressed) {
        /*Prüft ob die richtige Taste (0 - 9) gedrückt wurde */
        if (checkPressedKey(pressed.key) == true) {
            /*gedrückte taste -1 = activeIndex ... siehe ID im html */
            activeIndex = String((pressed.key) - 1);
            sounds[activeIndex].play();
        }
        else {
            return;
        }
    }
    /*repeatBeats wiederholt die Funktion playBeats jede Sekunde ins unendliche */
    function repeatBeats() {
        clearInterval(playbackID); /*stoppe einen eventuell bereits bestehenden Interval
                                    --> verhindert das die beats mehrfach gleichzeitig abgespielt werden. */
        playbackID = setInterval(playBeats, 1000); /*führe playBeats jede Sekunde aus, speichere die Interval ID in playbackID */
    }
    /*playBeats durchläuft das Array beats[], holt sich die Indizes für Array sounds[] und spielt die
    entsprechende Audiodatei mit Zeitversetzung über setTimeout ab */
    function playBeats() {
        for (let i = 0; i < 4; i++) {
            setTimeout(function () { sounds[beats[i]].play(); }, i * 250);
        }
    }
    /*Funktion checkPressedKey prüft ob die gedrückte Taste zwischen 1 und 9 liegt und übergibt entsprechend
    "true" oder "false" */
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