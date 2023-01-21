"use strict";
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    L11_Vogelhaus_advanced.randomBetween = randomBetween;
    function setCoordinates(_xPos, _yPos) {
        L11_Vogelhaus_advanced.crc2.translate(_xPos, _yPos);
    }
    L11_Vogelhaus_advanced.setCoordinates = setCoordinates;
    function resetCoordinates() {
        L11_Vogelhaus_advanced.crc2.resetTransform();
    }
    L11_Vogelhaus_advanced.resetCoordinates = resetCoordinates;
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
    L11_Vogelhaus_advanced.generateRandomBool = generateRandomBool;
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=Helpers.js.map