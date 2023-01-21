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
    class Tree {
        widthTrunk;
        heightTrunk;
        width;
        height;
        scale;
        tint;
        constructor(_widthTrunk, _heightTrunk, _width, _height, _scale, _tint) {
            this.set(_widthTrunk, _heightTrunk, _width, _height, _scale, _tint);
        }
        set(_widthTrunk, _heightTrunk, _width, _height, _scale, _tint) {
            this.widthTrunk = _widthTrunk;
            this.heightTrunk = _heightTrunk;
            this.width = _width;
            this.height = _height;
            this.scale = _scale;
            this.tint = _tint;
        }
        draw() {
            L10_2_Vogelhaus_classes.crc2.scale(this.scale, this.scale);
            L10_2_Vogelhaus_classes.crc2.fillStyle = "hsl(30, 100%, " + this.tint + "%)";
            L10_2_Vogelhaus_classes.crc2.fillRect(-(this.widthTrunk / 2), 0, this.widthTrunk, -this.heightTrunk);
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.moveTo(0, -this.heightTrunk);
            L10_2_Vogelhaus_classes.crc2.lineTo(-(this.width / 2), -(this.heightTrunk));
            L10_2_Vogelhaus_classes.crc2.lineTo(0, -this.height);
            L10_2_Vogelhaus_classes.crc2.lineTo(this.width / 2, -(this.heightTrunk));
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = "hsl(140, 100%, " + this.tint + "%)";
            L10_2_Vogelhaus_classes.crc2.fill();
        }
    }
    L10_2_Vogelhaus_classes.Tree = Tree;
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Tree.js.map