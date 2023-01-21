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
    window.addEventListener("load", handleLoad);
    let savedBackgroundImage;
    L10_2_Vogelhaus_classes.xEntryBirdshouse = 655;
    L10_2_Vogelhaus_classes.yEntryBirdshouse = 285;
    L10_2_Vogelhaus_classes.ColorSpaces = [
        ["hsl(0, 0%, 100%)", "hsl(0, 0%, 96%)", "hsl(0, 0%, 92%)", "hsl(0, 0%, 88%)", "hsl(0, 0%, 84%)"],
        ["hsl(0, 0%, 100%)", "hsl(0, 0%, 65%)", "hsl(0, 0%, 50%)", "hsl(0, 0%, 45%)", "hsl(0, 0%, 30%)"] //mountains    
    ];
    let birdColors = [
        ["hsl(0, 100%, 45%)", "hsl(336, 100%, 50%)", "hsl(12, 100%, 55%)"],
        ["hsl(220, 100%, 60%)", "hsl(225, 100%, 45%)", "hsl(225, 100%, 35%)"],
        ["hsl(120, 60%, 45%)", "hsl(150, 100%, 40%)", "hsl(120, 100%, 30%)"] //Green  
    ];
    L10_2_Vogelhaus_classes.animatedObjects = [];
    function handleLoad() {
        L10_2_Vogelhaus_classes.canvas = document.querySelector("canvas");
        L10_2_Vogelhaus_classes.crc2 = L10_2_Vogelhaus_classes.canvas.getContext("2d");
        prepareDrawing();
        prepareBackground();
        prepareMovingObjects();
        setInterval(drawImage, 25);
    }
    function prepareDrawing() {
        L10_2_Vogelhaus_classes.horizonPoint = L10_2_Vogelhaus_classes.randomBetween(150, 250);
        L10_2_Vogelhaus_classes.heightFarTreeArea = L10_2_Vogelhaus_classes.randomBetween(25, 50);
        L10_2_Vogelhaus_classes.heightMiddleTreeArea = L10_2_Vogelhaus_classes.randomBetween(30, 50);
        L10_2_Vogelhaus_classes.heightNearTreeArea = L10_2_Vogelhaus_classes.randomBetween(40, 60);
        L10_2_Vogelhaus_classes.snowmanAreaY = L10_2_Vogelhaus_classes.horizonPoint + L10_2_Vogelhaus_classes.heightFarTreeArea + L10_2_Vogelhaus_classes.heightMiddleTreeArea + L10_2_Vogelhaus_classes.heightNearTreeArea;
        L10_2_Vogelhaus_classes.snowmanAreaX = L10_2_Vogelhaus_classes.randomBetween(0, 100);
        L10_2_Vogelhaus_classes.cloudHeight = L10_2_Vogelhaus_classes.horizonPoint / 3;
    }
    function prepareBackground() {
        L10_2_Vogelhaus_classes.drawBackground();
        savedBackgroundImage = L10_2_Vogelhaus_classes.crc2.getImageData(0, 0, L10_2_Vogelhaus_classes.canvas.width, L10_2_Vogelhaus_classes.canvas.height);
    }
    function prepareMovingObjects() {
        for (let i = 0; i < 30; i++) {
            let bird = new L10_2_Vogelhaus_classes.Bird(L10_2_Vogelhaus_classes.randomBetween(L10_2_Vogelhaus_classes.snowmanAreaX + 50, L10_2_Vogelhaus_classes.canvas.width), -25, L10_2_Vogelhaus_classes.randomBetween(0, 6), L10_2_Vogelhaus_classes.generateRandomBool(), "Flying", "RandomGround", 0, 0, 0, birdColors[L10_2_Vogelhaus_classes.randomBetween(0, 2)][L10_2_Vogelhaus_classes.randomBetween(0, 2)], birdColors[L10_2_Vogelhaus_classes.randomBetween(0, 2)][L10_2_Vogelhaus_classes.randomBetween(0, 2)]);
            L10_2_Vogelhaus_classes.animatedObjects.push(bird);
        }
        for (let i = 0; i < 200; i++) {
            let snowflake = new L10_2_Vogelhaus_classes.Snowflake(L10_2_Vogelhaus_classes.randomBetween(0, L10_2_Vogelhaus_classes.canvas.width), L10_2_Vogelhaus_classes.randomBetween(0, L10_2_Vogelhaus_classes.canvas.height), 0, L10_2_Vogelhaus_classes.generateRandomBool(), "Falling", "RandomGround", 0, 0, 0);
            L10_2_Vogelhaus_classes.animatedObjects.push(snowflake);
            console.log(L10_2_Vogelhaus_classes.animatedObjects);
        }
    }
    function drawImage() {
        for (let i = 0; i < L10_2_Vogelhaus_classes.animatedObjects.length; i++) {
            if (L10_2_Vogelhaus_classes.animatedObjects[i] instanceof L10_2_Vogelhaus_classes.Bird) {
                let bird1 = L10_2_Vogelhaus_classes.animatedObjects[i];
                bird1.update();
            }
            if (L10_2_Vogelhaus_classes.animatedObjects[i] instanceof L10_2_Vogelhaus_classes.Snowflake) {
                let snowflake1 = L10_2_Vogelhaus_classes.animatedObjects[i];
                snowflake1.update();
            }
        }
        L10_2_Vogelhaus_classes.crc2.clearRect(0, 0, L10_2_Vogelhaus_classes.canvas.width, L10_2_Vogelhaus_classes.canvas.height);
        L10_2_Vogelhaus_classes.crc2.putImageData(savedBackgroundImage, 0, 0);
        for (let j = 6; j >= 0; j--) {
            for (let i = 0; i < L10_2_Vogelhaus_classes.animatedObjects.length; i++) {
                if (L10_2_Vogelhaus_classes.animatedObjects[i].zLevel == j) {
                    if (L10_2_Vogelhaus_classes.animatedObjects[i] instanceof L10_2_Vogelhaus_classes.Bird) {
                        let bird1 = L10_2_Vogelhaus_classes.animatedObjects[i];
                        bird1.draw();
                    }
                    if (L10_2_Vogelhaus_classes.animatedObjects[i] instanceof L10_2_Vogelhaus_classes.Snowflake) {
                        let snowflake1 = L10_2_Vogelhaus_classes.animatedObjects[i];
                        snowflake1.draw();
                    }
                }
            }
            if (j == 3) {
                L10_2_Vogelhaus_classes.crc2.translate(750, L10_2_Vogelhaus_classes.crc2.canvas.height - 60);
                L10_2_Vogelhaus_classes.birdshouse = new L10_2_Vogelhaus_classes.Birdshouse;
                L10_2_Vogelhaus_classes.birdshouse.drawBase();
                L10_2_Vogelhaus_classes.crc2.resetTransform();
            }
            if (j == 1) {
                L10_2_Vogelhaus_classes.crc2.translate(750, L10_2_Vogelhaus_classes.crc2.canvas.height - 60);
                L10_2_Vogelhaus_classes.birdshouse.drawTop();
                L10_2_Vogelhaus_classes.crc2.resetTransform();
            }
        }
    }
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Main.js.map