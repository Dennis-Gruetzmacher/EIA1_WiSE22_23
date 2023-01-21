"use strict";
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
    class Birdshouse {
        drawBase() {
            L11_Vogelhaus_advanced.crc2.fillStyle = "#802b00";
            L11_Vogelhaus_advanced.crc2.fillRect(-6, 0, 12, -100);
            L11_Vogelhaus_advanced.crc2.translate(0, -135);
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.fillStyle = "#331a00";
            L11_Vogelhaus_advanced.crc2.fillRect(-105, -5, 30, 10);
            L11_Vogelhaus_advanced.crc2.fillRect(75, -5, 30, 10);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.translate(0, -105);
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.moveTo(-100, 0);
            L11_Vogelhaus_advanced.crc2.lineTo(0, -50);
            L11_Vogelhaus_advanced.crc2.lineTo(100, 0);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fillStyle = "#FF0000";
            L11_Vogelhaus_advanced.crc2.fill();
        }
        drawTop() {
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.fillStyle = "#663300";
            L11_Vogelhaus_advanced.crc2.fillRect(-75, -90, 150, -150);
            L11_Vogelhaus_advanced.crc2.closePath();
        }
    }
    L11_Vogelhaus_advanced.Birdshouse = Birdshouse;
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=Birdshouse.js.map