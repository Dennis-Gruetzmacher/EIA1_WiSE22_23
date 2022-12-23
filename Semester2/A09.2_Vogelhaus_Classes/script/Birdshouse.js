"use strict";
var L09_2_Vogelhaus_classes;
(function (L09_2_Vogelhaus_classes) {
    class Birdshouse {
        drawBase() {
            L09_2_Vogelhaus_classes.crc2.fillStyle = "#802b00";
            L09_2_Vogelhaus_classes.crc2.fillRect(-6, 0, 12, -100);
            L09_2_Vogelhaus_classes.crc2.translate(0, -135);
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.crc2.fillStyle = "#331a00";
            L09_2_Vogelhaus_classes.crc2.fillRect(-105, -5, 30, 10);
            L09_2_Vogelhaus_classes.crc2.fillRect(75, -5, 30, 10);
            L09_2_Vogelhaus_classes.crc2.closePath();
            L09_2_Vogelhaus_classes.crc2.translate(0, -105);
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.crc2.moveTo(-100, 0);
            L09_2_Vogelhaus_classes.crc2.lineTo(0, -50);
            L09_2_Vogelhaus_classes.crc2.lineTo(100, 0);
            L09_2_Vogelhaus_classes.crc2.closePath();
            L09_2_Vogelhaus_classes.crc2.fillStyle = "#FF0000";
            L09_2_Vogelhaus_classes.crc2.fill();
        }
        drawTop() {
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.crc2.fillStyle = "#663300";
            L09_2_Vogelhaus_classes.crc2.fillRect(-75, -90, 150, -150);
            L09_2_Vogelhaus_classes.crc2.closePath();
        }
    }
    L09_2_Vogelhaus_classes.Birdshouse = Birdshouse;
})(L09_2_Vogelhaus_classes || (L09_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Birdshouse.js.map