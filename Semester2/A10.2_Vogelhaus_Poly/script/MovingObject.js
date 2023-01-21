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
    class MovingObject {
        xPos;
        yPos;
        zLevel;
        direction;
        status;
        goal;
        xGoal;
        yGoal;
        zGoal;
        constructor(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal) {
            this.set(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal);
        }
        set(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal) {
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.zLevel = _zLevel;
            this.direction = _direction;
            this.status = _status;
            this.goal = _goal;
            this.xGoal = _xGoal;
            this.yGoal = _yGoal;
            this.zGoal = _zGoal;
        }
        checkGoalreached() {
            if ((this.yPos + 5 >= this.yGoal) && (this.xPos + 5 >= this.xGoal) && (this.zLevel == this.zGoal)) {
                if ((this.yPos - 5 <= this.yGoal) && (this.xPos - 5 <= this.xGoal)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        move() {
            if (this.yGoal >= this.yPos) {
                this.yPos += 5;
                if (this.xGoal >= this.xPos) {
                    this.direction = true;
                    this.xPos += 5;
                    if (this.zLevel >= this.zGoal) {
                        this.zLevel -= 1;
                    }
                    else if (this.zLevel <= this.zGoal) {
                        this.zLevel += 1;
                    }
                }
                else if (this.xGoal <= this.xPos) {
                    this.direction = false;
                    this.xPos -= 5;
                    if (this.zLevel >= this.zGoal) {
                        this.zLevel -= 1;
                    }
                    else if (this.zLevel <= this.zGoal) {
                        this.zLevel += 1;
                    }
                }
            }
            else if (this.yGoal <= this.yPos) {
                this.yPos -= 5;
                if (this.xGoal >= this.xPos) {
                    this.direction = true;
                    this.xPos += 5;
                    if (this.zLevel >= this.zGoal) {
                        this.zLevel -= 1;
                    }
                    else if (this.zLevel <= this.zGoal) {
                        this.zLevel += 1;
                    }
                }
                else if (this.xGoal <= this.xPos) {
                    this.direction = false;
                    this.xPos -= 5;
                    if (this.zLevel >= this.zGoal) {
                        this.zLevel -= 1;
                    }
                    else if (this.zLevel <= this.zGoal) {
                        this.zLevel += 1;
                    }
                }
            }
        }
    }
    L10_2_Vogelhaus_classes.MovingObject = MovingObject;
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=MovingObject.js.map