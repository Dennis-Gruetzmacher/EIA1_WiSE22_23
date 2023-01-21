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
    class Snowman {
        baseRadius;
        middleRadius;
        topRadius;
        constructor(_baseRadius, _middleRadius, _topRadius) {
            this.set(_baseRadius, _middleRadius, _topRadius);
        }
        set(_baseRadius, _middleRadius, _topRadius) {
            this.baseRadius = _baseRadius;
            this.middleRadius = _middleRadius;
            this.topRadius = _topRadius;
        }
        draw() {
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#FFFFFF";
            L10_2_Vogelhaus_classes.crc2.strokeStyle = "#595959";
            //Draw Arms
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.moveTo(0, -(2 * this.baseRadius + this.middleRadius));
            L10_2_Vogelhaus_classes.crc2.lineTo(70, -(2 * this.baseRadius + this.middleRadius) - 20);
            L10_2_Vogelhaus_classes.crc2.moveTo(0, -(2 * this.baseRadius + this.middleRadius));
            L10_2_Vogelhaus_classes.crc2.lineTo(-70, -(2 * this.baseRadius + this.middleRadius) - 20);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.strokeStyle = "#804000";
            L10_2_Vogelhaus_classes.crc2.lineWidth = 3;
            L10_2_Vogelhaus_classes.crc2.stroke();
            //Draw TopPart
            L10_2_Vogelhaus_classes.crc2.strokeStyle = "#000000";
            L10_2_Vogelhaus_classes.crc2.lineWidth = 2;
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.arc(0, -(2 * this.baseRadius + 2 * this.middleRadius + this.topRadius), this.topRadius, 0, Math.PI * 2);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            L10_2_Vogelhaus_classes.crc2.stroke();
            //Draw Middle Part
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.arc(0, -(2 * this.baseRadius + this.middleRadius), this.middleRadius, 0, Math.PI * 2);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            L10_2_Vogelhaus_classes.crc2.stroke();
            //Draw BasePArt
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.arc(0, -this.baseRadius, this.baseRadius, 0, Math.PI * 2);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            L10_2_Vogelhaus_classes.crc2.stroke();
            //Draw Eyes
            L10_2_Vogelhaus_classes.crc2.translate(0, -(2 * this.baseRadius + 2 * this.middleRadius + this.topRadius));
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.arc(-8, -5, 2, 0, Math.PI * 2);
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#000000";
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.arc(8, -5, 2, 0, Math.PI * 2);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            //Draw Nose
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.arc(0, 0, 4, 0, Math.PI * 2);
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#ff9900";
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            //draw Mouth
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.arc(0, 3, 10, 0, Math.PI);
            L10_2_Vogelhaus_classes.crc2.stroke();
            L10_2_Vogelhaus_classes.crc2.closePath();
            //draw Buttons
            L10_2_Vogelhaus_classes.crc2.translate(0, this.topRadius + this.middleRadius);
            for (let i = -2; i < 3; i++) {
                L10_2_Vogelhaus_classes.crc2.beginPath();
                L10_2_Vogelhaus_classes.crc2.arc(0, i * 10, 3, 0, Math.PI * 2);
                L10_2_Vogelhaus_classes.crc2.fillStyle = "#000000";
                L10_2_Vogelhaus_classes.crc2.fill();
                L10_2_Vogelhaus_classes.crc2.closePath();
            }
            L10_2_Vogelhaus_classes.crc2.lineWidth = 1;
        }
    }
    L10_2_Vogelhaus_classes.Snowman = Snowman;
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Snowman.js.map