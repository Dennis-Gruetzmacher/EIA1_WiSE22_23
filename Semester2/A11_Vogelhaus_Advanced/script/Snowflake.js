"use strict";
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
    class Snowflake extends L11_Vogelhaus_advanced.MovingObject {
        constructor(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal) {
            super(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal);
            this.setSnowflake();
        }
        setSnowflake() {
            this.xGoal = this.xPos;
            this.yGoal = L11_Vogelhaus_advanced.canvas.height;
        }
        draw() {
            L11_Vogelhaus_advanced.crc2.translate(this.xPos, this.yPos);
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.fillStyle = "#FFF";
            L11_Vogelhaus_advanced.crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            L11_Vogelhaus_advanced.crc2.fill();
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.resetTransform();
        }
        update() {
            if (super.checkGoalreached() == true) {
                this.yPos = 0;
                this.xPos = L11_Vogelhaus_advanced.randomBetween(0, L11_Vogelhaus_advanced.canvas.width);
                this.xGoal = this.xPos;
            }
            else {
                this.yPos += 5;
            }
        }
    }
    L11_Vogelhaus_advanced.Snowflake = Snowflake;
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=Snowflake.js.map