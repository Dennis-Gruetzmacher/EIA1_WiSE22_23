var Aufgabe09;
(function (Aufgabe09) {
    /*****Variablen: Deklaration und Initialisierung******/
    let activeIndex;
    let playbackID;
    let statePlayBeats = false;
    let stateRecording = false;
    let remixButtonRotation = 360;
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
    /*Reihenfolge des wiederholenden Beats*/
    var beats = [0, 1, 2, 1];
    /***Setup und Verteilen der EventListener*************/
    const pads = document.querySelectorAll(".pad"); /*Übergibt Array aller Pads im document */
    for (let i = 0; i < pads.length; i++) { /*Schleife durchläuft Array und hängt an jedes element einen EventListener*/
        pads[i].addEventListener("click", padClicked);
    }
    /*EventListener am gesamten Dokument --> horcht auf Tastendruck*/
    document.addEventListener("keypress", keyPressed);
    /*EventListener am mainButton (Play/Stop)--> horcht auf klick*/
    document.querySelector("#buttonMain").addEventListener("click", mainButtonPressed);
    document.querySelector("#buttonRecord").addEventListener("click", toogleRecording);
    document.querySelector("#buttonRemix").addEventListener("click", doRemix);
    /***********Funktionen******************/
    /*Abspielfunktion*/
    function mainPlay(activeIndex) {
        sounds[activeIndex].play(); /*Spiele die Sounddatei des aktiven Index im Array sounds[] ab*/
    }
    /*Pad clicked*/
    function padClicked() {
        activeIndex = parseInt(document.querySelector(".pad:hover").getAttribute("id"));
        mainPlay(activeIndex);
        console.log("clicked Pad: " + activeIndex);
        if (stateRecording == true) {
            beats.push(activeIndex);
            console.log("Inhalt Array beats[]" + beats);
        }
    }
    /*Taste gedrückt*/
    function keyPressed(beat) {
        if (checkPressedKey(beat.key) == true) {
            activeIndex = (beat.key) - 1;
            mainPlay(activeIndex);
            if (stateRecording == true) {
                beats.push(activeIndex);
                console.log(beats);
            }
        }
        else {
            return;
        }
    }
    /*Prüfung ob richtige Taste gedrückt wurde*/
    function checkPressedKey(activeKey) {
        for (let i = 1; i < 10; i++) {
            if (activeKey == i) {
                console.log("Pressed key: " + i);
                return true;
            }
        }
        console.log("Wrong key");
        return false;
    }
    /*Abspielbutton gedrückt*/
    function mainButtonPressed() {
        if (statePlayBeats == false) {
            document.getElementById("buttonMain").classList.remove("fa-play");
            document.getElementById("buttonMain").classList.add("fa-pause");
            statePlayBeats = true;
            playbackID = setInterval(playBeats, beats.length * 250);
            console.log("Status Playback: " + statePlayBeats);
            console.log("PlaybackID: " + playbackID);
        }
        else {
            document.getElementById("buttonMain").classList.remove("fa-pause");
            document.getElementById("buttonMain").classList.add("fa-play");
            statePlayBeats = false;
            clearInterval(playbackID);
        }
    }
    /*Generierung des Beats auf GRundlage von Array beats[]*/
    function playBeats() {
        console.log("playBeats active");
        for (let i = 0; i < beats.length; i++) {
            setTimeout(function () { mainPlay(beats[i]); }, i * 250);
        }
    }
    /*Leere Array beats und fülle es random neu*/
    function doRemix() {
        document.getElementById("buttonRemix").style.transform = `rotate(${remixButtonRotation}deg)`;
        remixButtonRotation += 360;
        beats.length = 0;
        let randomlength = getRandomNumberBetween(3, 8);
        for (let j = 0; j < randomlength; j++) {
            beats.push(getRandomNumberBetween(0, 2));
        }
        console.log("Neuer Beat im Array beats[]: " + beats);
    }
    function toogleRecording() {
        if (stateRecording == false) {
            beats.length = 0;
            document.getElementById("buttonRecord").style.color = "#00ff00";
            stateRecording = true;
            console.log("Status Aufnahme: " + stateRecording);
        }
        else {
            document.getElementById("buttonRecord").style.color = "#ffffff";
            stateRecording = false;
            console.log("Status Aufnahme: " + stateRecording);
        }
    }
    /*Generiere Random nummer zwischen min und max*/
    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script_drumpad.js.map