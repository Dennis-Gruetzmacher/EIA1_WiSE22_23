/*******************Variablen und Konstanten***********************************/
/*Alle global zugänglichen Variablen werden hier deklariert */
let globalLanguageString = ""; //String der ausgewählten Sprache
let globalDifficultyString = ""; //Sring der ausgewählten Schwierigkeit
let globalDifficultySize = 0; //Anzahl der zu erledigenden Sätze je nach Schwierigkeit
let globalPoints = 0; //Punktestand
let globalProgress = 0; //Gesamtfortschritt => Abgearbeitete Sätze
let globalCurrentSentenceProgress = 0; //Fortschritt im lösen des aktuellen Satzes
let globalEndGameState = false;
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
    length: 1,
    used: false,
    cleared: false,
    spanish: ["Spa1"],
    ukrainian: ["Ukra1"],
    german: ["Ger1"]
};
let sentence13 = {
    length: 1,
    used: false,
    cleared: false,
    spanish: ["Spa2"],
    ukrainian: ["Ukra2"],
    german: ["Ger2"]
};
let sentence14 = {
    length: 1,
    used: false,
    cleared: false,
    spanish: ["Spa2"],
    ukrainian: ["Ukra2"],
    german: ["Ger2"]
};
let sentence15 = {
    length: 1,
    used: false,
    cleared: false,
    spanish: ["Spa2"],
    ukrainian: ["Ukra2"],
    german: ["Ger2"]
};
let globalAllSentences = [sentence1, sentence2, sentence3, sentence4, sentence5, sentence6, sentence7, sentence8, sentence9, sentence10, sentence11, sentence12, sentence13, sentence14, sentence15]; //Array aller Satz-Objekte im Spiel
let globalActiveSentences = []; // Array nach Schwierigkeit aktiven Satz-Objekte
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
let globalAllFakeWords = [fakeWord1, fakeWord2, fakeWord3, fakeWord4, fakeWord5];
let globalActiveFakeWords = [];
/*Häufig genutzte HTML-Elemente */
let globalGeneralGameArea = document.querySelector(".generalGameArea");
let globalLowerGameArea = document.querySelector(".lowerGameArea");
let globalCentralGameArea = document.querySelector(".centralGameArea");
let globalUpperGameArea = document.querySelector(".upperGameArea");
/*******************Setup*********************************************/
window.addEventListener("load", startUp); //führe beim nach dem Laden der Website die funktion createMenu() aus
/**********************Funktionen************************************/
/**************************Menü***************************************/
/*startUp()
Erzeugt über die Funktion createRollDownMenu() ein neues "Div" und
ruft die Funktion fillStartMenu() zum füllen des Startmenüs auf*/
function startUp() {
    let activeDiv = createRollDownMenu();
    setTimeout(function () {
        fillStartMenu(activeDiv);
    }, 1500);
}
/*createRollDownMenu()
Erzegt ein "Div", weist KLasse und ID zu und hängt es an den .mainContainer an.
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
/*fillStartMenu()
Bekommt das Div des StartMenüs übergeben.
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
    let newText2 = document.createTextNode("...und eine Schwierigkeit aus.");
    newDivDiffText.appendChild(newText2);
    newDivDiffText.style.opacity = "0";
    setTimeout(function () {
        newDivDiffText.style.opacity = "1";
    }, 10);
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
function setLanguage() {
    let currentButton = document.querySelector(".menuButton:hover");
    for (let i = 1; i < 3; i++) {
        let Button = document.getElementById("LangButton: " + i);
        Button.style.removeProperty("background");
    }
    currentButton.style.background = "#3288ad";
    globalLanguageString = currentButton.innerHTML;
    console.log("Sprache: " + globalLanguageString);
    let activeSpan = document.getElementById("spanLangHeader");
    activeSpan.innerHTML = currentButton.innerHTML;
}
function setDifficulty() {
    if (globalLanguageString == "") {
        return;
    }
    let currentButton = document.querySelector(".menuButton:hover");
    globalDifficultyString = currentButton.innerHTML;
    console.log("Schwierigkeit: " + globalDifficultyString);
    switch (globalDifficultyString) {
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
    currentButton.style.background = "#3288ad";
    let activeSpan = document.getElementById("spanDiffHeader");
    activeSpan.innerHTML = currentButton.innerHTML;
    let menuDiv = document.getElementById("mainDivMenu");
    menuDiv.style.opacity = "0";
    setTimeout(function () {
        document.getElementById("mainDivMenu").remove();
    }, 1000);
    startGame();
}
/*************************Spiel**************************************/
/*startGame()
wird bei start des spiels aufgerufen.
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
wird ebenfalls dargestellt und danach werden die Worte durchgemischt.
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
/*createProgressBar()
erzeugt den Fortchrittsbalken*/
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
function createGameSentencesPool() {
    while (globalActiveSentences.length < globalDifficultySize) {
        let shiftingSentence = globalAllSentences[getRandomNumberBetween(0, (globalAllSentences.length - 1))];
        console.log(shiftingSentence);
        if (shiftingSentence.used == false) {
            globalActiveSentences.push(shiftingSentence);
            shiftingSentence.used = true;
        }
        else {
            continue; //Führe die nächste Iteration der Schleife aus
        }
    }
    console.log(globalActiveSentences);
}
function createGermanSentence(currentSentence) {
    for (let i = 0; i < currentSentence.length; i++) {
        let newWordDiv = document.createElement("div");
        newWordDiv.setAttribute("id", "german-word-" + i);
        newWordDiv.classList.add("germanWord");
        newWordDiv.innerHTML = currentSentence.german[i];
        globalUpperGameArea.appendChild(newWordDiv);
        setTimeout(function () {
            newWordDiv.style.opacity = "1";
        }, 5);
    }
}
function createForeignSentence(currentSentence) {
    for (let i = 0; i < currentSentence.length; i++) {
        let newWordDiv = document.createElement("div");
        if (i < 10) {
            newWordDiv.setAttribute("id", globalLanguageString + "-word-0" + i);
        }
        else {
            newWordDiv.setAttribute("id", globalLanguageString + "-word-" + i);
        }
        newWordDiv.classList.add("foreignWord");
        switch (globalLanguageString) {
            case "Spanisch":
                newWordDiv.innerHTML = currentSentence.spanish[i];
                break;
            case "Ukrainisch":
                newWordDiv.innerHTML = currentSentence.ukrainian[i];
                break;
        }
        globalLowerGameArea.appendChild(newWordDiv);
        setTimeout(function () {
            newWordDiv.style.opacity = "1";
        }, 5);
        newWordDiv.addEventListener("click", checkWord);
    }
    createFakeWordsPool(globalDifficultySize / 5);
    addFakeWords();
    clearActiveFakeWordsPool();
}
function createFakeWordsPool(poolSize) {
    console.log("PoolSize: " + poolSize);
    while (globalActiveFakeWords.length < poolSize) {
        let currentFakeWord = globalAllFakeWords[getRandomNumberBetween(0, (globalAllFakeWords.length - 1))];
        console.log("CurrentFakeWord-spanisch: " + currentFakeWord.spanish);
        console.log("CurrentFakeWord-ukrainisch: " + currentFakeWord.ukrainian);
        if (currentFakeWord.used == false) {
            globalActiveFakeWords.push(currentFakeWord);
            currentFakeWord.used = true;
        }
        else {
            continue; //Führe die nächste Iteration der Schleife aus
        }
    }
    console.log(globalActiveFakeWords);
}
function addFakeWords() {
    for (let i = 0; i < globalActiveFakeWords.length; i++) {
        let newFakeWordText = "";
        switch (globalLanguageString) {
            case "Spanisch":
                newFakeWordText = globalActiveFakeWords[i].spanish;
                break;
            case "Ukrainisch":
                newFakeWordText = globalActiveFakeWords[i].ukrainian;
                break;
        }
        let newFakeWordDiv = document.createElement("div");
        newFakeWordDiv.innerHTML = newFakeWordText;
        globalLowerGameArea.appendChild(newFakeWordDiv);
        newFakeWordDiv.setAttribute("id", "Fake-word-F" + i);
        newFakeWordDiv.classList.add("foreignWord");
        newFakeWordDiv.addEventListener("click", checkWord);
        setTimeout(function () {
            newFakeWordDiv.style.opacity = "1";
        }, 5);
    }
}
function clearActiveFakeWordsPool() {
    for (let i = 0; i < globalAllFakeWords.length; i++) {
        globalAllFakeWords[i].used = false;
    }
    globalActiveFakeWords.length = 0;
}
function shuffleForeignSentence() {
    for (var i = globalLowerGameArea.children.length; i >= 0; i--) {
        globalLowerGameArea.appendChild(globalLowerGameArea.children[Math.random() * i | 0]);
    }
}
function checkWord() {
    let currentWord = document.querySelector(".foreignWord:hover");
    let currentWordID = currentWord.id.slice(-2);
    if (parseInt(currentWordID) == globalCurrentSentenceProgress) {
        globalPoints++;
        updatePoints();
        moveCorrectWord(currentWord);
        audioCorrect.play();
        globalCurrentSentenceProgress++;
        setTimeout(function () {
            checkForEndOfSentence();
        }, 1500);
    }
    else {
        audioError.play();
        alert("Das war leider das falsche Wort!");
        globalPoints--;
        updatePoints();
        checkForEndstate();
    }
}
function updatePoints() {
    let points = document.getElementById("spanPointsHeader");
    points.innerHTML = String(globalPoints);
}
function moveCorrectWord(activeWord) {
    activeWord.style.background = "#ffffff";
    activeWord.style.color = "#ffffff";
    activeWord.style.opacity = "0";
    setTimeout(function () {
        globalLowerGameArea.removeChild(activeWord);
        globalCentralGameArea.appendChild(activeWord);
        activeWord.classList.add("solvedWord");
        activeWord.classList.remove("foreignWord");
        setTimeout(function () {
            activeWord.style.opacity = "1";
            activeWord.style.background = "";
            activeWord.style.color = "#000000";
        }, 1);
    }, 500);
}
function checkForEndOfSentence() {
    if (globalCurrentSentenceProgress == globalActiveSentences[globalProgress].length) {
        globalActiveSentences[globalProgress].cleared = true;
        globalCurrentSentenceProgress = 0;
        globalProgress++;
        audioNextSentence.play();
        runGame();
    }
    else {
        return;
    }
}
function clearGameAreas() {
    removeAllChildren(globalUpperGameArea);
    removeAllChildren(globalCentralGameArea);
    removeAllChildren(globalLowerGameArea);
}
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function checkForEndstate() {
    if (globalPoints < 0) {
        let activeDiv = createRollDownMenu();
        globalEndGameState = false;
        setTimeout(function () {
            createEndGameScreen(activeDiv, "Das war leider nichts! Versuch es doch einfach nochmal.");
        }, 1500);
    }
    else if (globalProgress == globalDifficultySize) {
        let activeDiv = createRollDownMenu();
        audioApplause.play();
        globalEndGameState = true;
        setTimeout(function () {
            createEndGameScreen(activeDiv, "Super! Du hast es geschafft.");
        }, 1500);
    }
    else {
        return;
    }
}
function createEndGameScreen(activeDiv, endGameText) {
    let newText = document.createElement("h2");
    newText.innerHTML = endGameText;
    activeDiv.appendChild(newText);
    if (globalEndGameState == true) {
        createWinningScore(activeDiv);
    }
    else {
        createLosingScore(activeDiv);
    }
    let newButtonDiv = document.createElement("div");
    newButtonDiv.classList.add("newGameButton");
    newButtonDiv.innerHTML = "Start a new Game";
    activeDiv.appendChild(newButtonDiv);
    newButtonDiv.addEventListener("click", newGame);
}
function createWinningScore(activeDiv) {
    let fullPoints = 0;
    for (let i = 0; i < globalActiveSentences.length; i++) {
        let tempPoints = globalActiveSentences[i].length;
        console.log(tempPoints);
        fullPoints += tempPoints;
    }
    console.log(fullPoints);
    let winningScoreText = document.createElement("p");
    winningScoreText.innerHTML = "Du hast " + globalPoints + " von " + fullPoints + " möglichen Punkten erreicht.";
    activeDiv.appendChild(winningScoreText);
}
function createLosingScore(activeDiv) {
    let clearedSentences = 0;
    for (let i = 0; i < globalActiveSentences.length; i++) {
        if (globalActiveSentences[i].cleared == true) {
            clearedSentences++;
        }
    }
    let losingScoreText = document.createElement("p");
    losingScoreText.innerHTML = "Du hast immerhin " + clearedSentences + " von " + globalDifficultySize + " Sätzen gelöst.";
    activeDiv.appendChild(losingScoreText);
}
function newGame() {
    location.reload(); // lädt die Website neu
}
/*Generiere Random nummer zwischen min und max*/
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//# sourceMappingURL=lang_learn_app.js.map