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
    class Bird extends L10_2_Vogelhaus_classes.MovingObject {
        rotation;
        wingFlapping;
        colorHead;
        colorBody;
        constructor(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal, _colorHead, _colorBody) {
            super(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal);
            this.setBird(_colorHead, _colorBody);
        }
        setBird(_colorHead, _colorBody) {
            this.xGoal = L10_2_Vogelhaus_classes.randomBetween(L10_2_Vogelhaus_classes.snowmanAreaX + 50, L10_2_Vogelhaus_classes.canvas.width);
            this.zGoal = L10_2_Vogelhaus_classes.randomBetween(0, 6);
            this.yGoal = L10_2_Vogelhaus_classes.canvas.height - (this.zGoal * 20);
            this.colorHead = _colorHead;
            this.colorBody = _colorBody;
            this.rotation = 0;
            this.wingFlapping = false;
        }
        draw() {
            L10_2_Vogelhaus_classes.crc2.translate(this.xPos, this.yPos);
            if (this.direction == true) {
                L10_2_Vogelhaus_classes.crc2.scale(-1, 1);
            }
            if (this.zLevel > 0) {
                L10_2_Vogelhaus_classes.crc2.scale(1 - this.zLevel / 10, 1 - this.zLevel / 10);
            }
            //draw Feet
            if (this.status !== "Flying") {
                L10_2_Vogelhaus_classes.crc2.beginPath();
                L10_2_Vogelhaus_classes.crc2.moveTo(-5, 0);
                L10_2_Vogelhaus_classes.crc2.lineTo(-5, 20);
                L10_2_Vogelhaus_classes.crc2.strokeStyle = "#000000";
                L10_2_Vogelhaus_classes.crc2.closePath();
                L10_2_Vogelhaus_classes.crc2.stroke();
            }
            //draw Body
            L10_2_Vogelhaus_classes.crc2.rotate(Math.PI * this.rotation);
            L10_2_Vogelhaus_classes.crc2.rotate(Math.PI * 0.2);
            L10_2_Vogelhaus_classes.crc2.scale(2, 1);
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = this.colorBody;
            L10_2_Vogelhaus_classes.crc2.arc(0, 0, 12, Math.PI * 0.5, Math.PI * 1.5);
            L10_2_Vogelhaus_classes.crc2.lineTo(15, -2);
            L10_2_Vogelhaus_classes.crc2.lineTo(15, 2);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            //draw Wing
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = this.colorHead;
            L10_2_Vogelhaus_classes.crc2.scale(1.5, 1);
            L10_2_Vogelhaus_classes.crc2.arc(0, 0, 5, 0, Math.PI);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            if (this.status == "Flying") {
                if (this.wingFlapping == true) {
                    L10_2_Vogelhaus_classes.crc2.beginPath();
                    L10_2_Vogelhaus_classes.crc2.fillStyle = this.colorHead;
                    L10_2_Vogelhaus_classes.crc2.scale(1, 5);
                    L10_2_Vogelhaus_classes.crc2.arc(0, 0, 5, Math.PI, Math.PI * 2);
                    L10_2_Vogelhaus_classes.crc2.closePath();
                    L10_2_Vogelhaus_classes.crc2.fill();
                    L10_2_Vogelhaus_classes.crc2.scale(1, 0.2);
                    this.wingFlapping = false;
                }
                else {
                    this.wingFlapping = true;
                }
            }
            L10_2_Vogelhaus_classes.crc2.scale(0.75, 1);
            //end body rotation and scaling
            L10_2_Vogelhaus_classes.crc2.scale(0.5, 1);
            L10_2_Vogelhaus_classes.crc2.rotate(Math.PI * -0.2);
            //draw Beak
            L10_2_Vogelhaus_classes.crc2.translate(-20, -20);
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.moveTo(0, -10);
            L10_2_Vogelhaus_classes.crc2.lineTo(-20, 0);
            L10_2_Vogelhaus_classes.crc2.lineTo(0, 10);
            L10_2_Vogelhaus_classes.crc2.fillStyle = "#ff9900";
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            //draw Head
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = this.colorHead;
            L10_2_Vogelhaus_classes.crc2.arc(0, 0, 10, 0, Math.PI * 2);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fill();
            L10_2_Vogelhaus_classes.crc2.resetTransform();
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
                        if (L10_2_Vogelhaus_classes.randomBetween(1, 50) == 25) {
                            this.status = "Flying";
                            this.goal = "EntryBirdshouse";
                            this.xGoal = L10_2_Vogelhaus_classes.xEntryBirdshouse;
                            this.yGoal = L10_2_Vogelhaus_classes.yEntryBirdshouse;
                            this.zGoal = 3;
                        }
                        else {
                            this.status = "FeedingDOWN";
                        }
                    }
                }
                else if (this.status == "Flying" && this.goal == "EntryBirdshouse") {
                    this.xGoal = L10_2_Vogelhaus_classes.xEntryBirdshouse + 80;
                    this.goal = "InsideBirdshouse";
                    this.status = "GoingIntoBirdshouse";
                }
                else if (this.status == "GoingIntoBirdshouse" && this.goal == "InsideBirdshouse") {
                    if (L10_2_Vogelhaus_classes.randomBetween(1, 200) == 100) {
                        this.xGoal = L10_2_Vogelhaus_classes.xEntryBirdshouse;
                        this.goal = "EntryBirdshouse";
                        this.status = "LeavingBirdshouse";
                    }
                }
                else if (this.status == "LeavingBirdshouse" && this.goal == "EntryBirdshouse") {
                    if (L10_2_Vogelhaus_classes.randomBetween(0, 1) == 1) {
                        this.status = "Flying";
                        this.goal = "RandomGround";
                        this.xGoal = L10_2_Vogelhaus_classes.randomBetween(L10_2_Vogelhaus_classes.snowmanAreaX + 50, L10_2_Vogelhaus_classes.canvas.width);
                        this.zGoal = L10_2_Vogelhaus_classes.randomBetween(0, 6);
                        this.yGoal = L10_2_Vogelhaus_classes.canvas.height - (this.zGoal * 20);
                    }
                    else if (L10_2_Vogelhaus_classes.randomBetween(0, 5) == 5) {
                        this.status = "Flying";
                        this.goal = "RandomSky";
                        this.xGoal = L10_2_Vogelhaus_classes.randomBetween(0, L10_2_Vogelhaus_classes.canvas.width);
                        this.zGoal = L10_2_Vogelhaus_classes.randomBetween(0, 6);
                        this.yGoal = -50;
                    }
                }
                else if (this.status == "Flying" && this.goal == "RandomSky") {
                    if (L10_2_Vogelhaus_classes.randomBetween(0, 200) == 100) {
                        this.status = "Flying";
                        this.goal = "RandomGround";
                        this.xGoal = L10_2_Vogelhaus_classes.randomBetween(L10_2_Vogelhaus_classes.snowmanAreaX + 50, L10_2_Vogelhaus_classes.canvas.width);
                        this.zGoal = L10_2_Vogelhaus_classes.randomBetween(0, 6);
                        this.yGoal = L10_2_Vogelhaus_classes.canvas.height - (this.zGoal * 20);
                    }
                    else if (L10_2_Vogelhaus_classes.randomBetween(0, 200) == 100) {
                        this.status = "Flying";
                        this.goal = "EntryBirdshouse";
                        this.xGoal = L10_2_Vogelhaus_classes.xEntryBirdshouse;
                        this.yGoal = L10_2_Vogelhaus_classes.yEntryBirdshouse;
                        this.zGoal = 3;
                    }
                }
            }
            else {
                super.move();
            }
        }
    }
    L10_2_Vogelhaus_classes.Bird = Bird;
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Bird.js.map