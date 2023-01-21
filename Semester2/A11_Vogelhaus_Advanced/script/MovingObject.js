"use strict";
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
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
    L11_Vogelhaus_advanced.MovingObject = MovingObject;
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=MovingObject.js.map