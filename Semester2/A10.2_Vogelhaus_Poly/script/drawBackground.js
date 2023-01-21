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
    function drawBackground() {
        drawSky();
        drawSun(L10_2_Vogelhaus_classes.randomBetween(0, 50), L10_2_Vogelhaus_classes.randomBetween(0, 50));
        drawMountains();
        drawClouds();
        drawGround();
        drawTrees();
        drawSnowman(L10_2_Vogelhaus_classes.randomBetween(20, L10_2_Vogelhaus_classes.snowmanAreaX), L10_2_Vogelhaus_classes.randomBetween(L10_2_Vogelhaus_classes.snowmanAreaY + 50, L10_2_Vogelhaus_classes.snowmanAreaY + 150));
    }
    L10_2_Vogelhaus_classes.drawBackground = drawBackground;
    function drawSky() {
        L10_2_Vogelhaus_classes.gradientSky = L10_2_Vogelhaus_classes.crc2.createLinearGradient(0, 0, 0, L10_2_Vogelhaus_classes.horizonPoint);
        L10_2_Vogelhaus_classes.gradientSky.addColorStop(0, "#3333ff");
        L10_2_Vogelhaus_classes.gradientSky.addColorStop(0.3, "#3333ff");
        L10_2_Vogelhaus_classes.gradientSky.addColorStop(0.75, "#eeeeff");
        L10_2_Vogelhaus_classes.gradientSky.addColorStop(1, "#eeeeff");
        L10_2_Vogelhaus_classes.crc2.fillStyle = L10_2_Vogelhaus_classes.gradientSky;
        L10_2_Vogelhaus_classes.crc2.fillRect(0, 0, L10_2_Vogelhaus_classes.crc2.canvas.width, L10_2_Vogelhaus_classes.horizonPoint);
    }
    function drawSun(_sunX, _sunY) {
        let radius1 = 30;
        let radius2 = 130;
        let sunGradient = L10_2_Vogelhaus_classes.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        sunGradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        sunGradient.addColorStop(1, "HSLA(60, 0%, 90%, 0)");
        L10_2_Vogelhaus_classes.crc2.translate(_sunX, _sunY);
        L10_2_Vogelhaus_classes.crc2.fillStyle = sunGradient;
        L10_2_Vogelhaus_classes.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        L10_2_Vogelhaus_classes.crc2.fill();
        L10_2_Vogelhaus_classes.crc2.resetTransform();
    }
    function drawMountains() {
        L10_2_Vogelhaus_classes.gradientMountains = L10_2_Vogelhaus_classes.crc2.createLinearGradient(0, L10_2_Vogelhaus_classes.horizonPoint, 0, L10_2_Vogelhaus_classes.horizonPoint - 150);
        L10_2_Vogelhaus_classes.gradientMountains.addColorStop(1, L10_2_Vogelhaus_classes.ColorSpaces[1][0]);
        L10_2_Vogelhaus_classes.gradientMountains.addColorStop(0.7, L10_2_Vogelhaus_classes.ColorSpaces[1][0]);
        L10_2_Vogelhaus_classes.gradientMountains.addColorStop(0.6, L10_2_Vogelhaus_classes.ColorSpaces[1][1]);
        L10_2_Vogelhaus_classes.gradientMountains.addColorStop(0.3, L10_2_Vogelhaus_classes.ColorSpaces[1][2]);
        L10_2_Vogelhaus_classes.gradientMountains.addColorStop(0, L10_2_Vogelhaus_classes.ColorSpaces[1][3]);
        for (let i = 0; i < L10_2_Vogelhaus_classes.randomBetween(5, 10); i++) {
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.startpointMountain = L10_2_Vogelhaus_classes.randomBetween(-100, 600);
            L10_2_Vogelhaus_classes.crc2.moveTo(L10_2_Vogelhaus_classes.startpointMountain, L10_2_Vogelhaus_classes.horizonPoint);
            L10_2_Vogelhaus_classes.currentXMountain = L10_2_Vogelhaus_classes.startpointMountain + L10_2_Vogelhaus_classes.randomBetween(25, 100);
            for (let j = 0; j < L10_2_Vogelhaus_classes.randomBetween(1, 20); j++) {
                L10_2_Vogelhaus_classes.crc2.lineTo(L10_2_Vogelhaus_classes.currentXMountain, L10_2_Vogelhaus_classes.horizonPoint - (L10_2_Vogelhaus_classes.randomBetween(20, 150)));
                L10_2_Vogelhaus_classes.currentXMountain += L10_2_Vogelhaus_classes.randomBetween(25, 100);
            }
            L10_2_Vogelhaus_classes.crc2.lineTo(L10_2_Vogelhaus_classes.currentXMountain, L10_2_Vogelhaus_classes.horizonPoint);
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.fillStyle = L10_2_Vogelhaus_classes.gradientMountains;
            L10_2_Vogelhaus_classes.crc2.strokeStyle = L10_2_Vogelhaus_classes.ColorSpaces[1][4];
            L10_2_Vogelhaus_classes.crc2.lineWidth = 2;
            L10_2_Vogelhaus_classes.crc2.fill();
            L10_2_Vogelhaus_classes.crc2.stroke();
        }
    }
    function drawClouds() {
        let cloudRadius1;
        let cloudRadius2;
        for (let i = 0; i < L10_2_Vogelhaus_classes.randomBetween(20, 50); i++) {
            cloudRadius1 = L10_2_Vogelhaus_classes.randomBetween(10, 20);
            cloudRadius2 = cloudRadius1 + 40;
            L10_2_Vogelhaus_classes.crc2.translate(L10_2_Vogelhaus_classes.randomBetween(250, L10_2_Vogelhaus_classes.crc2.canvas.width + 50), L10_2_Vogelhaus_classes.cloudHeight + L10_2_Vogelhaus_classes.randomBetween(-10, 10));
            L10_2_Vogelhaus_classes.crc2.scale(3, 1);
            let cloudGradient = L10_2_Vogelhaus_classes.crc2.createRadialGradient(0, 0, cloudRadius1, 0, 0, cloudRadius2);
            cloudGradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            cloudGradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
            L10_2_Vogelhaus_classes.crc2.fillStyle = cloudGradient;
            L10_2_Vogelhaus_classes.crc2.beginPath();
            L10_2_Vogelhaus_classes.crc2.arc(0, 0, cloudRadius2, 0, Math.PI * 2);
            L10_2_Vogelhaus_classes.crc2.fill();
            L10_2_Vogelhaus_classes.crc2.closePath();
            L10_2_Vogelhaus_classes.crc2.resetTransform();
        }
    }
    function drawGround() {
        for (let j = L10_2_Vogelhaus_classes.horizonPoint; j <= L10_2_Vogelhaus_classes.crc2.canvas.height; j++) {
            for (let i = 0; i <= L10_2_Vogelhaus_classes.crc2.canvas.width; i++) {
                L10_2_Vogelhaus_classes.crc2.fillStyle = L10_2_Vogelhaus_classes.ColorSpaces[0][L10_2_Vogelhaus_classes.randomBetween(0, 4)];
                L10_2_Vogelhaus_classes.crc2.fillRect(i, j, 1, 1);
            }
        }
        L10_2_Vogelhaus_classes.crc2.fillStyle = "HSLA(0, 0%, 100%, 0.6)";
        L10_2_Vogelhaus_classes.crc2.fillRect(0, L10_2_Vogelhaus_classes.horizonPoint, L10_2_Vogelhaus_classes.crc2.canvas.width, L10_2_Vogelhaus_classes.crc2.canvas.height - L10_2_Vogelhaus_classes.horizonPoint);
    }
    function drawTrees() {
        for (let j = L10_2_Vogelhaus_classes.horizonPoint; j <= L10_2_Vogelhaus_classes.horizonPoint + L10_2_Vogelhaus_classes.heightFarTreeArea; j = j + L10_2_Vogelhaus_classes.randomBetween(3, 8)) {
            for (let i = 0; i <= L10_2_Vogelhaus_classes.crc2.canvas.width; i = i + L10_2_Vogelhaus_classes.randomBetween(5, 10)) {
                L10_2_Vogelhaus_classes.crc2.translate(i, j + L10_2_Vogelhaus_classes.randomBetween(-3, 3));
                let tree = new L10_2_Vogelhaus_classes.Tree(4, 10, 10, 30, 1, 10);
                tree.draw();
                L10_2_Vogelhaus_classes.crc2.resetTransform();
            }
        }
        for (let j = L10_2_Vogelhaus_classes.horizonPoint + L10_2_Vogelhaus_classes.heightFarTreeArea; j <= L10_2_Vogelhaus_classes.horizonPoint + L10_2_Vogelhaus_classes.heightFarTreeArea + L10_2_Vogelhaus_classes.heightMiddleTreeArea; j = j + L10_2_Vogelhaus_classes.randomBetween(5, 15)) {
            for (let i = 0; i <= L10_2_Vogelhaus_classes.crc2.canvas.width; i = i + L10_2_Vogelhaus_classes.randomBetween(5, 20)) {
                L10_2_Vogelhaus_classes.crc2.translate(i, j + L10_2_Vogelhaus_classes.randomBetween(-3, 3));
                let tree = new L10_2_Vogelhaus_classes.Tree(4, 10, 10, 30, 1.5, 20);
                tree.draw();
                L10_2_Vogelhaus_classes.crc2.resetTransform();
            }
        }
        for (let j = L10_2_Vogelhaus_classes.horizonPoint + L10_2_Vogelhaus_classes.heightFarTreeArea + L10_2_Vogelhaus_classes.heightMiddleTreeArea; j <= L10_2_Vogelhaus_classes.horizonPoint + L10_2_Vogelhaus_classes.heightFarTreeArea + L10_2_Vogelhaus_classes.heightMiddleTreeArea + L10_2_Vogelhaus_classes.heightNearTreeArea; j = j + L10_2_Vogelhaus_classes.randomBetween(10, 20)) {
            for (let i = 0; i <= L10_2_Vogelhaus_classes.crc2.canvas.width; i = i + L10_2_Vogelhaus_classes.randomBetween(10, 25)) {
                L10_2_Vogelhaus_classes.crc2.translate(i, j + L10_2_Vogelhaus_classes.randomBetween(-3, 3));
                let tree = new L10_2_Vogelhaus_classes.Tree(4, 10, 10, 30, 2, 30);
                tree.draw();
                L10_2_Vogelhaus_classes.crc2.resetTransform();
            }
        }
    }
    function drawSnowman(_xPosition, _yPosition) {
        L10_2_Vogelhaus_classes.crc2.translate(_xPosition, _yPosition);
        let snowman = new L10_2_Vogelhaus_classes.Snowman(40, 30, 20);
        snowman.draw();
        L10_2_Vogelhaus_classes.crc2.resetTransform();
    }
})(L10_2_Vogelhaus_classes || (L10_2_Vogelhaus_classes = {}));
//# sourceMappingURL=drawBackground.js.map