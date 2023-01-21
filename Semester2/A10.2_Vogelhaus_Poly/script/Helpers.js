"use strict";
/*
Aufgabe: L10.2_Vogelhaus_Poly
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 20.01.2023
Quellen:
*/
var L10_2_Vogelhaus_classes;
(function (L10_2_Vogelhaus_classes) {
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    L10_2_Vogelhaus_classes.randomBetween = randomBetween;
    function setCoordinates(_xPos, _yPos) {
        L10_2_Vogelhaus_classes.crc2.translate(_xPos, _yPos);
    }
    L10_2_Vogelhaus_classes.setCoordinates = setCoordinates;
    function resetCoordinates() {
        L10_2_Vogelhaus_classes.crc2.resetTransform();
    }
    L10_2_Vogelhaus_classes.resetCoordinates = resetCoordinates;
    function generateRandomBool() {
        let direction;
        let random = randomBetween(0, 1);
        if (random == 0) {
            direction = false;
        }
        else {
            direction = true;
        }
        return direction;
    }
    L10_2_Vogelhaus_classes.generateRandomBool = generateRandomBool;
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Helpers.js.map