"use strict";
/*
Aufgabe: L09.2_Vogelhaus_Classes
Name: Dennis Grützmacher
Matrikel: 271246
Datum:
Quellen:
*/
var L09_2_Vogelhaus_classes;
(function (L09_2_Vogelhaus_classes) {
    window.addEventListener("load", handleLoad);
    let savedBackgroundImage;
    L09_2_Vogelhaus_classes.xEntryBirdshouse = 655;
    L09_2_Vogelhaus_classes.yEntryBirdshouse = 285;
    L09_2_Vogelhaus_classes.ColorSpaces = [
        ["hsl(0, 0%, 100%)", "hsl(0, 0%, 96%)", "hsl(0, 0%, 92%)", "hsl(0, 0%, 88%)", "hsl(0, 0%, 84%)"],
        ["hsl(0, 0%, 100%)", "hsl(0, 0%, 65%)", "hsl(0, 0%, 50%)", "hsl(0, 0%, 45%)", "hsl(0, 0%, 30%)"] //mountains    
    ];
    let birdColors = [
        ["hsl(0, 100%, 45%)", "hsl(336, 100%, 50%)", "hsl(12, 100%, 55%)"],
        ["hsl(220, 100%, 60%)", "hsl(225, 100%, 45%)", "hsl(225, 100%, 35%)"],
        ["hsl(120, 60%, 45%)", "hsl(150, 100%, 40%)", "hsl(120, 100%, 30%)"] //Green  
    ];
    L09_2_Vogelhaus_classes.animatedBirds = [];
    function handleLoad() {
        L09_2_Vogelhaus_classes.canvas = document.querySelector("canvas");
        L09_2_Vogelhaus_classes.crc2 = L09_2_Vogelhaus_classes.canvas.getContext("2d");
        prepareDrawing();
        prepareBackground();
        prepareBirds();
        setInterval(drawImage, 25);
    }
    function prepareDrawing() {
        L09_2_Vogelhaus_classes.horizonPoint = L09_2_Vogelhaus_classes.randomBetween(150, 250);
        L09_2_Vogelhaus_classes.heightFarTreeArea = L09_2_Vogelhaus_classes.randomBetween(25, 50);
        L09_2_Vogelhaus_classes.heightMiddleTreeArea = L09_2_Vogelhaus_classes.randomBetween(30, 50);
        L09_2_Vogelhaus_classes.heightNearTreeArea = L09_2_Vogelhaus_classes.randomBetween(40, 60);
        L09_2_Vogelhaus_classes.snowmanAreaY = L09_2_Vogelhaus_classes.horizonPoint + L09_2_Vogelhaus_classes.heightFarTreeArea + L09_2_Vogelhaus_classes.heightMiddleTreeArea + L09_2_Vogelhaus_classes.heightNearTreeArea;
        L09_2_Vogelhaus_classes.snowmanAreaX = L09_2_Vogelhaus_classes.randomBetween(0, 100);
        L09_2_Vogelhaus_classes.cloudHeight = L09_2_Vogelhaus_classes.horizonPoint / 3;
    }
    function prepareBackground() {
        L09_2_Vogelhaus_classes.drawBackground();
        savedBackgroundImage = L09_2_Vogelhaus_classes.crc2.getImageData(0, 0, L09_2_Vogelhaus_classes.canvas.width, L09_2_Vogelhaus_classes.canvas.height);
    }
    function prepareBirds() {
        for (let i = 0; i < 30; i++) {
            let bird = new L09_2_Vogelhaus_classes.Bird(L09_2_Vogelhaus_classes.randomBetween(L09_2_Vogelhaus_classes.snowmanAreaX + 50, L09_2_Vogelhaus_classes.canvas.width), -50, L09_2_Vogelhaus_classes.randomBetween(0, 6), L09_2_Vogelhaus_classes.generateRandomBool(), "Flying", "RandomGround", birdColors[L09_2_Vogelhaus_classes.randomBetween(0, 2)][L09_2_Vogelhaus_classes.randomBetween(0, 2)], birdColors[L09_2_Vogelhaus_classes.randomBetween(0, 2)][L09_2_Vogelhaus_classes.randomBetween(0, 2)]);
            L09_2_Vogelhaus_classes.animatedBirds.push(bird);
        }
    }
    function drawImage() {
        for (let i = 0; i < L09_2_Vogelhaus_classes.animatedBirds.length; i++) {
            L09_2_Vogelhaus_classes.animatedBirds[i].updateBird();
        }
        L09_2_Vogelhaus_classes.crc2.clearRect(0, 0, L09_2_Vogelhaus_classes.canvas.width, L09_2_Vogelhaus_classes.canvas.height);
        L09_2_Vogelhaus_classes.crc2.putImageData(savedBackgroundImage, 0, 0);
        for (let j = 6; j >= 0; j--) {
            for (let i = 0; i < L09_2_Vogelhaus_classes.animatedBirds.length; i++) {
                if (L09_2_Vogelhaus_classes.animatedBirds[i].zLevel == j) {
                    L09_2_Vogelhaus_classes.animatedBirds[i].draw();
                }
            }
            if (j == 3) {
                L09_2_Vogelhaus_classes.crc2.translate(750, L09_2_Vogelhaus_classes.crc2.canvas.height - 60);
                L09_2_Vogelhaus_classes.birdshouse = new L09_2_Vogelhaus_classes.Birdshouse;
                L09_2_Vogelhaus_classes.birdshouse.drawBase();
                L09_2_Vogelhaus_classes.crc2.resetTransform();
            }
            if (j == 0) {
                L09_2_Vogelhaus_classes.crc2.translate(750, L09_2_Vogelhaus_classes.crc2.canvas.height - 60);
                L09_2_Vogelhaus_classes.birdshouse.drawTop();
                L09_2_Vogelhaus_classes.crc2.resetTransform();
            }
        }
    }
})(L09_2_Vogelhaus_classes || (L09_2_Vogelhaus_classes = {}));
//# sourceMappingURL=Main.js.map