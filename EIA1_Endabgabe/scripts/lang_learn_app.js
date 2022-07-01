/*******************Variablen und Konstanten***********************************/
/*Alle global zugänglichen Variablen werden hier deklariert und initialisiert*/
let globalLanguageString = ""; //String der ausgewählten Sprache
let globalDifficultyString = ""; //Sring der ausgewählten Schwierigkeit
let globalDifficultySize = 0; //Anzahl der zu erledigenden Sätze je nach Schwierigkeit
let globalPoints = 0; //Punktestand
let globalProgress = 0; //Gesamtfortschritt => Abgearbeitete Sätze
let globalCurrentSentenceProgress = 0; //Fortschritt im lösen des aktuellen Satzes
let globalEndGameState = false; //Spiel gewonnen (true) verloren (false)
/*Audioelemente*/
/*Audioelemente einbinden*/
let audioCorrect = new Audio("audio/correct.wav"); //Sound für korrektes Wort
let audioError = new Audio("audio/error.wav"); // Sound für falsches Wort
let audioNextSentence = new Audio("audio/next_sentence.wav"); //Sound für Übergang zum nächsten Satz
let audioApplause = new Audio("audio/applause.wav"); // Sound für Spiel gewonnen
/*Audioelemente set-up: Lautstärke*/
/*Lautstärke auf 30% setzen*/
audioCorrect.volume = 0.3;
audioError.volume = 0.3;
audioNextSentence.volume = 0.3;
audioApplause.volume = 0.3;
/*****Übungssatz-Objekte****************/
let sentence1 = {
    length: 4,
    used: false,
    cleared: false,
    spanish: ["mi", "nombre", "es", "Dennis"],
    ukrainian: ["mene", "zvat", "y", "Dennis"],
    german: ["Mein", "Name", "ist", "Dennis"]
};
let sentence2 = {
    length: 5,
    used: false,
    cleared: false,
    spanish: ["¿dónde", "puedo", "encontrar", "los", "baños?"],
    ukrainian: ["De", "ya", "mozhu", "znayty", "tualety?"],
    german: ["Wo", "finde", "ich", "die", "Toilette?"]
};
let sentence3 = {
    length: 4,
    used: false,
    cleared: false,
    spanish: ["¿Cuán", "to", "cues", "ta?"],
    ukrainian: ["skil'", "ky", "tse", "koshtuye?"],
    german: ["Wie", "viel", "kostet", "das?"]
};
let sentence4 = {
    length: 3,
    used: false,
    cleared: false,
    spanish: ["El", "menú", "por favor"],
    ukrainian: ["Menyu", "budʹ", "laska"],
    german: ["Die", "Speisekarte", "bitte."]
};
let sentence5 = {
    length: 5,
    used: false,
    cleared: false,
    spanish: ["Luke,", "yo", "soy", "tu", "padre"],
    ukrainian: ["Luka,", "ya", "tviy", "bat'", "ko"],
    german: ["Luke,", "ich", "bin", "dein", "Vater."]
};
let sentence6 = {
    length: 5,
    used: false,
    cleared: false,
    spanish: ["Houston", "tene", "mos", "un", "problema"],
    ukrainian: ["KH'", "yuston", "u", "nas'", "problema"],
    german: ["Houston,", "wir", "haben", "ein", "Problem."]
};
let sentence7 = {
    length: 4,
    used: false,
    cleared: false,
    spanish: ["veo", "a", "gente", "meurta"],
    ukrainian: ["ya", "bachu", "mertvykh", "lyudey"],
    german: ["Ich", "sehe", "tote", "Menschen."]
};
let sentence8 = {
    length: 13,
    used: false,
    cleared: false,
    spanish: ["la", "vida", "es como", "una", "caja", "de bombones", "nunca", "sabes", "lo", "que", "te", "va a", "tocar"],
    ukrainian: ["Zhyt", "tya", "yak", "korob", "ka", "tsuk", "erok", "nikoly", "ne", "znayesh", "shcho", "otry", "mayesh"],
    german: ["Das", "Leben", "ist", "wie", "eine", "Schachtel", "Pralinen,", "man", "weiß", "nie", "was", "man", "kriegt."]
};
let sentence9 = {
    length: 5,
    used: false,
    cleared: false,
    spanish: ["¡", "Solo", "puede", "haber", "uno"],
    ukrainian: ["Mozhe", "buty", "til'", "ky", "odyn"],
    german: ["Es", "kann", "nur", "einen", "geben."]
};
let sentence10 = {
    length: 10,
    used: false,
    cleared: false,
    spanish: ["Le", "haré", "un", "a", "oferta", "que", "no", "podrá", "rech", "azar"],
    ukrainian: ["Ya", "zroblyu", "yomu", "propozytsiyu", "vid", "yakoyi", "vin", "ne", "zmozhe", "vidmovytysya"],
    german: ["Ich", "mache", "ihm", "ein", "Angebot,", "dass", "er", "nicht", "ablehnen", "kann."]
};
let sentence11 = {
    length: 6,
    used: false,
    cleared: false,
    spanish: ["¡Que", "la", "fuerza", "esté", "con", "usted"],
    ukrainian: ["Nekhay", "syla", "bude", "z", "to", "boyu"],
    german: ["Möge", "die", "Macht", "mit", "dir", "sein."]
};
let sentence12 = {
    length: 6,
    used: false,
    cleared: false,
    spanish: ["Vamos", "a", "necesitar", "un barco", "más", "grande"],
    ukrainian: ["Nam", "znadobytʹ", "sya", "bilʹ", "shyy", "choven"],
    german: ["Wir", "werden", "ein", "größeres", "Boot", "brauchen."]
};
let sentence13 = {
    length: 4,
    used: false,
    cleared: false,
    spanish: ["espacio", "exterior", "extensiones", "interminables"],
    ukrainian: ["Kosmos", "bez", "krayni", "prostory"],
    german: ["Der", "Weltraum,", "unendliche", "Weiten."]
};
let sentence14 = {
    length: 5,
    used: false,
    cleared: false,
    spanish: ["Un", "anillo", "para", "gobernarlos", "a todos"],
    ukrainian: ["Odne kilʹtse", "shchob", "keruvaty", "nymy", "vsima"],
    german: ["Ein", "Ring,", "sie", "zu", "knechten."]
};
let sentence15 = {
    length: 7,
    used: false,
    cleared: false,
    spanish: ["Hoy", "es", "un", "buen", "día", "para", "morir"],
    ukrainian: ["Sʹ", "ohodni", "khoro", "shyy", "denʹ", "shchob", "pomerty"],
    german: ["Heute", "ist", "ein", "guter", "Tag", "zum", "sterben."]
};
let globalAllSentences = [sentence1, sentence2, sentence3, sentence4, sentence5, sentence6, sentence7, sentence8, sentence9, sentence10, sentence11, sentence12, sentence13, sentence14, sentence15]; //Array aller Satz-Objekte im Spiel
let globalActiveSentences = []; // Array für alle im aktuellen Spiel aktiven Sätze (wird beim füllen zufällig gemischt)
let fakeWord1 = {
    used: false,
    spanish: "perro",
    ukrainian: "pes"
};
let fakeWord2 = {
    used: false,
    spanish: "casa",
    ukrainian: "budynok"
};
let fakeWord3 = {
    used: false,
    spanish: "árbol",
    ukrainian: "derevo"
};
let fakeWord4 = {
    used: false,
    spanish: "gato",
    ukrainian: "kit"
};
let fakeWord5 = {
    used: false,
    spanish: "bicicleta",
    ukrainian: "velosyped"
};
let fakeWord6 = {
    used: false,
    spanish: "avión",
    ukrainian: "litak"
};
let fakeWord7 = {
    used: false,
    spanish: "pájaro",
    ukrainian: "ptakh"
};
let fakeWord8 = {
    used: false,
    spanish: "astronave",
    ukrainian: "kosmichnyy korabelʹ"
};
let globalAllFakeWords = [fakeWord1, fakeWord2, fakeWord3, fakeWord4, fakeWord5]; //Array aller vorhandenen Falschen Worte
let globalActiveFakeWords = []; //Array der im aktiven atz genutzen FalschenWorte (Wird jeden Satz zufällig neu geüllt und danach wieder geleert)
/*Häufig genutzte HTML-Elemente */
let globalGeneralGameArea = document.querySelector(".generalGameArea"); //gesamter Spielbereich
let globalLowerGameArea = document.querySelector(".lowerGameArea"); //Bereich der Fremdworte
let globalCentralGameArea = document.querySelector(".centralGameArea"); //Bereich der korrekt geählten Worte
let globalUpperGameArea = document.querySelector(".upperGameArea"); //Bereich der Deutschen Worte
/*On Load*/
window.addEventListener("load", startUp); //führe beim nach dem Laden der Website die funktion createMenu() aus
/********************************************************************/
/**********************Funktionen************************************/
/********************************************************************/
/*Wird bei jedem Laden der WEbsite aufgerufen, startet das Spiel.
Erzeugt über die Funktion createRollDownMenu() ein neues "Div" und
ruft die Funktion fillStartMenu() zum füllen des Startmenüs auf*/
function startUp() {
    let activeDiv = createRollDownMenu();
    setTimeout(function () {
        fillStartMenu(activeDiv);
    }, 1500);
}
/*Erzegt ein "Div", weist KLasse und ID zu und hängt es an den .mainContainer an.
lässt das neue Div von oben herab über den Bildschirm "wachsen".
Gibt das erzeugte "Div"* zurück.*/
function createRollDownMenu() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("mainDivMenu1");
    newDiv.setAttribute("id", "mainDivMenu");
    let containerDiv = document.querySelector(".mainContainer");
    containerDiv.appendChild(newDiv);
    setTimeout(function () {
        newDiv.style.height = "532px";
    }, 10);
    console.log("Menu div fertig");
    return newDiv;
}
/*Bekommt das Div des StartMenüs übergeben.
Füllt das Div des StartMenüs mit Text und Buttons
*/
function fillStartMenu(mainDivMenu) {
    /*1. Block: Erzeugt den Text zur Sprachwahl*/
    let newDivLangText = document.createElement("div"); //neues Text-Div
    newDivLangText.classList.add("menuDivText"); //Weise Klasse zu
    mainDivMenu.appendChild(newDivLangText); //Hänge Text-Div and das Start Menü Div an
    let newText = document.createTextNode("Wählen Sie bitte eine Sprache..."); //erzeuge Text
    newDivLangText.appendChild(newText); //hänge Text in TExtDiv ein
    newDivLangText.style.opacity = "0"; //Mache Text-Div unsichtbar
    setTimeout(function () {
        newDivLangText.style.opacity = "1"; //mache Text-Div wieder sichtbar
    }, 1);
    /*2. Block: Erzeugt die Buttons zum wählen der Sprache*/
    for (let i = 1; i < 3; i++) //Schleife läuft zwei Mal durch und erzeugt 2 Buttons
     {
        let newDivButton = document.createElement("div"); //neues button-Div
        newDivButton.classList.add("menuButton"); //weise Klasse zu
        newDivButton.setAttribute("id", "LangButton: " + i); //weise ID-Tag zu
        mainDivMenu.appendChild(newDivButton); //Hänge Button-Div and StartMenü Div an
        switch (i) {
            case 1: //Erzeugt Text "Spanisch" und schreibt ihn in den ersten Button-Div
                let newButtonTextSpain = document.createTextNode("Spanisch");
                newDivButton.appendChild(newButtonTextSpain);
                break;
            case 2: //Erzeugt Text "Ukrainisch" und schreibt ihn in den zweiten Button-Div
                let newButtonTextUkraine = document.createTextNode("Ukrainisch");
                newDivButton.appendChild(newButtonTextUkraine);
                break;
        }
        newDivButton.addEventListener("click", setLanguage); //Hänge EventListener an aktuellen Button
        setTimeout(function () {
            newDivButton.style.opacity = "1"; //Mache den Button sichtbar
        }, 1);
    }
    let newDivDiffText = document.createElement("div");
    newDivDiffText.classList.add("menuDivText");
    mainDivMenu.appendChild(newDivDiffText);
    //3. Block: Erzeugt den Text zur Wahl der Schwierigkeit
    let newText2 = document.createTextNode("...und eine Schwierigkeit aus.");
    newDivDiffText.appendChild(newText2);
    newDivDiffText.style.opacity = "0";
    setTimeout(function () {
        newDivDiffText.style.opacity = "1";
    }, 10);
    //4. Block: Erzeugt die 3 Buttons zurWahl der jeweiligen Schwierigkeit
    for (let i = 1; i < 4; i++) {
        let newDivButton = document.createElement("div");
        newDivButton.classList.add("menuButton");
        newDivButton.setAttribute("id", "DiffButton: " + i);
        mainDivMenu.appendChild(newDivButton);
        switch (i) {
            case 1:
                let newButtonDiffEasy = document.createTextNode("Leicht");
                newDivButton.appendChild(newButtonDiffEasy);
                break;
            case 2:
                let newButtonDiffMed = document.createTextNode("Mittel");
                newDivButton.appendChild(newButtonDiffMed);
                break;
            case 3:
                let newButtonDiffHard = document.createTextNode("Schwer");
                newDivButton.appendChild(newButtonDiffHard);
                break;
        }
        newDivButton.addEventListener("click", setDifficulty);
        setTimeout(function () {
            newDivButton.style.opacity = "1";
        }, 10);
    }
}
/*Wird bei Klick auf einen der Sprache Wählen Buttons im Startmenü aufgerufen.
Markiert den Aktiven Sprachbutton durch ändern der Farbe und setzte die variable
globalLanguageString je nach geklicktem Button*/
function setLanguage() {
    let currentButton = document.querySelector(".menuButton:hover");
    for (let i = 1; i < 3; i++) //Setze den Hintergrund aller 2 Sprachwahlbuttons auf default (Wert im CSS)
     { //Notwendig falls jemand erst eine Sprache wählt und sich dann anders entscheidet
        let Button = document.getElementById("LangButton: " + i);
        Button.style.removeProperty("background");
    }
    currentButton.style.background = "#3288ad"; //Setze den Hintergrund des aktiven buttons auf eine andere farbe (aktiv)
    globalLanguageString = currentButton.innerHTML; //setze den Inhalt des aktiven Butons als gewählte Sprache in die globale Sprachvariable
    console.log("Sprache: " + globalLanguageString);
    let activeSpan = document.getElementById("spanLangHeader");
    activeSpan.innerHTML = currentButton.innerHTML; //Schreibe die aktuelle Sprache in den Anzeigebereich im Header
}
/*Prüft ob eine Sprache ausgewählt wurde. Wenn nein passiert nichts, wenn ja wird die globale Schwierigkeit auf den WErt des geklickten
Buttons gesetzt. Dabei wird auch die Poolgröße der Testsätze festgelegt (5,10,15)*/
function setDifficulty() {
    if (globalLanguageString == "") //VErlasse diese Funktion wenn noch keine Sprache gewählt wurde
     {
        return;
    }
    let currentButton = document.querySelector(".menuButton:hover");
    globalDifficultyString = currentButton.innerHTML; //Setzte globale Schwierigkeit dem Inhalt des geklickten Buttons gleich
    console.log("Schwierigkeit: " + globalDifficultyString);
    switch (globalDifficultyString) //Setzte die Poolgröße der Testsätze in abhängigkeit der gewählten Schwierigkeit
     {
        case "Leicht":
            globalDifficultySize = 5;
            break;
        case "Mittel":
            globalDifficultySize = 10;
            break;
        case "Schwer":
            globalDifficultySize = 15;
            break;
    }
    console.log(globalDifficultySize);
    currentButton.style.background = "#3288ad"; //markiere den aktiven Button durch ändern des Hintergrunds
    let activeSpan = document.getElementById("spanDiffHeader");
    activeSpan.innerHTML = currentButton.innerHTML; //Schreibe die gewählte Schwierigkeit in den Anzeigebereich im Header
    let menuDiv = document.getElementById("mainDivMenu");
    menuDiv.style.opacity = "0"; //Mache nach dem klicken des Buttons das gesamte Menu-Div unsichtbar (Transition über CSS)
    setTimeout(function () {
        document.getElementById("mainDivMenu").remove();
    }, 1000);
    startGame(); //Starte die nächste Funktion
}
/*************************Spiel**************************************/
/*Wird bei start des spiels aufgerufen.
erzeugt den Fortschrittsbalken, updatet ihn, erzeugt den Pool der Übungssätze für die aktuelle Runde
und ruft runGame() auf*/
function startGame() {
    createProgressBar();
    updateProgressBar();
    createGameSentencesPool();
    runGame();
}
/*runGame()
wird regelmäßig aufgerufen --> Haupfunktion des Spiels
prüft ob das Spiel zu Ende ist, löscht alle Inhalte aus den 3 Spielbereichen,
updated den Fortschrittsbalken.
Dann wird geprüft ob das Spiel beendet wurde.
Läuft das Spiel noch, wird ein zufälliger Deutscher Satz dargestellt, der passende Spanische (Ukrainische) Satz
wird ebenfalls dargestellt und danach werden die fremdsprachigen Worte durchgemischt und neu dargestellt.
*/
function runGame() {
    checkForEndstate();
    clearGameAreas();
    updateProgressBar();
    if (globalEndGameState == false) {
        createGermanSentence(globalActiveSentences[globalProgress]);
        createForeignSentence(globalActiveSentences[globalProgress]);
        shuffleForeignSentence();
    }
}
/*erzeugt den Fortchrittsbalken*/
function createProgressBar() {
    let divProgressBar = document.querySelector(".progressBar");
    for (let i = 1; i <= globalDifficultySize; i++) {
        let newDivProgressBarElement = document.createElement("div");
        newDivProgressBarElement.classList.add("progressBarElement");
        newDivProgressBarElement.setAttribute("id", "progressBarElement: " + i);
        divProgressBar.appendChild(newDivProgressBarElement);
    }
    let currentElement = document.querySelector("header");
    currentElement.appendChild(divProgressBar);
}
/*aktualisiert den Inhalt des Fortschrittbalkens auf Basis des bereits erzielten GesamtFortschritts*/
function updateProgressBar() {
    let currentProgress = document.getElementById("headerSpanProgress");
    let currentDifficulty = document.getElementById("headerSpanDifficulty");
    currentProgress.innerHTML = String(globalProgress);
    currentDifficulty.innerHTML = String(globalDifficultySize);
    for (let i = 1; i <= globalDifficultySize; i++) {
        let currentProgressBarElement = document.getElementById("progressBarElement: " + i);
        if (i <= globalProgress) {
            currentProgressBarElement.style.background = "#41e8b6";
        }
    }
}
/*Erzeugt aus allen vorhandenen Übungssätzen ein zufällig zusammengestelltes Array mit für
das aktuelle Spiel aktiven Übungssätzen. Die größe des Arrays hängt von der gewählten Schwierigkeit ab.
Um Dopplungen zu vermeiden wird jeder mögliche Satz geprüft ob er schon als aktiver Übungssatz genutzt
wird (.used) im Satz objekt*/
function createGameSentencesPool() {
    while (globalActiveSentences.length < globalDifficultySize) //Schleife läuft bis Array aktiver Sätze so groß wie die gewählte Schwierigkeit ist
     {
        let shiftingSentence = globalAllSentences[getRandomNumberBetween(0, (globalAllSentences.length - 1))]; // Einen zufälligen Satz aus dem Array aller möglichen Sätze wählen
        console.log(shiftingSentence);
        if (shiftingSentence.used == false) //Prüfe ob der aktuelle Satz schon verwendet wird
         {
            globalActiveSentences.push(shiftingSentence); //aktuellen satz ins Array der aktiven Sätze schreiben
            shiftingSentence.used = true; //Aktuellen satz als "genutzt" setzen
        }
        else {
            continue; //Führe die nächste Iteration der Schleife aus
        }
    }
    console.log(globalActiveSentences);
}
/*Wählt aus dem aktiven Satz Objekt den deutschen Übungssatz aus und schreibt in in den Testbereich*/
function createGermanSentence(currentSentence) {
    /*Schleife durchläuft den aktuellen satz Wort für Wort und schreibt ihn als separate Divs in den Testbereich*/
    for (let i = 0; i < currentSentence.length; i++) {
        let newWordDiv = document.createElement("div");
        newWordDiv.setAttribute("id", "german-word-" + i); //vergabe der ID
        newWordDiv.classList.add("germanWord"); //CSS Klasse anhängen
        newWordDiv.innerHTML = currentSentence.german[i]; //Inhalt des aktuellen Wortes im aktuellen Satz in das Div schreiben
        console.log(currentSentence.german[i]);
        globalUpperGameArea.appendChild(newWordDiv); //Div an passenden Spielbereich anhängen
        setTimeout(function () {
            newWordDiv.style.opacity = "1"; //mach das aktuelle Div sichtbar
        }, 5);
    }
}
/*Schreibt abhängig von der gewählten Sprache den aktuellen fremdsprachigen Testsatz
(Wort für Wort als einzelne Div-Elemente) passend zum deutschen Satz in den entsprechnden Testbreich.
IDs und CSS Klassen werden entsprechend vergeben
Danach werden abhängig von der Schwierigkeit falsche Testwörter in der passenden Sprache ausgewählt, als Divs in den
Testbereich geschrieben und der erzeugte Pool aus falschen Wörtern für diesen Satz wieder geleert.*/
function createForeignSentence(currentSentence) {
    for (let i = 0; i < currentSentence.length; i++) //Durchläuft den aktuellen Satz einmal komplett Wort für Wort
     {
        let newWordDiv = document.createElement("div");
        if (i < 10) //ID-Vergabe abhängig davon wie viele Worte im Testsatz sind (mehr oder weniger als 10?)
         { //Notwendig da im prüfen des Wortes immer die letzten 2 Stellen der ID geprüft werden
            newWordDiv.setAttribute("id", globalLanguageString + "-word-0" + i);
        }
        else {
            newWordDiv.setAttribute("id", globalLanguageString + "-word-" + i);
        }
        newWordDiv.classList.add("foreignWord"); //CSS Klasse anhängen
        switch (globalLanguageString) //Schreibt den Inhalt des aktuellen wOrtes abhängig von der gewählten Sprache in das aktuelle Div
         {
            case "Spanisch":
                newWordDiv.innerHTML = currentSentence.spanish[i];
                break;
            case "Ukrainisch":
                newWordDiv.innerHTML = currentSentence.ukrainian[i];
                break;
        }
        globalLowerGameArea.appendChild(newWordDiv); //hänge das aktuelle Div an den passenden Spielbereich an
        setTimeout(function () {
            newWordDiv.style.opacity = "1"; //mache das aktuelle div sichtbar
        }, 5);
        newWordDiv.addEventListener("click", checkWord); //EventListener für Wortprüfung
    }
    createFakeWordsPool(globalDifficultySize / 5); //Erzeugt Pool aus falschen Wörtern
    addFakeWords(); //hängt falsche Wörter als Divs an den aktuellen fremdsprachigen Satz an
    clearActiveFakeWordsPool(); //Leert den Pool aus falschen WÖrtern wieder (Wird für jeden Satz neu generiert)
}
/*Erzeugt auf Basis der gewählten Schwierigkeit einen Pool aus entweder 1, 2 oder 3 falschen Testwörtern in der
gewählten Fremdsprache.*/
function createFakeWordsPool(poolSize) {
    console.log("FakeWordsPoolSize: " + poolSize);
    while (globalActiveFakeWords.length < poolSize) {
        let currentFakeWord = globalAllFakeWords[getRandomNumberBetween(0, (globalAllFakeWords.length - 1))]; //Wähle zufälligs Falsches Wort aus Array aller falscher Wörter aus
        console.log("CurrentFakeWord-spanisch: " + currentFakeWord.spanish);
        console.log("CurrentFakeWord-ukrainisch: " + currentFakeWord.ukrainian);
        if (currentFakeWord.used == false) //Prüfe ob das aktuelle Falsche Wort schon genutzt wird
         {
            globalActiveFakeWords.push(currentFakeWord); //Hänge aktuelles falsches Wort and Array der aktiven Falschen Wörter an
            currentFakeWord.used = true; //setze status des aktuellen falschen Wortes auf "genutzt"
        }
        else {
            continue; //Führe die nächste Iteration der Schleife aus
        }
    }
    console.log("Aktiver Pool der Fake Wörter:");
    console.log(globalActiveFakeWords);
}
/*Schreibt die aktiven Falschen Wörter jeweils als separate Divs in den Spielbereich*/
function addFakeWords() {
    for (let i = 0; i < globalActiveFakeWords.length; i++) //Schleife durchläuft aktiven Satz Wort für Wort
     {
        let newFakeWordText = "";
        switch (globalLanguageString) //Schreie falsches Wort abhängig von Sprache
         {
            case "Spanisch":
                newFakeWordText = globalActiveFakeWords[i].spanish;
                break;
            case "Ukrainisch":
                newFakeWordText = globalActiveFakeWords[i].ukrainian;
                break;
        }
        let newFakeWordDiv = document.createElement("div");
        newFakeWordDiv.innerHTML = newFakeWordText; //Schreibe falsches Wort in die aktuelle Div
        globalLowerGameArea.appendChild(newFakeWordDiv); // Hänge div an aktuellen Spielbereich an
        newFakeWordDiv.setAttribute("id", "Fake-word-F" + i); //vergebe ID
        newFakeWordDiv.classList.add("foreignWord"); //CSS Klasse anhängen
        newFakeWordDiv.addEventListener("click", checkWord); //EventListerner für Wortprüfung
        setTimeout(function () {
            newFakeWordDiv.style.opacity = "1"; //Mache das Div sichtbar
        }, 5);
    }
}
/*Setzt den Status aller genutzten Falschen Wörter auf "ungenutzt* zurück und leert das Array der aktiven falschen Wörter.*/
function clearActiveFakeWordsPool() {
    for (let i = 0; i < globalAllFakeWords.length; i++) {
        globalAllFakeWords[i].used = false; //Setzte Status des aktuellen flaschen Wortes auf "ungenutzt"
    }
    globalActiveFakeWords.length = 0; //Leere dasArray der aktiven alschen Wörter
    console.log("Zustand: globalAllFakeWords");
    console.log(globalAllFakeWords);
    console.log("Zustand: globalActiveFakeWords:");
    console.log(globalActiveFakeWords);
}
/*Nimmt alle Elemente im Testbereich (Alle Fremdwörter + falsche Wörter als Divs) und mischt ihre Reihenfolge
zufällig durch und schreibt sie neu in den Bereich (hängt sie als Kind an)*/
function shuffleForeignSentence() {
    for (var i = globalLowerGameArea.children.length; i >= 0; i--) //Zählt von der anzahl der Kinder des Testbreichs auf 0
     {
        globalLowerGameArea.appendChild(globalLowerGameArea.children[Math.random() * i | 0]); //immt ein zufälliged Kind des Testnbreiches und hängt es neu an
    }
}
/*Prüft ob ein geklicktes Wort korrekt (an richtiger Stelle im Satz) ist oder nicht.
Über diese Funktion "treibt" der Nutzer das Spiel voran bis er gewinnt oder verliert.*/
function checkWord() {
    let currentWord = document.querySelector(".foreignWord:hover"); //Wähle das aktuell geklickte Wort
    /*Schreibe die letzten 2 Stellen der Id in neue variable (durch aufbau der ID vergabe sind dies
    immer entweder 2 zahlen (korrektes Wort) oder F + Zahl (falsches Wort). die Zahl gibt die Stelle im Satz an.*/
    let currentWordID = currentWord.id.slice(-2);
    console.log("CurrentWordID=" + currentWordID);
    console.log("globalCurrentSentenceProress=" + globalCurrentSentenceProgress);
    if (parseInt(currentWordID) == globalCurrentSentenceProgress) //Prüfung ob die ID des aktuellen WOrtes der aktiven Stele im Satz entspricht
     { //Wenn ja: 
        audioCorrect.play(); //Spiele Sound für "korrektes Wort"
        globalPoints++; //Zähle einen Punkt dazu
        updatePoints(); //aktualisiere die Punkteanzeige
        moveCorrectWord(currentWord); //Bewege das Wort vom Testbereich in den Bereich für korrekt gewählte Worte
        globalCurrentSentenceProgress++; //Zähle den Wortzähler im aktuellen Satz hoch (Fortschritt im Satz)
        setTimeout(function () {
            checkForEndOfSentence(); //Prüfe ob der aktuelle Satz beendet ist
        }, 1500);
    }
    else { //Wenn nein:
        audioError.play(); //Spiele Sound für "falsches Wort"
        alert("Das war leider das falsche Wort!"); //Alarmmeldung an Nutzer
        globalPoints--; //Ziehe einen Punkt ab
        updatePoints(); //aktualisiere die Punkteanzeige
        checkForEndstate(); //Prüfe ob das Spiel zu Ende ist (Punkte könnten kleiner 0 sein)
    }
}
/*Aktualisiert die Punkteanzeige*/
function updatePoints() {
    let points = document.getElementById("spanPointsHeader");
    points.innerHTML = String(globalPoints);
}
/*"Bewegt" ein korrekt geklicktes Wort vom Testbereich in den Bereich für korrekt gewählte Worte
*/
function moveCorrectWord(activeWord) {
    //Ändere Hintergrund und Schriftfarbe, sowie sichtbarkeit zu 0. Fade out effect (transition über CSS)
    activeWord.style.background = "#ffffff";
    activeWord.style.color = "#ffffff";
    activeWord.style.opacity = "0";
    setTimeout(function () {
        globalLowerGameArea.removeChild(activeWord); //Entferne das aktive Wort aus dem Testbereich
        globalCentralGameArea.appendChild(activeWord); //Hänge es als neues Kind in den 
        activeWord.classList.add("solvedWord"); //Wechselt die CSS klasse von Fremdwort
        activeWord.classList.remove("foreignWord"); // zu gelöstem Wort
        setTimeout(function () {
            activeWord.style.opacity = "1";
            activeWord.style.background = "";
            activeWord.style.color = "#000000";
        }, 1);
    }, 500);
}
/*Prüft ob der aktive Satz komplett gelöst wurde*/
function checkForEndOfSentence() {
    console.log("Funktion: checkForEndOfSentence() gestartet");
    //Prüft ob der Fortschritt des aktiven Satzes gleich seiner Länge ist = letztes Wort gelöst
    if (globalCurrentSentenceProgress == globalActiveSentences[globalProgress].length) { //Wenn Satz beendet
        console.log("Satz zu Ende!");
        globalActiveSentences[globalProgress].cleared = true; //Setze status des Satz objekts auf "gelöst"
        globalCurrentSentenceProgress = 0; //Setze den Fortschritt des aktiven Satzes auf 0 (Reset für nächsten Satz)
        globalProgress++; //Zähle den globalen Spielfortschritt eins hoch (Satzzähler)
        console.log("Aktueller Gesamtfortschritt: " + globalProgress);
        audioNextSentence.play(); //Spiele Sound "Nächster Satz" ab
        runGame(); //Springe in die Hauptfunktion zurück (neuer Satz wird generiert, Spiel geht weiter)
    }
    else { //Wenn satz nnicht zu Ende springe aus der Funktion
        console.log("Satz nicht zu Ende!");
        return;
    }
    console.log("Funktion: checkForEndOfSentence() beendet");
}
/*Entfernt alle Inhalte aus den 3 Spielbereichen (Deutscher Satz, korrekte Wörter und Fremdwörter)*/
function clearGameAreas() {
    removeAllChildren(globalUpperGameArea);
    removeAllChildren(globalCentralGameArea);
    removeAllChildren(globalLowerGameArea);
}
/*Entfernt alle Kinder eines spezifischen Eltern-Elements*/
function removeAllChildren(parent) {
    while (parent.firstChild) //Schleife läuft solange das Eltern-Element noch Kinder hat
     {
        parent.removeChild(parent.firstChild); //Entfernt das erste Kind des Eltern-Elements
    }
}
/*Prüft ob eine de rEndbedingungen für das Spiel eingetreten ist:
1. Punkte unter 0
2. Alle Sätze erfolgreich beendet*/
function checkForEndstate() {
    if (globalPoints < 0) //Punkte unter 0?
     {
        let activeDiv = createRollDownMenu(); //Erzeuge das Rolldownmenu (grünes Div von oben herab)
        globalEndGameState = false; //Setze die globale variable zum Spielende auf "verloren"
        setTimeout(function () {
            //Erzeuge den Abschlussbildschirm mit den Daten zu zustand "verloren"
            createEndGameScreen(activeDiv, "Das war leider nichts! Versuch es doch einfach nochmal.");
        }, 1500);
    }
    //Wenn Punkte noch über 0
    else if (globalProgress == globalDifficultySize) // Gesamtfortschritt = Schwierigkeit (Poolgröße der Testsätze) --> Alle Sätze wurden erfolgreich gelöst
     {
        let activeDiv = createRollDownMenu(); //Erzeuge das Rolldownmenu (grünes Div von oben herab)
        audioApplause.play(); //Spiele Sound "Spiel gewonnen" --> Applause ab
        globalEndGameState = true; //Setze die globale variable zum Spielende auf "gewonnen"
        setTimeout(function () {
            //Erzeuge den Abschlussbildschirm mit den Daten zu zustand "gewonnen"
            createEndGameScreen(activeDiv, "Super! Du hast es geschafft.");
        }, 1500);
    }
    else //Weder gewonnen noch verloren: SPiel geht weiter
     {
        return; //Spring aus der Funktion und führe das Spiel weiter
    }
}
/*Erzeugt den Bildschirm zum Ende des Spiels*/
function createEndGameScreen(activeDiv, endGameText) {
    let newText = document.createElement("h2");
    newText.innerHTML = endGameText; //Schreibe Text zum Ende des Spiels als Überschrift
    activeDiv.appendChild(newText); //Hänge ins aktive Div (RolldownMenu)
    if (globalEndGameState == true) //Wenn gewonnen
     {
        createWinningScore(activeDiv); //Erzeuge den Spielstand für "gewonnen"
    }
    else //Wenn verloren
     {
        createLosingScore(activeDiv); //erzeuge Spielstand für "verloren"
    }
    //Erzeuge einen Button zum neustarten des Spiels und hänge ihn ans aktive Div an
    let newButtonDiv = document.createElement("div");
    newButtonDiv.classList.add("newGameButton");
    newButtonDiv.innerHTML = "Start a new Game";
    activeDiv.appendChild(newButtonDiv);
    newButtonDiv.addEventListener("click", newGame); //EventListener... auf klick startet das Spiel neu
}
/*Erzeugt die Spielstandanzeige wenn das Spiel gewonnen wurde
Zeigt an wie viele Punkte von ALLEN möglichen Punkten für diesen Durclauf der Nutzer erreicht hat.*/
function createWinningScore(activeDiv) {
    let fullPoints = 0;
    //Zähle ALLE Worte in ALLEN im aktuellen Spiel verwendeten Sätzen um die höchstmögliche Punktzahl zu ermitteln
    for (let i = 0; i < globalActiveSentences.length; i++) {
        let tempPoints = globalActiveSentences[i].length;
        console.log(tempPoints);
        fullPoints += tempPoints; //Zähle in jedem Schleifendurchlauf die neuen Punktezu den alten dazu
    }
    console.log(fullPoints);
    let winningScoreText = document.createElement("p");
    //Schreibe Nachricht in <p>
    winningScoreText.innerHTML = "Du hast " + globalPoints + " von " + fullPoints + " möglichen Punkten erreicht.";
    activeDiv.appendChild(winningScoreText);
}
/*Erzeugt die Spielstandanzeige wenn das Spiel verloren wurde
Zeigt an, wie viele der Nutzer trotz verlierens gelöst hat*/
function createLosingScore(activeDiv) {
    let clearedSentences = 0;
    //durchläuft alleaktiven Sätze im aktuellen Spiel
    for (let i = 0; i < globalActiveSentences.length; i++) {
        if (globalActiveSentences[i].cleared == true) //Wählt jeden gelösten Satz
         {
            clearedSentences++; //Zählt alle gelösten Sätze
        }
    }
    let losingScoreText = document.createElement("p");
    //Abfrage für Sonderfall das KEIN Satz gelöst wurde
    if (clearedSentences == 0) {
        losingScoreText.innerHTML = "Leider hast du keinen Satz gelöst.";
    }
    else //min. 1 Satz wurde gelöst
     {
        losingScoreText.innerHTML = "Du hast immerhin " + clearedSentences + " von " + globalDifficultySize + " Sätzen gelöst.";
    }
    activeDiv.appendChild(losingScoreText);
}
/*Startet die Anwendung neu*/
function newGame() {
    location.reload(); // lädt die Website neu
}
/*Generiere Random nummer zwischen min und max*/
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//# sourceMappingURL=lang_learn_app.js.map