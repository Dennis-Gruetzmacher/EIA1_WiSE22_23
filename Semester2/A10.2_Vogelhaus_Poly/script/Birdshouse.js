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
    class Birdshouse {
        drawBase() {
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#802b00";
            L10_2_Vogelhaus_classes.crc2.fillRect(-6, 0, 12, -100);
            L10_2_Vogelhaus_classes.crc2.translate(0, -135);
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#331a00";
            L10_2_Vogelhaus_classes.crc2.fillRect(-105, -5, 30, 10);
            L10_2_Vogelhaus_classes.crc2.fillRect(75, -5, 30, 10);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.translate(0, -105);
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.moveTo(-100, 0);
            L10_2_Vogelhaus_classes.crc2.lineTo(0, -50);
            L10_2_Vogelhaus_classes.crc2.lineTo(100, 0);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#FF0000";
            L10_2_Vogelhaus_classes.crc2.fill();
        }
        drawTop() {
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#663300";
            L10_2_Vogelhaus_classes.crc2.fillRect(-75, -90, 150, -150);
            L10_2_Vogelhaus_classes.crc2.closePath();
        }
    }
    L10_2_Vogelhaus_classes.Birdshouse = Birdshouse;
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Birdshouse.js.map