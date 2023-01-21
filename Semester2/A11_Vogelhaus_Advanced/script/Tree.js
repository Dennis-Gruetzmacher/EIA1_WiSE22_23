"use strict";
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
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
            L11_Vogelhaus_advanced.crc2.scale(this.scale, this.scale);
            L11_Vogelhaus_advanced.crc2.fillStyle = "hsl(30, 100%, " + this.tint + "%)";
            L11_Vogelhaus_advanced.crc2.fillRect(-(this.widthTrunk / 2), 0, this.widthTrunk, -this.heightTrunk);
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.moveTo(0, -this.heightTrunk);
            L11_Vogelhaus_advanced.crc2.lineTo(-(this.width / 2), -(this.heightTrunk));
            L11_Vogelhaus_advanced.crc2.lineTo(0, -this.height);
            L11_Vogelhaus_advanced.crc2.lineTo(this.width / 2, -(this.heightTrunk));
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fillStyle = "hsl(140, 100%, " + this.tint + "%)";
            L11_Vogelhaus_advanced.crc2.fill();
        }
    }
    L11_Vogelhaus_advanced.Tree = Tree;
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=Tree.js.map