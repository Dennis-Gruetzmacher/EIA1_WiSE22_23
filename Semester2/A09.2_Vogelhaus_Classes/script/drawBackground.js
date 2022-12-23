"use strict";
var L09_2_Vogelhaus_classes;
(function (L09_2_Vogelhaus_classes) {
    function drawBackground() {
        drawSky();
        drawSun(L09_2_Vogelhaus_classes.randomBetween(0, 50), L09_2_Vogelhaus_classes.randomBetween(0, 50));
        drawMountains();
        drawClouds();
        drawGround();
        drawTrees();
        drawSnowman(L09_2_Vogelhaus_classes.randomBetween(20, L09_2_Vogelhaus_classes.snowmanAreaX), L09_2_Vogelhaus_classes.randomBetween(L09_2_Vogelhaus_classes.snowmanAreaY + 50, L09_2_Vogelhaus_classes.snowmanAreaY + 150));
    }
    L09_2_Vogelhaus_classes.drawBackground = drawBackground;
    function drawSky() {
        L09_2_Vogelhaus_classes.gradientSky = L09_2_Vogelhaus_classes.crc2.createLinearGradient(0, 0, 0, L09_2_Vogelhaus_classes.horizonPoint);
        L09_2_Vogelhaus_classes.gradientSky.addColorStop(0, "#3333ff");
        L09_2_Vogelhaus_classes.gradientSky.addColorStop(0.3, "#3333ff");
        L09_2_Vogelhaus_classes.gradientSky.addColorStop(0.75, "#eeeeff");
        L09_2_Vogelhaus_classes.gradientSky.addColorStop(1, "#eeeeff");
        L09_2_Vogelhaus_classes.crc2.fillStyle = L09_2_Vogelhaus_classes.gradientSky;
        L09_2_Vogelhaus_classes.crc2.fillRect(0, 0, L09_2_Vogelhaus_classes.crc2.canvas.width, L09_2_Vogelhaus_classes.horizonPoint);
    }
    function drawSun(_sunX, _sunY) {
        let radius1 = 30;
        let radius2 = 130;
        let sunGradient = L09_2_Vogelhaus_classes.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        sunGradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        sunGradient.addColorStop(1, "HSLA(60, 0%, 90%, 0)");
        L09_2_Vogelhaus_classes.crc2.translate(_sunX, _sunY);
        L09_2_Vogelhaus_classes.crc2.fillStyle = sunGradient;
        L09_2_Vogelhaus_classes.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        L09_2_Vogelhaus_classes.crc2.fill();
        L09_2_Vogelhaus_classes.crc2.resetTransform();
    }
    function drawMountains() {
        L09_2_Vogelhaus_classes.gradientMountains = L09_2_Vogelhaus_classes.crc2.createLinearGradient(0, L09_2_Vogelhaus_classes.horizonPoint, 0, L09_2_Vogelhaus_classes.horizonPoint - 150);
        L09_2_Vogelhaus_classes.gradientMountains.addColorStop(1, L09_2_Vogelhaus_classes.ColorSpaces[1][0]);
        L09_2_Vogelhaus_classes.gradientMountains.addColorStop(0.7, L09_2_Vogelhaus_classes.ColorSpaces[1][0]);
        L09_2_Vogelhaus_classes.gradientMountains.addColorStop(0.6, L09_2_Vogelhaus_classes.ColorSpaces[1][1]);
        L09_2_Vogelhaus_classes.gradientMountains.addColorStop(0.3, L09_2_Vogelhaus_classes.ColorSpaces[1][2]);
        L09_2_Vogelhaus_classes.gradientMountains.addColorStop(0, L09_2_Vogelhaus_classes.ColorSpaces[1][3]);
        for (let i = 0; i < L09_2_Vogelhaus_classes.randomBetween(5, 10); i++) {
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.startpointMountain = L09_2_Vogelhaus_classes.randomBetween(-100, 600);
            L09_2_Vogelhaus_classes.crc2.moveTo(L09_2_Vogelhaus_classes.startpointMountain, L09_2_Vogelhaus_classes.horizonPoint);
            L09_2_Vogelhaus_classes.currentXMountain = L09_2_Vogelhaus_classes.startpointMountain + L09_2_Vogelhaus_classes.randomBetween(25, 100);
            for (let j = 0; j < L09_2_Vogelhaus_classes.randomBetween(1, 20); j++) {
                L09_2_Vogelhaus_classes.crc2.lineTo(L09_2_Vogelhaus_classes.currentXMountain, L09_2_Vogelhaus_classes.horizonPoint - (L09_2_Vogelhaus_classes.randomBetween(20, 150)));
                L09_2_Vogelhaus_classes.currentXMountain += L09_2_Vogelhaus_classes.randomBetween(25, 100);
            }
            L09_2_Vogelhaus_classes.crc2.lineTo(L09_2_Vogelhaus_classes.currentXMountain, L09_2_Vogelhaus_classes.horizonPoint);
            L09_2_Vogelhaus_classes.crc2.closePath();
            L09_2_Vogelhaus_classes.crc2.fillStyle = L09_2_Vogelhaus_classes.gradientMountains;
            L09_2_Vogelhaus_classes.crc2.strokeStyle = L09_2_Vogelhaus_classes.ColorSpaces[1][4];
            L09_2_Vogelhaus_classes.crc2.lineWidth = 2;
            L09_2_Vogelhaus_classes.crc2.fill();
            L09_2_Vogelhaus_classes.crc2.stroke();
        }
    }
    function drawClouds() {
        let cloudRadius1;
        let cloudRadius2;
        for (let i = 0; i < L09_2_Vogelhaus_classes.randomBetween(20, 50); i++) {
            cloudRadius1 = L09_2_Vogelhaus_classes.randomBetween(10, 20);
            cloudRadius2 = cloudRadius1 + 40;
            L09_2_Vogelhaus_classes.crc2.translate(L09_2_Vogelhaus_classes.randomBetween(250, L09_2_Vogelhaus_classes.crc2.canvas.width + 50), L09_2_Vogelhaus_classes.cloudHeight + L09_2_Vogelhaus_classes.randomBetween(-10, 10));
            L09_2_Vogelhaus_classes.crc2.scale(3, 1);
            let cloudGradient = L09_2_Vogelhaus_classes.crc2.createRadialGradient(0, 0, cloudRadius1, 0, 0, cloudRadius2);
            cloudGradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            cloudGradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
            L09_2_Vogelhaus_classes.crc2.fillStyle = cloudGradient;
            L09_2_Vogelhaus_classes.crc2.beginPath();
            L09_2_Vogelhaus_classes.crc2.arc(0, 0, cloudRadius2, 0, Math.PI * 2);
            L09_2_Vogelhaus_classes.crc2.fill();
            L09_2_Vogelhaus_classes.crc2.closePath();
            L09_2_Vogelhaus_classes.crc2.resetTransform();
        }
    }
    function drawGround() {
        for (let j = L09_2_Vogelhaus_classes.horizonPoint; j <= L09_2_Vogelhaus_classes.crc2.canvas.height; j++) {
            for (let i = 0; i <= L09_2_Vogelhaus_classes.crc2.canvas.width; i++) {
                L09_2_Vogelhaus_classes.crc2.fillStyle = L09_2_Vogelhaus_classes.ColorSpaces[0][L09_2_Vogelhaus_classes.randomBetween(0, 4)];
                L09_2_Vogelhaus_classes.crc2.fillRect(i, j, 1, 1);
            }
        }
        L09_2_Vogelhaus_classes.crc2.fillStyle = "HSLA(0, 0%, 100%, 0.6)";
        L09_2_Vogelhaus_classes.crc2.fillRect(0, L09_2_Vogelhaus_classes.horizonPoint, L09_2_Vogelhaus_classes.crc2.canvas.width, L09_2_Vogelhaus_classes.crc2.canvas.height - L09_2_Vogelhaus_classes.horizonPoint);
    }
    function drawTrees() {
        for (let j = L09_2_Vogelhaus_classes.horizonPoint; j <= L09_2_Vogelhaus_classes.horizonPoint + L09_2_Vogelhaus_classes.heightFarTreeArea; j = j + L09_2_Vogelhaus_classes.randomBetween(3, 8)) {
            for (let i = 0; i <= L09_2_Vogelhaus_classes.crc2.canvas.width; i = i + L09_2_Vogelhaus_classes.randomBetween(5, 10)) {
                L09_2_Vogelhaus_classes.crc2.translate(i, j + L09_2_Vogelhaus_classes.randomBetween(-3, 3));
                let tree = new L09_2_Vogelhaus_classes.Tree(4, 10, 10, 30, 1, 10);
                tree.draw();
                L09_2_Vogelhaus_classes.crc2.resetTransform();
            }
        }
        for (let j = L09_2_Vogelhaus_classes.horizonPoint + L09_2_Vogelhaus_classes.heightFarTreeArea; j <= L09_2_Vogelhaus_classes.horizonPoint + L09_2_Vogelhaus_classes.heightFarTreeArea + L09_2_Vogelhaus_classes.heightMiddleTreeArea; j = j + L09_2_Vogelhaus_classes.randomBetween(5, 15)) {
            for (let i = 0; i <= L09_2_Vogelhaus_classes.crc2.canvas.width; i = i + L09_2_Vogelhaus_classes.randomBetween(5, 20)) {
                L09_2_Vogelhaus_classes.crc2.translate(i, j + L09_2_Vogelhaus_classes.randomBetween(-3, 3));
                let tree = new L09_2_Vogelhaus_classes.Tree(4, 10, 10, 30, 1.5, 20);
                tree.draw();
                L09_2_Vogelhaus_classes.crc2.resetTransform();
            }
        }
        for (let j = L09_2_Vogelhaus_classes.horizonPoint + L09_2_Vogelhaus_classes.heightFarTreeArea + L09_2_Vogelhaus_classes.heightMiddleTreeArea; j <= L09_2_Vogelhaus_classes.horizonPoint + L09_2_Vogelhaus_classes.heightFarTreeArea + L09_2_Vogelhaus_classes.heightMiddleTreeArea + L09_2_Vogelhaus_classes.heightNearTreeArea; j = j + L09_2_Vogelhaus_classes.randomBetween(10, 20)) {
            for (let i = 0; i <= L09_2_Vogelhaus_classes.crc2.canvas.width; i = i + L09_2_Vogelhaus_classes.randomBetween(10, 25)) {
                L09_2_Vogelhaus_classes.crc2.translate(i, j + L09_2_Vogelhaus_classes.randomBetween(-3, 3));
                let tree = new L09_2_Vogelhaus_classes.Tree(4, 10, 10, 30, 2, 30);
                tree.draw();
                L09_2_Vogelhaus_classes.crc2.resetTransform();
            }
        }
    }
    function drawSnowman(_xPosition, _yPosition) {
        L09_2_Vogelhaus_classes.crc2.translate(_xPosition, _yPosition);
        let snowman = new L09_2_Vogelhaus_classes.Snowman(40, 30, 20);
        snowman.draw();
        L09_2_Vogelhaus_classes.crc2.resetTransform();
    }
})(L09_2_Vogelhaus_classes || (L09_2_Vogelhaus_classes = {}));
//# sourceMappingURL=drawBackground.js.map