"use strict";
var L09_2_Vogelhaus_classes;
(function (L09_2_Vogelhaus_classes) {
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    L09_2_Vogelhaus_classes.randomBetween = randomBetween;
    function setCoordinates(_xPos, _yPos) {
        L09_2_Vogelhaus_classes.crc2.translate(_xPos, _yPos);
    }
    L09_2_Vogelhaus_classes.setCoordinates = setCoordinates;
    function resetCoordinates() {
        L09_2_Vogelhaus_classes.crc2.resetTransform();
    }
    L09_2_Vogelhaus_classes.resetCoordinates = resetCoordinates;
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
    L09_2_Vogelhaus_classes.generateRandomBool = generateRandomBool;
})(L09_2_Vogelhaus_classes || (L09_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Helpers.js.map