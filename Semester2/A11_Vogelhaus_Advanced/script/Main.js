"use strict";
/*
Aufgabe: L09.2_Vogelhaus_Classes
Name: Dennis Grützmacher
Matrikel: 271246
Datum:
Quellen:
*/
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
    window.addEventListener("load", handleLoad);
    let savedBackgroundImage;
    L11_Vogelhaus_advanced.xEntryBirdshouse = 655;
    L11_Vogelhaus_advanced.yEntryBirdshouse = 285;
    L11_Vogelhaus_advanced.ColorSpaces = [
        ["hsl(0, 0%, 100%)", "hsl(0, 0%, 96%)", "hsl(0, 0%, 92%)", "hsl(0, 0%, 88%)", "hsl(0, 0%, 84%)"],
        ["hsl(0, 0%, 100%)", "hsl(0, 0%, 65%)", "hsl(0, 0%, 50%)", "hsl(0, 0%, 45%)", "hsl(0, 0%, 30%)"] //mountains    
    ];
    let birdColors = [
        ["hsl(0, 100%, 45%)", "hsl(336, 100%, 50%)", "hsl(12, 100%, 55%)"],
        ["hsl(220, 100%, 60%)", "hsl(225, 100%, 45%)", "hsl(225, 100%, 35%)"],
        ["hsl(120, 60%, 45%)", "hsl(150, 100%, 40%)", "hsl(120, 100%, 30%)"] //Green  
    ];
    L11_Vogelhaus_advanced.animatedObjects = [];
    function checkforBird(event) {
        for (let i = 0; i < L11_Vogelhaus_advanced.animatedObjects.length; i++) {
            if ((L11_Vogelhaus_advanced.animatedObjects[i].xPos <= (event.offsetX + 10)) && (L11_Vogelhaus_advanced.animatedObjects[i].xPos >= (event.offsetX - 10))) {
                if ((L11_Vogelhaus_advanced.animatedObjects[i].yPos <= (event.offsetY + 10)) && (L11_Vogelhaus_advanced.animatedObjects[i].yPos >= (event.offsetY - 10))) {
                    if (L11_Vogelhaus_advanced.animatedObjects[i] instanceof L11_Vogelhaus_advanced.Bird) {
                        L11_Vogelhaus_advanced.animatedObjects.splice(i, 1);
                        return;
                    }
                    else {
                        continue;
                    }
                }
                else {
                    continue;
                }
            }
            else {
                continue;
            }
        }
        createBird(event);
    }
    function createBird(click) {
        let newbird = new L11_Vogelhaus_advanced.Bird(click.clientX, click.clientY, 2, L11_Vogelhaus_advanced.generateRandomBool(), "Flying", "RandomGround", 0, 0, 0, birdColors[L11_Vogelhaus_advanced.randomBetween(0, 2)][L11_Vogelhaus_advanced.randomBetween(0, 2)], birdColors[L11_Vogelhaus_advanced.randomBetween(0, 2)][L11_Vogelhaus_advanced.randomBetween(0, 2)]);
        L11_Vogelhaus_advanced.animatedObjects.push(newbird);
    }
    function handleLoad() {
        L11_Vogelhaus_advanced.canvas = document.querySelector("canvas");
        L11_Vogelhaus_advanced.crc2 = L11_Vogelhaus_advanced.canvas.getContext("2d");
        L11_Vogelhaus_advanced.canvas.addEventListener("click", checkforBird);
        prepareDrawing();
        prepareBackground();
        prepareMovingObjects();
        setInterval(drawImage, 25);
    }
    function prepareDrawing() {
        L11_Vogelhaus_advanced.horizonPoint = L11_Vogelhaus_advanced.randomBetween(150, 250);
        L11_Vogelhaus_advanced.heightFarTreeArea = L11_Vogelhaus_advanced.randomBetween(25, 50);
        L11_Vogelhaus_advanced.heightMiddleTreeArea = L11_Vogelhaus_advanced.randomBetween(30, 50);
        L11_Vogelhaus_advanced.heightNearTreeArea = L11_Vogelhaus_advanced.randomBetween(40, 60);
        L11_Vogelhaus_advanced.snowmanAreaY = L11_Vogelhaus_advanced.horizonPoint + L11_Vogelhaus_advanced.heightFarTreeArea + L11_Vogelhaus_advanced.heightMiddleTreeArea + L11_Vogelhaus_advanced.heightNearTreeArea;
        L11_Vogelhaus_advanced.snowmanAreaX = L11_Vogelhaus_advanced.randomBetween(0, 100);
        L11_Vogelhaus_advanced.cloudHeight = L11_Vogelhaus_advanced.horizonPoint / 3;
    }
    function prepareBackground() {
        L11_Vogelhaus_advanced.drawBackground();
        savedBackgroundImage = L11_Vogelhaus_advanced.crc2.getImageData(0, 0, L11_Vogelhaus_advanced.canvas.width, L11_Vogelhaus_advanced.canvas.height);
    }
    function prepareMovingObjects() {
        for (let i = 0; i < 30; i++) {
            let bird = new L11_Vogelhaus_advanced.Bird(L11_Vogelhaus_advanced.randomBetween(L11_Vogelhaus_advanced.snowmanAreaX + 50, L11_Vogelhaus_advanced.canvas.width), -25, L11_Vogelhaus_advanced.randomBetween(0, 6), L11_Vogelhaus_advanced.generateRandomBool(), "Flying", "RandomGround", 0, 0, 0, birdColors[L11_Vogelhaus_advanced.randomBetween(0, 2)][L11_Vogelhaus_advanced.randomBetween(0, 2)], birdColors[L11_Vogelhaus_advanced.randomBetween(0, 2)][L11_Vogelhaus_advanced.randomBetween(0, 2)]);
            L11_Vogelhaus_advanced.animatedObjects.push(bird);
        }
        for (let i = 0; i < 200; i++) {
            let snowflake = new L11_Vogelhaus_advanced.Snowflake(L11_Vogelhaus_advanced.randomBetween(0, L11_Vogelhaus_advanced.canvas.width), L11_Vogelhaus_advanced.randomBetween(0, L11_Vogelhaus_advanced.canvas.height), 0, L11_Vogelhaus_advanced.generateRandomBool(), "Falling", "RandomGround", 0, 0, 0);
            L11_Vogelhaus_advanced.animatedObjects.push(snowflake);
            console.log(L11_Vogelhaus_advanced.animatedObjects);
        }
    }
    function drawImage() {
        for (let i = 0; i < L11_Vogelhaus_advanced.animatedObjects.length; i++) {
            if (L11_Vogelhaus_advanced.animatedObjects[i] instanceof L11_Vogelhaus_advanced.Bird) {
                let bird1 = L11_Vogelhaus_advanced.animatedObjects[i];
                bird1.update();
            }
            if (L11_Vogelhaus_advanced.animatedObjects[i] instanceof L11_Vogelhaus_advanced.Snowflake) {
                let snowflake1 = L11_Vogelhaus_advanced.animatedObjects[i];
                snowflake1.update();
            }
        }
        L11_Vogelhaus_advanced.crc2.clearRect(0, 0, L11_Vogelhaus_advanced.canvas.width, L11_Vogelhaus_advanced.canvas.height);
        L11_Vogelhaus_advanced.crc2.putImageData(savedBackgroundImage, 0, 0);
        for (let j = 6; j >= 0; j--) {
            for (let i = 0; i < L11_Vogelhaus_advanced.animatedObjects.length; i++) {
                if (L11_Vogelhaus_advanced.animatedObjects[i].zLevel == j) {
                    if (L11_Vogelhaus_advanced.animatedObjects[i] instanceof L11_Vogelhaus_advanced.Bird) {
                        let bird1 = L11_Vogelhaus_advanced.animatedObjects[i];
                        bird1.draw();
                    }
                    if (L11_Vogelhaus_advanced.animatedObjects[i] instanceof L11_Vogelhaus_advanced.Snowflake) {
                        let snowflake1 = L11_Vogelhaus_advanced.animatedObjects[i];
                        snowflake1.draw();
                    }
                }
            }
            if (j == 3) {
                L11_Vogelhaus_advanced.crc2.translate(750, L11_Vogelhaus_advanced.crc2.canvas.height - 60);
                L11_Vogelhaus_advanced.birdshouse = new L11_Vogelhaus_advanced.Birdshouse;
                L11_Vogelhaus_advanced.birdshouse.drawBase();
                L11_Vogelhaus_advanced.crc2.resetTransform();
            }
            if (j == 1) {
                L11_Vogelhaus_advanced.crc2.translate(750, L11_Vogelhaus_advanced.crc2.canvas.height - 60);
                L11_Vogelhaus_advanced.birdshouse.drawTop();
                L11_Vogelhaus_advanced.crc2.resetTransform();
            }
        }
    }
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=Main.js.map