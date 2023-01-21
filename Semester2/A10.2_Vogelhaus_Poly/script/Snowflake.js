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
    class Snowflake extends L10_2_Vogelhaus_classes.MovingObject {
        constructor(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal) {
            super(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal);
            this.setSnowflake();
        }
        setSnowflake() {
            this.xGoal = this.xPos;
            this.yGoal = L10_2_Vogelhaus_classes.canvas.height;
        }
        draw() {
            L10_2_Vogelhaus_classes.crc2.translate(this.xPos, this.yPos);
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#FFF";
            L10_2_Vogelhaus_classes.crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            L10_2_Vogelhaus_classes.crc2.fill();
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.resetTransform();
        }
        update() {
            if (super.checkGoalreached() == true) {
                this.yPos = 0;
                this.xPos = L10_2_Vogelhaus_classes.randomBetween(0, L10_2_Vogelhaus_classes.canvas.width);
                this.xGoal = this.xPos;
            }
            else {
                this.yPos += 5;
            }
        }
    }
    L10_2_Vogelhaus_classes.Snowflake = Snowflake;
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Snowflake.js.map