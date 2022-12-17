"use strict";
var L09_2_Vogelhaus_classes;
(function (L09_2_Vogelhaus_classes) {
    class Bird {
        colorHead;
        colorBody;
        constructor(_colorHead, _colorBody) {
            this.set(_colorHead, _colorBody);
        }
        set(_colorHead, _colorBody) {
            this.colorHead = _colorHead;
            this.colorBody = _colorBody;
        }
        draw() {
            //draw Feet
            crc2.beginPath();
            crc2.moveTo(-5, 0);
            crc2.lineTo(-5, 20);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            //draw Body
            crc2.rotate(Math.PI * 0.2);
            crc2.scale(2, 1);
            crc2.beginPath();
            crc2.fillStyle = this.colorBody;
            crc2.arc(0, 0, 12, Math.PI * 0.5, Math.PI * 1.5);
            crc2.lineTo(15, -2);
            crc2.lineTo(15, 2);
            crc2.closePath();
            crc2.fill();
            //end body rotation and scaling
            crc2.scale(0.5, 1);
            crc2.rotate(Math.PI * -0.2);
            //draw Beak
            crc2.translate(-20, -20);
            crc2.beginPath();
            crc2.moveTo(0, -10);
            crc2.lineTo(-20, 0);
            crc2.lineTo(0, 10);
            crc2.closePath();
            crc2.fillStyle = "#ff9900";
            crc2.fill();
            //draw Head
            crc2.beginPath();
            crc2.fillStyle = this.colorHead;
            crc2.arc(0, 0, 10, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
        }
    }
})(L09_2_Vogelhaus_classes || (L09_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Bird.js.map