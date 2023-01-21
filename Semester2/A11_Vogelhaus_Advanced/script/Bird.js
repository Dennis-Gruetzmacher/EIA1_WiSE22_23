"use strict";
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
    class Bird extends L11_Vogelhaus_advanced.MovingObject {
        rotation;
        wingFlapping;
        colorHead;
        colorBody;
        constructor(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal, _colorHead, _colorBody) {
            super(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal);
            this.setBird(_colorHead, _colorBody);
        }
        setBird(_colorHead, _colorBody) {
            this.xGoal = L11_Vogelhaus_advanced.randomBetween(L11_Vogelhaus_advanced.snowmanAreaX + 50, L11_Vogelhaus_advanced.canvas.width);
            this.zGoal = L11_Vogelhaus_advanced.randomBetween(0, 6);
            this.yGoal = L11_Vogelhaus_advanced.canvas.height - (this.zGoal * 20);
            this.colorHead = _colorHead;
            this.colorBody = _colorBody;
            this.rotation = 0;
            this.wingFlapping = false;
        }
        draw() {
            L11_Vogelhaus_advanced.crc2.translate(this.xPos, this.yPos);
            if (this.direction == true) {
                L11_Vogelhaus_advanced.crc2.scale(-1, 1);
            }
            if (this.zLevel > 0) {
                L11_Vogelhaus_advanced.crc2.scale(1 - this.zLevel / 10, 1 - this.zLevel / 10);
            }
            //draw Feet
            if (this.status !== "Flying") {
                L11_Vogelhaus_advanced.crc2.beginPath();
                L11_Vogelhaus_advanced.crc2.moveTo(-5, 0);
                L11_Vogelhaus_advanced.crc2.lineTo(-5, 20);
                L11_Vogelhaus_advanced.crc2.strokeStyle = "#000000";
                L11_Vogelhaus_advanced.crc2.closePath();
                L11_Vogelhaus_advanced.crc2.stroke();
            }
            //draw Body
            L11_Vogelhaus_advanced.crc2.rotate(Math.PI * this.rotation);
            L11_Vogelhaus_advanced.crc2.rotate(Math.PI * 0.2);
            L11_Vogelhaus_advanced.crc2.scale(2, 1);
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.fillStyle = this.colorBody;
            L11_Vogelhaus_advanced.crc2.arc(0, 0, 12, Math.PI * 0.5, Math.PI * 1.5);
            L11_Vogelhaus_advanced.crc2.lineTo(15, -2);
            L11_Vogelhaus_advanced.crc2.lineTo(15, 2);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            //draw Wing
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.fillStyle = this.colorHead;
            L11_Vogelhaus_advanced.crc2.scale(1.5, 1);
            L11_Vogelhaus_advanced.crc2.arc(0, 0, 5, 0, Math.PI);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            if (this.status == "Flying") {
                if (this.wingFlapping == true) {
                    L11_Vogelhaus_advanced.crc2.beginPath();
                    L11_Vogelhaus_advanced.crc2.fillStyle = this.colorHead;
                    L11_Vogelhaus_advanced.crc2.scale(1, 5);
                    L11_Vogelhaus_advanced.crc2.arc(0, 0, 5, Math.PI, Math.PI * 2);
                    L11_Vogelhaus_advanced.crc2.closePath();
                    L11_Vogelhaus_advanced.crc2.fill();
                    L11_Vogelhaus_advanced.crc2.scale(1, 0.2);
                    this.wingFlapping = false;
                }
                else {
                    this.wingFlapping = true;
                }
            }
            L11_Vogelhaus_advanced.crc2.scale(0.75, 1);
            //end body rotation and scaling
            L11_Vogelhaus_advanced.crc2.scale(0.5, 1);
            L11_Vogelhaus_advanced.crc2.rotate(Math.PI * -0.2);
            //draw Beak
            L11_Vogelhaus_advanced.crc2.translate(-20, -20);
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.moveTo(0, -10);
            L11_Vogelhaus_advanced.crc2.lineTo(-20, 0);
            L11_Vogelhaus_advanced.crc2.lineTo(0, 10);
            L11_Vogelhaus_advanced.crc2.fillStyle = "#ff9900";
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            //draw Head
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.fillStyle = this.colorHead;
            L11_Vogelhaus_advanced.crc2.arc(0, 0, 10, 0, Math.PI * 2);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fill();
            L11_Vogelhaus_advanced.crc2.resetTransform();
        }
        update() {
            if (super.checkGoalreached() == true) {
                if (this.status == "Flying" && this.goal == "RandomGround") {
                    this.status = "FeedingDOWN";
                }
                else if (this.status == "FeedingDOWN" && this.goal == "RandomGround") {
                    if (this.rotation > -0.4) {
                        this.rotation = this.rotation - 0.03;
                    }
                    else if (this.rotation <= -0.4) {
                        this.status = "FeedingUP";
                    }
                }
                else if (this.status == "FeedingUP" && this.goal == "RandomGround") {
                    if (this.rotation < 0) {
                        this.rotation = this.rotation + 0.03;
                    }
                    else if (this.rotation >= 0) {
                        if (L11_Vogelhaus_advanced.randomBetween(1, 50) == 25) {
                            this.status = "Flying";
                            this.goal = "EntryBirdshouse";
                            this.xGoal = L11_Vogelhaus_advanced.xEntryBirdshouse;
                            this.yGoal = L11_Vogelhaus_advanced.yEntryBirdshouse;
                            this.zGoal = 3;
                        }
                        else {
                            this.status = "FeedingDOWN";
                        }
                    }
                }
                else if (this.status == "Flying" && this.goal == "EntryBirdshouse") {
                    this.xGoal = L11_Vogelhaus_advanced.xEntryBirdshouse + 80;
                    this.goal = "InsideBirdshouse";
                    this.status = "GoingIntoBirdshouse";
                }
                else if (this.status == "GoingIntoBirdshouse" && this.goal == "InsideBirdshouse") {
                    if (L11_Vogelhaus_advanced.randomBetween(1, 200) == 100) {
                        this.xGoal = L11_Vogelhaus_advanced.xEntryBirdshouse;
                        this.goal = "EntryBirdshouse";
                        this.status = "LeavingBirdshouse";
                    }
                }
                else if (this.status == "LeavingBirdshouse" && this.goal == "EntryBirdshouse") {
                    if (L11_Vogelhaus_advanced.randomBetween(0, 1) == 1) {
                        this.status = "Flying";
                        this.goal = "RandomGround";
                        this.xGoal = L11_Vogelhaus_advanced.randomBetween(L11_Vogelhaus_advanced.snowmanAreaX + 50, L11_Vogelhaus_advanced.canvas.width);
                        this.zGoal = L11_Vogelhaus_advanced.randomBetween(0, 6);
                        this.yGoal = L11_Vogelhaus_advanced.canvas.height - (this.zGoal * 20);
                    }
                    else if (L11_Vogelhaus_advanced.randomBetween(0, 5) == 5) {
                        this.status = "Flying";
                        this.goal = "RandomSky";
                        this.xGoal = L11_Vogelhaus_advanced.randomBetween(0, L11_Vogelhaus_advanced.canvas.width);
                        this.zGoal = L11_Vogelhaus_advanced.randomBetween(0, 6);
                        this.yGoal = -50;
                    }
                }
                else if (this.status == "Flying" && this.goal == "RandomSky") {
                    if (L11_Vogelhaus_advanced.randomBetween(0, 200) == 100) {
                        this.status = "Flying";
                        this.goal = "RandomGround";
                        this.xGoal = L11_Vogelhaus_advanced.randomBetween(L11_Vogelhaus_advanced.snowmanAreaX + 50, L11_Vogelhaus_advanced.canvas.width);
                        this.zGoal = L11_Vogelhaus_advanced.randomBetween(0, 6);
                        this.yGoal = L11_Vogelhaus_advanced.canvas.height - (this.zGoal * 20);
                    }
                    else if (L11_Vogelhaus_advanced.randomBetween(0, 200) == 100) {
                        this.status = "Flying";
                        this.goal = "EntryBirdshouse";
                        this.xGoal = L11_Vogelhaus_advanced.xEntryBirdshouse;
                        this.yGoal = L11_Vogelhaus_advanced.yEntryBirdshouse;
                        this.zGoal = 3;
                    }
                }
            }
            else {
                super.move();
            }
        }
    }
    L11_Vogelhaus_advanced.Bird = Bird;
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=Bird.js.map