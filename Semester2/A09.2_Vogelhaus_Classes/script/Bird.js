"use strict";
var L09_2_Vogelhaus_classes;
(function (L09_2_Vogelhaus_classes) {
    class Bird {
        xPos;
        yPos;
        zLevel;
        direction;
        status;
        goal;
        xGoal;
        yGoal;
        zGoal;
        rotation;
        wingFlapping;
        colorHead;
        colorBody;
        constructor(_xPos, _yPos, _zLevel, _direction, _status, _goal, _colorHead, _colorBody) {
            this.set(_xPos, _yPos, _zLevel, _direction, _status, _goal, _colorHead, _colorBody);
        }
        set(_xPos, _yPos, _zLevel, _direction, _status, _goal, _colorHead, _colorBody) {
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.zLevel = _zLevel;
            this.direction = _direction;
            this.status = _status;
            this.goal = _goal;
            this.colorHead = _colorHead;
            this.colorBody = _colorBody;
            this.xGoal = L09_2_Vogelhaus_classes.randomBetween(L09_2_Vogelhaus_classes.snowmanAreaX + 50, L09_2_Vogelhaus_classes.canvas.width);
            this.rotation = 0;
            this.zGoal = L09_2_Vogelhaus_classes.randomBetween(0, 6);
            this.yGoal = L09_2_Vogelhaus_classes.canvas.height - (this.zGoal * 20);
            this.wingFlapping = false;
        }
        draw() {
            L09_2_Vogelhaus_classes.crc2.translate(this.xPos, this.yPos);
            if (this.direction == true) {
                L09_2_Vogelhaus_classes.crc2.scale(-1, 1);
            }
            if (this.zLevel > 0) {
                L09_2_Vogelhaus_classes.crc2.scale(1 - this.zLevel / 10, 1 - this.zLevel / 10);
            }
            //draw Feet
            if (this.status !== "Flying") {
                L09_2_Vogelhaus_classes.crc2.beginPath();
                L09_2_Vogelhaus_classes.crc2.moveTo(-5, 0);
                L09_2_Vogelhaus_classes.crc2.lineTo(-5, 20);
                L09_2_Vogelhaus_classes.crc2.strokeStyle = "#000000";
                L09_2_Vogelhaus_classes.crc2.closePath();
                L09_2_Vogelhaus_classes.crc2.stroke();
            }
            //draw Body
            L09_2_Vogelhaus_classes.crc2.rotate(Math.PI * this.rotation);
            L09_2_Vogelhaus_classes.crc2.rotate(Math.PI * 0.2);
            L09_2_Vogelhaus_classes.crc2.scale(2, 1);
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.crc2.fillStyle = this.colorBody;
            L09_2_Vogelhaus_classes.crc2.arc(0, 0, 12, Math.PI * 0.5, Math.PI * 1.5);
            L09_2_Vogelhaus_classes.crc2.lineTo(15, -2);
            L09_2_Vogelhaus_classes.crc2.lineTo(15, 2);
            L09_2_Vogelhaus_classes.crc2.closePath();
            L09_2_Vogelhaus_classes.crc2.fill();
            //draw Wing
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.crc2.fillStyle = this.colorHead;
            L09_2_Vogelhaus_classes.crc2.scale(1.5, 1);
            L09_2_Vogelhaus_classes.crc2.arc(0, 0, 5, 0, Math.PI);
            L09_2_Vogelhaus_classes.crc2.closePath();
            L09_2_Vogelhaus_classes.crc2.fill();
            if (this.status == "Flying") {
                if (this.wingFlapping == true) {
                    L09_2_Vogelhaus_classes.crc2.beginPath();
                    //crc2.fillStyle = this.colorHead;
                    L09_2_Vogelhaus_classes.crc2.scale(1, 5);
                    L09_2_Vogelhaus_classes.crc2.arc(0, 0, 5, Math.PI, Math.PI * 2);
                    L09_2_Vogelhaus_classes.crc2.closePath();
                    L09_2_Vogelhaus_classes.crc2.fill();
                    L09_2_Vogelhaus_classes.crc2.scale(1, 0.2);
                    this.wingFlapping = false;
                }
                else {
                    this.wingFlapping = true;
                }
            }
            L09_2_Vogelhaus_classes.crc2.scale(0.75, 1);
            //end body rotation and scaling
            L09_2_Vogelhaus_classes.crc2.scale(0.5, 1);
            L09_2_Vogelhaus_classes.crc2.rotate(Math.PI * -0.2);
            //draw Beak
            L09_2_Vogelhaus_classes.crc2.translate(-20, -20);
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.crc2.moveTo(0, -10);
            L09_2_Vogelhaus_classes.crc2.lineTo(-20, 0);
            L09_2_Vogelhaus_classes.crc2.lineTo(0, 10);
            L09_2_Vogelhaus_classes.crc2.fillStyle = "#ff9900";
            L09_2_Vogelhaus_classes.crc2.closePath();
            L09_2_Vogelhaus_classes.crc2.fill();
            //draw Head
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.crc2.fillStyle = this.colorHead;
            L09_2_Vogelhaus_classes.crc2.arc(0, 0, 10, 0, Math.PI * 2);
            L09_2_Vogelhaus_classes.crc2.closePath();
            L09_2_Vogelhaus_classes.crc2.fill();
            L09_2_Vogelhaus_classes.crc2.resetTransform();
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
        moveBird() {
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
        updateBird() {
            if (this.checkGoalreached() == true) {
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
                        if (L09_2_Vogelhaus_classes.randomBetween(1, 50) == 25) {
                            this.status = "Flying";
                            this.goal = "EntryBirdshouse";
                            this.xGoal = L09_2_Vogelhaus_classes.xEntryBirdshouse;
                            this.yGoal = L09_2_Vogelhaus_classes.yEntryBirdshouse;
                            this.zGoal = 3;
                        }
                        else {
                            this.status = "FeedingDOWN";
                        }
                    }
                }
                else if (this.status == "Flying" && this.goal == "EntryBirdshouse") {
                    this.xGoal = L09_2_Vogelhaus_classes.xEntryBirdshouse + 80;
                    this.goal = "InsideBirdshouse";
                    this.status = "GoingIntoBirdshouse";
                }
                else if (this.status == "GoingIntoBirdshouse" && this.goal == "InsideBirdshouse") {
                    if (L09_2_Vogelhaus_classes.randomBetween(1, 200) == 100) {
                        this.xGoal = L09_2_Vogelhaus_classes.xEntryBirdshouse;
                        this.goal = "EntryBirdshouse";
                        this.status = "LeavingBirdshouse";
                    }
                }
                else if (this.status == "LeavingBirdshouse" && this.goal == "EntryBirdshouse") {
                    if (L09_2_Vogelhaus_classes.randomBetween(0, 1) == 1) {
                        this.status = "Flying";
                        this.goal = "RandomGround";
                        this.xGoal = L09_2_Vogelhaus_classes.randomBetween(L09_2_Vogelhaus_classes.snowmanAreaX + 50, L09_2_Vogelhaus_classes.canvas.width);
                        this.zGoal = L09_2_Vogelhaus_classes.randomBetween(0, 6);
                        this.yGoal = L09_2_Vogelhaus_classes.canvas.height - (this.zGoal * 20);
                    }
                    else if (L09_2_Vogelhaus_classes.randomBetween(0, 5) == 5) {
                        this.status = "Flying";
                        this.goal = "RandomSky";
                        this.xGoal = L09_2_Vogelhaus_classes.randomBetween(0, L09_2_Vogelhaus_classes.canvas.width);
                        this.zGoal = L09_2_Vogelhaus_classes.randomBetween(0, 6);
                        this.yGoal = -50;
                    }
                }
                else if (this.status == "Flying" && this.goal == "RandomSky") {
                    if (L09_2_Vogelhaus_classes.randomBetween(0, 200) == 100) {
                        this.status = "Flying";
                        this.goal = "RandomGround";
                        this.xGoal = L09_2_Vogelhaus_classes.randomBetween(L09_2_Vogelhaus_classes.snowmanAreaX + 50, L09_2_Vogelhaus_classes.canvas.width);
                        this.zGoal = L09_2_Vogelhaus_classes.randomBetween(0, 6);
                        this.yGoal = L09_2_Vogelhaus_classes.canvas.height - (this.zGoal * 20);
                    }
                    else if (L09_2_Vogelhaus_classes.randomBetween(0, 200) == 100) {
                        this.status = "Flying";
                        this.goal = "EntryBirdshouse";
                        this.xGoal = L09_2_Vogelhaus_classes.xEntryBirdshouse;
                        this.yGoal = L09_2_Vogelhaus_classes.yEntryBirdshouse;
                        this.zGoal = 3;
                    }
                }
            }
            else {
                this.moveBird();
            }
            //this.draw();    
        }
    }
    L09_2_Vogelhaus_classes.Bird = Bird;
})(L09_2_Vogelhaus_classes || (L09_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Bird.js.map