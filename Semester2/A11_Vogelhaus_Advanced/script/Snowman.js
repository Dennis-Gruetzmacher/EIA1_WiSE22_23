"use strict";
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
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
            L11_Vogelhaus_advanced.crc2.fillStyle = "#FFFFFF";
            L11_Vogelhaus_advanced.crc2.strokeStyle = "#595959";
            //Draw Arms
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.moveTo(0, -(2 * this.baseRadius + this.middleRadius));
            L11_Vogelhaus_advanced.crc2.lineTo(70, -(2 * this.baseRadius + this.middleRadius) - 20);
            L11_Vogelhaus_advanced.crc2.moveTo(0, -(2 * this.baseRadius + this.middleRadius));
            L11_Vogelhaus_advanced.crc2.lineTo(-70, -(2 * this.baseRadius + this.middleRadius) - 20);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.strokeStyle = "#804000";
            L11_Vogelhaus_advanced.crc2.lineWidth = 3;
            L11_Vogelhaus_advanced.crc2.stroke();
            //Draw TopPart
            L11_Vogelhaus_advanced.crc2.strokeStyle = "#000000";
            L11_Vogelhaus_advanced.crc2.lineWidth = 2;
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.arc(0, -(2 * this.baseRadius + 2 * this.middleRadius + this.topRadius), this.topRadius, 0, Math.PI * 2);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            L11_Vogelhaus_advanced.crc2.stroke();
            //Draw Middle Part
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.arc(0, -(2 * this.baseRadius + this.middleRadius), this.middleRadius, 0, Math.PI * 2);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            L11_Vogelhaus_advanced.crc2.stroke();
            //Draw BasePArt
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.arc(0, -this.baseRadius, this.baseRadius, 0, Math.PI * 2);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            L11_Vogelhaus_advanced.crc2.stroke();
            //Draw Eyes
            L11_Vogelhaus_advanced.crc2.translate(0, -(2 * this.baseRadius + 2 * this.middleRadius + this.topRadius));
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.arc(-8, -5, 2, 0, Math.PI * 2);
            L11_Vogelhaus_advanced.crc2.fillStyle = "#000000";
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.arc(8, -5, 2, 0, Math.PI * 2);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            //Draw Nose
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.arc(0, 0, 4, 0, Math.PI * 2);
            L11_Vogelhaus_advanced.crc2.fillStyle = "#ff9900";
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            //draw Mouth
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.arc(0, 3, 10, 0, Math.PI);
            L11_Vogelhaus_advanced.crc2.stroke();
            L11_Vogelhaus_advanced.crc2.closePath();
            //draw Buttons
            L11_Vogelhaus_advanced.crc2.translate(0, this.topRadius + this.middleRadius);
            for (let i = -2; i < 3; i++) {
                L11_Vogelhaus_advanced.crc2.beginPath();
                L11_Vogelhaus_advanced.crc2.arc(0, i * 10, 3, 0, Math.PI * 2);
                L11_Vogelhaus_advanced.crc2.fillStyle = "#000000";
                L11_Vogelhaus_advanced.crc2.fill();
                L11_Vogelhaus_advanced.crc2.closePath();
            }
            L11_Vogelhaus_advanced.crc2.lineWidth = 1;
        }
    }
    L11_Vogelhaus_advanced.Snowman = Snowman;
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=Snowman.js.map