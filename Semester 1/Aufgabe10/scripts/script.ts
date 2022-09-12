namespace Aufgabe10 //Namespace definiert
{
/*****Variablen und Konstanten: Deklaration und Initialisierung******/
/*****************************************************/
let generalTaskID: number = 0; //Genereller Taskzähler
let arrayTasks:any [] = []; //leeres Array für die Task Objekte vorbereitet
let activeCreationIndex: number; //vorbereitet für Erschaffung neuer Objekte
interface taskItem //Interface für Task Objekte
{
    taskID: number; //Nummer des Tasks
    status: boolean; //Status des Tasks (true = aktiv, false = erledigt)
    content: string; //Inhalt des Tasks (z.B. "Einkaufen gehen")
}
/*******************Setup und Verteilen der EventListener*************/
/*********************************************************************/
document.getElementById("newtodo").addEventListener("keyup", addTask); //Eventlistener an Eingabefeld hängen
/********************************Funktionen***************************************/
/*********************************************************************************/

function addTask(key)
{
    if (key.keyCode === 13) //Prüft ob "ENTER" Taste gedrückt wurde
    {
        createTaskObject(); //ershaffe neue Task Objekt
        createNewLi(); //erschaffe neues Listenelement
        let activeLi = document.getElementById("task-nr: " + generalTaskID); //Speichere aktivesListenelement
        createStatusButton(activeLi); //Erschaffe den Status Button
        createTaskContent(activeLi, arrayTasks[activeCreationIndex]); //Fülle Listenelement mit Inhalt aus Objekt
        createTrashButton(activeLi); //Erschaffe Trash button
        calculateNumberTasks(); //Berechne anzahl der Tasks und zeige sie an
        document.getElementById("newtodo").value = ""; //Leere das Textfeld
        generalTaskID++; //Zähle GlobaleTaskId hoch
    }
}
/*Erzeugt auf Grundlage des oben definierten Inerfaces ein Task-Objekt und füllt es */
function createTaskObject()
{
    let newTaskContent = document.getElementById("newtodo").value; //lese Daten aus Textfeld aus
    let newTaskItem: taskItem = 
    {
        taskID: generalTaskID, //Setzte eindeutige TaskID
        status: true, //Setzte Task Status true = noch offen
        content: newTaskContent //schreibe gespeicherten Inhalt aus Textfeld in content
    };
    arrayTasks.push(newTaskItem); //Schiebe das Object in das vorbereitete Task Array
    /*Finde den aktuell aktiven Index des Task Arrays 
    Notwendig da general TaskId immer weiter nach oben läuft, während die Indizes des Task Arrays
    durch löschen von elementen auch wieder "zurück" springen kann. */
    activeCreationIndex = arrayTasks.findIndex(function(array) 
    { //Suche den Index vom Objekt in arrayTasks für welches taskID == generalTaskId gilt
        if(array.taskID == generalTaskID)
        {
            return true;
        }    
    });
    console.log("ACI: " + activeCreationIndex);
    console.log("GTID: " + generalTaskID);
}
/*Erschaffe ein neues Listenelement*/
function createNewLi()
{
    let newtask = document.createElement("li");
    newtask.setAttribute("id", String("task-nr: " + generalTaskID));//Setze eindeutige Id auf Basis der generalTaskID
    newtask.classList.add("liContainer"); //weise Klasse zu
    let list = document.getElementById("tasklist"); 
    list.appendChild(newtask);//Hänge Listenelement als Kind an die Liste an
}
/*Erzeuge Status Button*/
function createStatusButton(activeLi)
{
    let newStatusDiv = document.createElement("div"); //Erschaffe Div
    newStatusDiv.classList.add("statusDiv");//Weise Div die Klasse statusDiv zu (CSS)
    let newStatusButton = document.createElement("i"); //erschaffe Button <i>
    newStatusButton.setAttribute("id", String("statusButton-nr: " + generalTaskID)); //weise eindeutige ID zu
    newStatusButton.classList.add("fa-regular"); //füge font-awesome klassen zu
    newStatusButton.classList.add("fa-circle"); //füge font-awesome klassen zu
    newStatusDiv.appendChild(newStatusButton); //Hänge Button als Kind an das Div an
    activeLi.appendChild(newStatusDiv); //Hänge Div als Kind in das aktive Listenelement ein
    newStatusButton.addEventListener("click", triggerStatus); //Hänge EventListener an den Button an
}

/*Fülle das Listenelement mit Inhalt */
function createTaskContent(activeLi, newTaskContent)
{
    let newContent = document.createTextNode(newTaskContent.content); //holt Content aus Objekt aus arrayTasks
    activeLi.appendChild(newContent); //hänge Inhalt als Kind ans akitve Listenelement an
}
/*Erschaffe Trash-Button*/
function createTrashButton(activeLi)
{
    let newTrashDiv = document.createElement("div"); //Erzeuge neues Div
    newTrashDiv.classList.add("trashDiv"); //weise Div die Klasse trashDiv zu (CSS)
    let newTrashButton = document.createElement("i"); //erschaffe Button <i>
    newTrashButton.setAttribute("id", String("trashButton-nr: " + generalTaskID)); //weise Button eindetige Id zu
    newTrashButton.classList.add("fa-regular"); //füge font-awesome klassen zu
    newTrashButton.classList.add("fa-trash-can"); //füge font-awesome klassen zu
    newTrashDiv.appendChild(newTrashButton); //Hänge Button als Kind an das Div an
    activeLi.appendChild(newTrashDiv); //Hänge Div als Kind in das aktive Listenelement ein
    newTrashButton.addEventListener("click", deleteTask); //Hänge EventListener an den Button an
}

/*Ändere den Status eines Tasks */
function triggerStatus()
{
    let currentButton = document.querySelector("i:hover"); //Aktiver Button über welchen grade die Maus schwebt
    let activeElement = document.querySelector("i:hover").id; //Id des Buttons
    let activeIndex = activeElement.slice(17); //ziehe aus der Id die Nummer
    let activeLi = document.getElementById("task-nr: " + activeIndex); //Finde das Listenelement in welchem der Button sitzt
    let activeArrayIndex = arrayTasks.findIndex(function(array) //Finde den Index von arrayTasks für das
    {//Finde den Index des Objects in array Tasks für das aktive Listenelement
        if(array.taskID == activeIndex)
        {
            return true;
        }    
    });

    if(arrayTasks[activeArrayIndex].status == true)
    {//Wenn der Status des aktiven Objekts = true
        currentButton.classList.add("fa-circle-check"); //Ändere den Button von kreis
        currentButton.classList.remove("fa-circle"); //zu Kreis mit Haken
        arrayTasks[activeArrayIndex].status = false; //Ändere Status im aktiven Objekt zu false = erledigt
        console.log(arrayTasks[activeArrayIndex]); //Gib dies in die Konsole aus
        activeLi.style.background = "#b0ffb4"; //Ändere die Farbe des Listenelements zu Grün
    }
    else
    {
        currentButton.classList.add("fa-circle");
        currentButton.classList.remove("fa-circle-check");
        arrayTasks[activeArrayIndex].status = true;//Ändere Status im aktiven Objekt zu true = noch offen
        console.log(arrayTasks[activeArrayIndex]);
        activeLi.style.background = "#ffe9ba"; //Ändere die Farbe des Listenelements zu orange
    }
}
/*Lösche einen Task*/
function deleteTask()
{
    let activeElement = document.querySelector("i:hover").id; //hole Id des aktiven Buttons 
    console.log(activeElement);
    let activeIndex = activeElement.slice(16); //ziehe aus der Id des aktiven Buttons die Nummer
    console.log(activeIndex);
    let tasktoDelete = document.getElementById("task-nr: " + activeIndex); //finde das aktive Listenelement über ID
    tasktoDelete.remove(); //Entferne das aktive Listenelement
    let activeArrayIndex = arrayTasks.findIndex(function(array) 
    { //Finde den Index des Objects in array Tasks für das aktive Listenelement
        if(array.taskID == activeIndex)
        {
            return true;
        }    
    });
    arrayTasks.splice(activeArrayIndex, 1); //Entferne das aktive Objekt aus dem Task array
    calculateNumberTasks(); //berechne die Nummer der Tasks neu

}
/*Berechne die anzahl der Tasks*/
function calculateNumberTasks()
{
    let numberTasks = arrayTasks.length; //hole die Länge des Task arrays
    if(numberTasks == 0) //Sonderfall wenn keine Tasks vorahnden
    {
        document.getElementById("numbertasks").innerText = String("Keine Aufgabe");
    }
    else
    if(numberTasks == 1) //Sonderfall wenn nur ein Task vorhanden
    {
        document.getElementById("numbertasks").innerText = String(numberTasks + " Aufgabe");
    }
    else //Mehrere Tasks vorhanden
    {
        document.getElementById("numbertasks").innerText = String(numberTasks + " Aufgaben");
    }
}
}