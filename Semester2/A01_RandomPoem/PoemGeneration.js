"use strict";
/*
Aufgabe: L01_Zufallsgedicht
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 15.10.2022
Quellen: Ich (Code), George Lucas (Inhalt der Arrays ;-) )
*/
var RandomPoem;
(function (RandomPoem) {
    let characters = ["Luke", "Leia", "Obi-Wan", "Darth Vader", "C3PO", "R2D2", "Han Solo", "Chewbacca", "Lando Calrissian"];
    let verbs = ["fliegt", "schützt", "repariert", "kocht", "hintergeht", "trägt", "redet mit", "meditiert über", "konzentriert sich auf"];
    let objects = ["den Rasenden Falken", "Alderaan", "den Todesstern", "einen Sternenzerstörer", "Coruscant", "Naboo", "ein Lichtschwert", "Dagobah", "den Jedi-Tempel"];
    for (let i = characters.length; i > 0; i--) {
        console.log(getVerse(characters, verbs, objects));
    }
    function getVerse(_characters, _verbs, _objects) {
        let verse = "";
        verse += _characters.splice(generateRandomIndexInArray(_characters), 1) + " ";
        verse += _verbs.splice(generateRandomIndexInArray(_verbs), 1) + " ";
        verse += _objects.splice(generateRandomIndexInArray(_objects), 1);
        return verse;
    }
    function generateRandomIndexInArray(_targetArray) {
        let randomIndexInArray = Math.floor(Math.random() * _targetArray.length);
        return randomIndexInArray;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=PoemGeneration.js.map