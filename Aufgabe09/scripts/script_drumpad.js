var Aufgabe09;
(function (Aufgabe09) {
    var activeIndex;
    var playbackID = 0;
    var tempo = 100;
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
    const beats = [
        new Audio("assets/hihat.mp3"),
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/kick.mp3")
    ];
    /***Setup und Verteilen der EventListener*************/
    const pads = document.querySelectorAll(".pad"); /*Übergibt Array aller Pads im document */
    for (let i = 0; i < pads.length; i++) { /*Schleife durchläuft Array und hängt an jedes element einen EventListener*/
        pads[i].addEventListener("click", playSample);
    }
    document.querySelector("body").addEventListener("keypress", playSamplebyKeys);
    document.querySelector("#playButton").addEventListener("click", repeatBeats);
    document.querySelector("#stopButton").addEventListener("click", stopBeats);
    document.querySelector("#tempoChangeUp").addEventListener("click", tempoUp);
    document.querySelector("#tempoChangeDown").addEventListener("click", tempoDown);
    /***********Funktionen******************/
    function playSample() {
        activeIndex = document.querySelector(".pad:hover").getAttribute("id"); /*übergibt aktiven Index des gehoverten Elements */
        sounds[activeIndex].play(); /*Spiele die Sounddatei des aktiven Index ab*/
    }
    function playSamplebyKeys(beat) {
        if (checkPressedKey(beat.key) == true) {
            activeIndex = String((beat.key) - 1);
            sounds[activeIndex].play();
        }
        else {
            return;
        }
    }
    function repeatBeats() {
        clearInterval(playbackID);
        playbackID = setInterval(playBeats, tempo);
    }
    function playBeats() {
        setTimeout(function () { beats[1].play(); }, tempo);
        /*  setTimeout(function(){sounds[1].play() }, 250);
          setTimeout(function(){sounds[1].play() }, 500);
          setTimeout(function(){sounds[1].play() }, 750);
          setTimeout(function(){sounds[1].play() }, 1000);
          setTimeout(function(){sounds[2].play() }, 750);*/
    }
    function stopBeats() {
        clearInterval(playbackID);
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
    function tempoUp() {
        console.log("core: " + tempo);
        if (tempo < 2000) {
            tempo += 50;
            console.log("mod: " + tempo);
        }
        else {
            tempo = 1000;
        }
    }
    function tempoDown() {
        console.log("core: " + tempo);
        if (tempo > 0) {
            tempo -= 50;
            console.log("mod: " + tempo);
        }
        else {
            tempo = 1000;
        }
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script_drumpad.js.map