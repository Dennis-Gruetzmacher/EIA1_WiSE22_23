/*
Aufgabe: L01_Zufallsgedicht
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 15.10.2022
Quellen: Ich (Code), George Lucas (Inhalt der Arrays ;-) )
*/

namespace RandomPoem 
{
    let characters: string[] = ["Luke", "Leia", "Obi-Wan", "Darth Vader", "C3PO", "R2D2", "Han Solo", "Chewbacca", "Lando Calrissian"];
    let verbs: string[] = ["fliegt", "schützt", "repariert", "kocht", "hintergeht", "trägt", "redet mit", "meditiert über", "konzentriert sich auf"];
    let objects: string[] = ["den Rasenden Falken", "Alderaan", "den Todesstern", "einen Sternenzerstörer", "Coruscant", "Naboo", "ein Lichtschwert", "Dagobah", "den Jedi-Tempel"];

    for ( let i: number = characters.length; i > 0; i--)
        {
            console.log(getVerse(characters, verbs, objects));
        }
    
    function getVerse(_characters: string[], _verbs: string[], _objects: string[]): string
    {
        let verse: string = "";
        verse += _characters.splice(generateRandomIndexInArray(_characters), 1) + " ";
        verse += _verbs.splice(generateRandomIndexInArray(_verbs), 1) + " ";
        verse += _objects.splice(generateRandomIndexInArray(_objects), 1);
        return verse;
    }

    function generateRandomIndexInArray(_targetArray: string[]): number
    {
        let randomIndexInArray: number = Math.floor(Math.random() * _targetArray.length);
        return randomIndexInArray;
    }

}