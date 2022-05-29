namespace Aufgabe09 //Namespace definiert
{
/*****Variablen und Konstanten: Deklaration und Initialisierung******/
/*****************************************************/
let activeIndex: number; //AktiverIndex zum Abspielen der Sounds
let playbackID: number; //vorbereitet zur Übergabe der PlaybackID von setInterval()
let statePlayBeats: boolean = false; //Status des Playbacks des vrobereiteten Beats
let stateRecording: boolean = false; //Status der Aufnahme
let remixButtonRotation: number = 360; //Rotationswert für die Animation des Remix-Buttons
/*Array der Sounddateien*/
const sounds: HTMLAudioElement[] = 
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
/*Reihenfolge des wiederholenden Beats*/
//Indizes des Arrays sounds[] in beats[] gespeichert
var beats: number[] = [0, 1, 2, 1]; //werden später als aktiver Index übergeben

/*******************Setup und Verteilen der EventListener*************/
/*********************************************************************/
const pads = document.querySelectorAll(".pad"); //Übergibt Array aller Pads im document
for (let i = 0; i < pads.length; i++)
{ //Schleife durchläuft Array und hängt an jedes Element einen EventListener
   pads[i].addEventListener("click", padClicked);
}
/*EventListener am gesamten Dokument --> horcht auf Tastendruck*/
document.addEventListener("keypress", keyPressed);
/*EventListener am mainButton (Play/Stop)--> horcht auf klick*/
document.querySelector("#buttonMain").addEventListener("click", mainButtonPressed);
/*EventListener für Aufnahme-Button*/
document.querySelector("#buttonRecord").addEventListener("click", toogleRecording);
/*EventListener für Remix-Button */
document.querySelector("#buttonRemix").addEventListener("click", doRemix);

/********************************Funktionen***************************************/
/*********************************************************************************/
/*Abspielfunktion*/
function mainPlay(activeIndex)
{
    sounds[activeIndex].play(); /*Spiele die Sounddatei des aktiven Index im Array sounds[] ab*/

}

/*Pad clicked*/
function padClicked()
{
    //Übergib id des gehoverten Pads als Integer in activeIndex
    activeIndex = parseInt(document.querySelector(".pad:hover").getAttribute("id"));
    //Abspielfunktion mit activeIndex
    mainPlay(activeIndex);
    //Ausgabe auf Konsole zur Prüfung der korekten Übergabe der id
    console.log("clicked Pad: " + activeIndex);
    //Abfrage ob Aufgenohmen wird
    checkStateOfRecording();
}

/*Taste gedrückt*/
function keyPressed(beat)
{
    //Prüfung ob die korrekte Taste gedrückt wurde (0 bis 9)
    if(checkPressedKey(beat.key) == true)
    {
        //Wert der gedrückten Taste - 1 an activeIndex
        activeIndex = (beat.key) - 1;
        //Abspielfunktion mit activeIndex
        mainPlay(activeIndex);
        //Abfrage ob Aufgenohmen wird
        checkStateOfRecording();
    }
    else
    {
        //Wenn NICHT die richtige Taste gedrückt wurde --> Spring aus der Funktion heraus
        return;
    }
}

/*Prüfung ob richtige Taste gedrückt wurde*/
function checkPressedKey(activeKey)
{
    //durchläuft zahlen 0 bis 9 und prüft ob Inhalt der gedrückten Taste = i
    for(let i = 1; i < 10; i++)
    {
        if ( activeKey == i )
        {
            //Ausgabe:Konsole zur Prüfung
            console.log("Pressed key: " + i);
            //Beende Funtkion und gib true zurück
            return true;
        }
    }
    //Ausgabe:Konsole wenn falsche Taste gedrückt wurde
    console.log("Wrong key");
    //Beende Funtkion und gib false zurück
    return false;
}
/*Abspielbutton gedrückt*/
function mainButtonPressed()
{   
    //Prüfe den Status des Playbacks
    if(statePlayBeats == false)
    {
        //wechselt Play-Button zu Pause Button
        document.getElementById("buttonMain").classList.remove("fa-play");
        document.getElementById("buttonMain").classList.add("fa-pause");
        //Ändert Status des Playbacks zu wahr
        statePlayBeats = true;
        //wiederhole playBeats zeitabhängig davon wie lang das array beats[] ist
        //Notwendig, da array beats[] durch remix in länge variieren kann
        playbackID = setInterval(playBeats, beats.length * 250);
        //Ausgabe: Konsole zur Prüfung
        console.log("Status Playback: " + statePlayBeats);
        console.log("PlaybackID: " + playbackID);
    }
    else
    {
        //wechselt Pause-Button zu Play-Button
        document.getElementById("buttonMain").classList.remove("fa-pause");
        document.getElementById("buttonMain").classList.add("fa-play");
        //Ändert Status des Playbacks zu falsch
        statePlayBeats = false; 
        //Stoppe setInterval() mit PlaybackID
        clearInterval(playbackID);
    }

}
/*Generierung des Beats auf Grundlage von Array beats[]*/
function playBeats()
{   
    //Ausgabe:Konsole zur Prüfung
    console.log("playBeats active");
    //Schleife durchläuft beats[] und gibt für jeden Wert in beats den enstprechenden Sound in sounds[] zeitverzögert aus
    for(let i = 0; i < beats.length; i++ )
    {
        //Rufe mainPlay mit inhalt von beats[i] als activeIndex auf
        //verzögere das Abspielen des sounds um 0,25 sekunden mehr für jeden abgespieltens sound
        //Dadurch wird sichergestellt, dass die Sounds nacheinander abgespielt werden
         setTimeout(function() { mainPlay(beats[i]); }, i * 250 );
    }
}
/*Leere Array beats und fülle es random neu*/
function doRemix()
{
    //rotiere den Remix Button um den wert von remixButtonRotation (360)
    document.getElementById("buttonRemix").style.transform = `rotate(${remixButtonRotation}deg)`;
    //erhöhe den Wert um 360 (notwendig damit sich der button auch bei mehrmaligem Klicken immer dreht)
    remixButtonRotation += 360;
    //Leere array beats[]
    beats.length = 0;
    //erstelle eine zufällige Länge für die Erstelung des neuen Beats
    let randomlength = getRandomNumberBetween(3, 8);
    //Durchläuft Schleife für randomlength und füllt dabei das array beats[] zufällig
    for(let j = 0; j <= randomlength; j++)
    {
        //hängt in jedem Durchlauf eine zufällige Zahl zwischen 0 und 2 an dass Ende des Array beats[]
        beats.push(getRandomNumberBetween(0, 2));
    }
    //Ausgabe:Konsole zur Prüfung
    console.log("Neuer Beat im Array beats[]: " + beats);
}
/*Funktion um die Aufnahme zu starten bzw. zu beenden*/
function toogleRecording()
{
    //Prüfe den aktuellen Status der Aufnahme
    if(stateRecording == false)
    {
        //Leere array beats[]
        beats.length = 0;
        //ändere die Farbe des Aufnahmebuttons zu grün (aktiv)
        document.getElementById("buttonRecord").style.color = "#00ff00";
        //setze Status der aufnahme auf wahr
        stateRecording = true;
        //Ausgabe:Konsole zur Prüfung
        console.log("Status Aufnahme: " + stateRecording);
    }
    else
    {
        //ändere die Farbe des Aufnahmebuttons zu weiß (inaktiv)
        document.getElementById("buttonRecord").style.color = "#ffffff";
        //setze Status der aufnahme auf unwahr
        stateRecording = false; 
        //Ausgabe:Konsole zur Prüfung
        console.log("Status Aufnahme: " + stateRecording);
    }
}
/*Prüfe den Status der Aufnahme*/
function checkStateOfRecording()
{
    if(stateRecording == true)
        {
            //Schiebe den aktiven Index ans Ende des Array beats[]
            beats.push(activeIndex);
            //Ausgabe:Konsole zur Prüfung
            console.log("Inhalt Array beats" + beats);
        }
}

/*Generiere Random nummer zwischen min und max*/
function getRandomNumberBetween(min,max)
{
    return Math.floor(Math.random()*(max - min + 1) + min);
}
}