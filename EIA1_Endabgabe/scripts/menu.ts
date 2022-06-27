
/*******************Variablen und Konstanten***********************************/
let globalLanguageString: string = ""; //Ausgewählte Sprache
let globalDifficultyString: string = ""; //Ausgewählte Schwierigkeit
let globalDifficultySize: number = 0; //Anzahl der zu erledigenden Sätze je nach Schwierigkeit
let globalPoints: number = 0; //Punktestand
let globalProgress: number = 0; //Gesamtfortschritt => Abgearbeitete Sätze
let globalCurrentSentenceProgress: number = 0; //Fortschritt im lösen des aktuellen Satzes
/**************************Übungssätze: Interface und Objekte**************************************************/
interface Sentence //Interface des Satz Objekts
{
    length: number; //Anzahl der Wörter im Satz
    used: boolean; //Boolean ob dieser Satz im aktiven Spiel verwendet wird
    cleared: boolean; // Boolean ob dieser Satz im aktiven spiel gelöst wurde
    spanish: String[]; //Array für Satz auf Spanisch
    ukrainian: String[]; //Array für Satz auf Ukrainisch
    german: String[]; //Array für Satz auf Deutsch

}
/*****Übungssatz-Objekte****************/
let sentence1: Sentence =
{
    length: 4,
    used: false,
    cleared: false,
    spanish: ["mi", "nombre", "es", "Dennis"],
    ukrainian: ["mene", "zvat", "y", "Dennis"],
    german: ["Mein", "Name", "ist", "Dennis"]
};
let sentence2: Sentence =
{
    length: 5,
    used: false,
    cleared: false,
    spanish: ["¿dónde", "puedo", "encontrar", "los", "baños?"],
    ukrainian: ["De", "ya", "mozhu", "znayty", "tualety?"],
    german: ["Wo", "finde", "ich", "die", "Toilette?"]
};
let sentence3: Sentence =
{
    length: 4,
    used: false,
    cleared: false,
    spanish: ["¿Cuán", "to", "cues", "ta?"],
    ukrainian: ["skil'", "ky", "tse", "koshtuye?"],
    german: ["Wie", "viel", "kostet", "das?"]
};
let sentence4: Sentence =
{
    length: 3,
    used: false,
    cleared: false,
    spanish: ["El", "menú", "por favor"],
    ukrainian: ["Menyu", "budʹ", "laska"],
    german: ["Die", "Speisekarte", "bitte."]
};
let sentence5: Sentence =
{
    length: 5,
    used: false,
    cleared: false,
    spanish: ["Luke,", "yo", "soy", "tu", "padre"],
    ukrainian: ["Luka,", "ya", "tviy", "bat'", "ko"],
    german: ["Luke,", "ich", "bin", "dein", "Vater."]
};
let sentence6: Sentence =
{
    length: 5,
    used: false,
    cleared: false,
    spanish: ["Houston", "tene", "mos", "un", "problema"],
    ukrainian: ["KH'", "yuston", "u", "nas'", "problema"],
    german: ["Houston,", "wir", "haben", "ein", "Problem."]
};
let sentence7: Sentence =
{
    length: 4,
    used: false,
    cleared: false,
    spanish: ["veo", "a", "gente", "meurta"],
    ukrainian: ["ya", "bachu", "mertvykh", "lyudey"],
    german: ["Ich", "sehe", "tote", "Menschen."]
};
let sentence8: Sentence =
{
    length: 13,
    used: false,
    cleared: false,
    spanish: ["la", "vida", "es como", "una", "caja", "de bombones", "nunca", "sabes", "lo", "que", "te", "va a", "tocar"],
    ukrainian: ["Zhyt", "tya", "yak", "korob", "ka", "tsuk", "erok", "nikoly", "ne", "znayesh", "shcho", "otry", "mayesh"],
    german: ["Das", "Leben", "ist", "wie", "eine", "Schachtel", "Pralinen,", "man", "weiß", "nie", "was", "man", "kriegt."]
};
let sentence9: Sentence =
{
    length: 5,
    used: false,
    cleared: false,
    spanish: ["¡", "Solo", "puede", "haber", "uno"],
    ukrainian: ["Mozhe", "buty", "til'", "ky", "odyn"],
    german: ["Es", "kann", "nur", "einen", "geben."]
};
let sentence10: Sentence =
{
    length: 10,
    used: false,
    cleared: false,
    spanish: ["Le", "haré", "un", "a", "oferta", "que", "no", "podrá", "rech", "azar"],
    ukrainian: ["Ya", "zroblyu", "yomu", "propozytsiyu", "vid", "yakoyi", "vin", "ne", "zmozhe", "vidmovytysya"],
    german: ["Ich", "mache", "ihm", "ein", "Angebot,", "dass", "er", "nicht", "ablehnen", "kann."]
};
let sentence11: Sentence =
{
    length: 6,
    used: false,
    cleared: false,
    spanish: ["¡Que", "la", "fuerza", "esté", "con", "usted"],
    ukrainian: ["Nekhay", "syla", "bude", "z", "to", "boyu"],
    german: ["Möge", "die", "Macht", "mit", "dir", "sein."]
};
let globalAllSentences: Sentence[] = [sentence1, sentence2, sentence3, sentence4, sentence5, sentence6, sentence7, sentence8, sentence9, sentence10, sentence11]; //Array aller Satz-Objekte im Spiel
let globalActiveSentences: Sentence[] = []; // Array nach Schwierigkeit aktiven Satz-Objekte
/*******************Setup*********************************************/
window.addEventListener("load", createMenu); //führe beim nach dem Laden der Website die funktion createMenu() aus

/**********************Funktionen************************************/

/**************************Menü***************************************/
function createMenu()
{
    let newDiv = document.createElement("div");
    newDiv.classList.add("mainDivMenu1");
    newDiv.setAttribute("id", "mainDivMenu");
    let containerDiv = document.querySelector(".mainContainer");
    containerDiv.appendChild(newDiv);
    setTimeout(function()
    {
        newDiv.style.height = "530px";
    }, 10);
    console.log("Menu div fertig");
    setTimeout(function()
    {
        fillMenu(newDiv);
    }, 1500);
}

function fillMenu(mainDivMenu)
{
    let newDivLangText = document.createElement("div");
    newDivLangText.classList.add("menuDivText");
    mainDivMenu.appendChild(newDivLangText);
    let newText = document.createTextNode("Wählen Sie bitte eine Sprache...");
    newDivLangText.appendChild(newText);
    newDivLangText.style.opacity = "0";
    setTimeout(function()
    {
        newDivLangText.style.opacity = "1";
    }, 10);
    for(let i = 1; i < 3; i++)
    {
        let newDivButton = document.createElement("div");
        newDivButton.classList.add("menuButton");
        newDivButton.setAttribute("id", "LangButton: " + i);
        mainDivMenu.appendChild(newDivButton);
        switch(i)
        {
            case 1:
                let newButtonTextSpain = document.createTextNode("Spanisch");
                newDivButton.appendChild(newButtonTextSpain);
            break;
            case 2:
                let newButtonTextUkraine = document.createTextNode("Ukrainisch");
                newDivButton.appendChild(newButtonTextUkraine);
            break;
        }
        newDivButton.addEventListener("click", setLanguage);
        setTimeout(function()
        {
            newDivButton.style.opacity = "1";
        }, 10);
    }
    let newDivDiffText = document.createElement("div");
    newDivDiffText.classList.add("menuDivText");
    mainDivMenu.appendChild(newDivDiffText);
    let newText2 = document.createTextNode("...und eine Schwierigkeit aus.");
    newDivDiffText.appendChild(newText2);
    newDivDiffText.style.opacity = "0";
    setTimeout(function()
    {
        newDivDiffText.style.opacity = "1";
    }, 10);
    for(let i = 1; i < 4; i++)
    {
        let newDivButton = document.createElement("div");
        newDivButton.classList.add("menuButton");
        newDivButton.setAttribute("id", "DiffButton: " + i);
        mainDivMenu.appendChild(newDivButton);
        switch(i)
        {
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
        setTimeout(function()
        {
            newDivButton.style.opacity = "1";
        }, 10);
    }
}

function setLanguage()
{
    let currentButton = document.querySelector(".menuButton:hover");
    for(let i = 1; i < 3; i++)
    {
        let Button = document. getElementById("LangButton: " + i);
        Button.style.removeProperty("background");
    }
    currentButton.style.background = "#3288ad";
    globalLanguageString = currentButton.innerHTML;
    console.log("Sprache: " + globalLanguageString);
    let activeSpan = document.getElementById("spanLangHeader");
    activeSpan.innerHTML = currentButton.innerHTML;
}

function setDifficulty()
{
    if(globalLanguageString == "")
    {
        return;
    }
    let currentButton = document.querySelector(".menuButton:hover");
    globalDifficultyString = currentButton.innerHTML;
    console.log("Schwierigkeit: " + globalDifficultyString);
    switch ( globalDifficultyString )
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
    currentButton.style.background = "#3288ad";
    let activeSpan = document.getElementById("spanDiffHeader");
    activeSpan.innerHTML = currentButton.innerHTML;
    let menuDiv = document.getElementById("mainDivMenu");
    menuDiv.style.opacity = "0";
    setTimeout(function()
    {
        document.getElementById("mainDivMenu").remove();
    }, 1000);
    startGame();
}

/*************************Spiel**************************************/

function startGame()
{
    createProgressBar();
    updateProgressBar();
    createGameSentencesPool();
    runGame();
}

function runGame()
{
    clearGameAreas();
    updateProgressBar();
    checkForEndstate();
    createGermanSentence(globalActiveSentences[globalProgress]);
    createForeignSentence(globalActiveSentences[globalProgress]);
    shuffleForeignSentence();
}
function createProgressBar()
{
    let divProgressBar = document.querySelector(".progressBar");
    for (let i = 1; i <= globalDifficultySize; i++ )
    {
        let newDivProgressBarElement = document.createElement("div");
        newDivProgressBarElement.classList.add("progressBarElement");
        newDivProgressBarElement.setAttribute("id", "progressBarElement: " + i);
        divProgressBar.appendChild(newDivProgressBarElement);
    }
    let currentElement = document.querySelector("header");
    currentElement.appendChild(divProgressBar);
}
function updateProgressBar()
{
    let currentProgress = document.getElementById("headerSpanProgress");
    let currentDifficulty = document.getElementById("headerSpanDifficulty");
    currentProgress.innerHTML = String(globalProgress);
    currentDifficulty.innerHTML = String(globalDifficultySize);
    for( let i = 1; i <= globalDifficultySize; i++)
    {
        let currentProgressBarElement = document.getElementById("progressBarElement: " + i);
        if(i <= globalProgress)
        {
            currentProgressBarElement.style.background = "#00ff00";
        }
    }
}

function createGameSentencesPool()
{
    while(globalActiveSentences.length < globalDifficultySize)
    {
        let shiftingSentence = globalAllSentences[getRandomNumberBetween(0, (globalAllSentences.length - 1))];
        console.log(shiftingSentence);
        if(shiftingSentence.used == false)
        {
            globalActiveSentences.push(shiftingSentence);
            shiftingSentence.used = true;
        }
        else
        {
            continue; //Führe die nächste Iteration der Schleife aus
        }
    }
    console.log(globalActiveSentences);
}

function createGermanSentence(currentSentence)
{
    let activeGameArea = document.querySelector(".upperGameArea");
    for(let i = 0; i < currentSentence.length; i++)
    {
        let newWordDiv = document.createElement("div");
        newWordDiv.setAttribute("id", "german-word-" + i);
        newWordDiv.classList.add("germanWord");
        newWordDiv.innerHTML = currentSentence.german[i];
        activeGameArea.appendChild(newWordDiv);
    }
}
function createForeignSentence(currentSentence)
{
    let activeGameArea = document.querySelector(".lowerGameArea");
    for(let i = 0; i < currentSentence.length; i++)
    {
        let newWordDiv = document.createElement("div");
        if(i < 10)
        {
            newWordDiv.setAttribute("id", globalLanguageString + "-word-0" + i);
        }
        else
        {
            newWordDiv.setAttribute("id", globalLanguageString + "-word-" + i);
        }
        newWordDiv.classList.add("foreignWord");
        switch ( globalLanguageString )
        {
            case "Spanisch":
                newWordDiv.innerHTML = currentSentence.spanish[i];
            break;
            case "Ukrainisch":
                newWordDiv.innerHTML = currentSentence.ukrainian[i];
            break;
        }
        activeGameArea.appendChild(newWordDiv);
        newWordDiv.addEventListener("click", checkWord);
    }
}
function shuffleForeignSentence()
{
    let activeDiv = document.querySelector(".lowerGameArea");
    for (var i = activeDiv.children.length; i >= 0; i--) 
    {
        activeDiv.appendChild(activeDiv.children[Math.random() * i | 0]);
    }
}
function checkWord()
{
    let currentWord = document.querySelector(".foreignWord:hover");
    let currentWordID = currentWord.id.slice(-2);
    if(parseInt(currentWordID) == globalCurrentSentenceProgress)
    {
        globalPoints++;
        updatePoints();
        moveCorrectWord(currentWord);
        globalCurrentSentenceProgress++;
        checkForEndOfSentence();
    }
    else
    {
        globalPoints--;
        updatePoints();
        checkForEndstate();
    }
}
function updatePoints()
{
    let points = document.getElementById("spanPointsHeader");
    points.innerHTML = String(globalPoints);
}
function moveCorrectWord(activeWord)
{
    let oldGameArea = document.querySelector(".lowerGameArea");
    let activeGameArea = document.querySelector(".centralGameArea");
    oldGameArea.removeChild(activeWord);
    activeGameArea.appendChild(activeWord);
    activeWord.classList.add("solvedWord");
    activeWord.classList.remove("foreignWord");
}

function checkForEndOfSentence()
{
    if(globalCurrentSentenceProgress == globalActiveSentences[globalProgress].length)
    {
        globalActiveSentences[globalProgress].cleared = true;
        globalCurrentSentenceProgress = 0;
        globalProgress++;
        runGame();
    }
    else
    {
        return;
    }
}

function clearGameAreas()
{
    let gameAreaTop = document.querySelector(".upperGameArea");
    let gameAreaMiddle = document.querySelector(".centralGameArea");
    let gameAreaBottom = document.querySelector(".lowerGameArea");
    removeAllChildren(gameAreaTop);
    removeAllChildren(gameAreaMiddle);
    removeAllChildren(gameAreaBottom);
}

function removeAllChildren(parent)
{
    while (parent.firstChild) 
    {
        parent.removeChild(parent.firstChild);
    }
}
function checkForEndstate() //prüft ob eine der Endbedingungen für das Spiel eingetreten ist
{
    if(globalPoints < 0)
    {
        createEndGameScreen("Das war leider nichts! Versuch es doch einfach nochmal.");
    }
    else if(globalProgress == globalDifficultySize)
    {
        createEndGameScreen("Super! Du hast es geschafft.");
    }
    else
    {
        return;
    }
}


function createEndGameScreen(endGameText)
{
    let activeArea = document.querySelector(".generalGameArea");
        let main = document.querySelector("main");
        activeArea.remove();
        let newText = document.createElement("h2");
        newText.innerHTML = endGameText;
        main.appendChild(newText);
        let newButtonDiv = document.createElement("div");
        newButtonDiv.classList.add("newGameButton");
        newButtonDiv.innerHTML = "Start a new Game";
        main.appendChild(newButtonDiv);
        newButtonDiv.addEventListener("click", newGame);
}

function newGame() //startet ein neues Spiel
{
    location.reload(); // lädt die Website neu
}
/*Generiere Random nummer zwischen min und max*/
function getRandomNumberBetween(min,max)
{
    return Math.floor(Math.random()*(max - min + 1) + min);
}