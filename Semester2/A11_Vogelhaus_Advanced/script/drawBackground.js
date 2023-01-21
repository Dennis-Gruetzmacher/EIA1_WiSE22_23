"use strict";
var L11_Vogelhaus_advanced;
(function (L11_Vogelhaus_advanced) {
    function drawBackground() {
        drawSky();
        drawSun(L11_Vogelhaus_advanced.randomBetween(0, 50), L11_Vogelhaus_advanced.randomBetween(0, 50));
        drawMountains();
        drawClouds();
        drawGround();
        drawTrees();
        drawSnowman(L11_Vogelhaus_advanced.randomBetween(20, L11_Vogelhaus_advanced.snowmanAreaX), L11_Vogelhaus_advanced.randomBetween(L11_Vogelhaus_advanced.snowmanAreaY + 50, L11_Vogelhaus_advanced.snowmanAreaY + 150));
    }
    L11_Vogelhaus_advanced.drawBackground = drawBackground;
    function drawSky() {
        L11_Vogelhaus_advanced.gradientSky = L11_Vogelhaus_advanced.crc2.createLinearGradient(0, 0, 0, L11_Vogelhaus_advanced.horizonPoint);
        L11_Vogelhaus_advanced.gradientSky.addColorStop(0, "#3333ff");
        L11_Vogelhaus_advanced.gradientSky.addColorStop(0.3, "#3333ff");
        L11_Vogelhaus_advanced.gradientSky.addColorStop(0.75, "#eeeeff");
        L11_Vogelhaus_advanced.gradientSky.addColorStop(1, "#eeeeff");
        L11_Vogelhaus_advanced.crc2.fillStyle = L11_Vogelhaus_advanced.gradientSky;
        L11_Vogelhaus_advanced.crc2.fillRect(0, 0, L11_Vogelhaus_advanced.crc2.canvas.width, L11_Vogelhaus_advanced.horizonPoint);
    }
    function drawSun(_sunX, _sunY) {
        let radius1 = 30;
        let radius2 = 130;
        let sunGradient = L11_Vogelhaus_advanced.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        sunGradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        sunGradient.addColorStop(1, "HSLA(60, 0%, 90%, 0)");
        L11_Vogelhaus_advanced.crc2.translate(_sunX, _sunY);
        L11_Vogelhaus_advanced.crc2.fillStyle = sunGradient;
        L11_Vogelhaus_advanced.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        L11_Vogelhaus_advanced.crc2.fill();
        L11_Vogelhaus_advanced.crc2.resetTransform();
    }
    function drawMountains() {
        L11_Vogelhaus_advanced.gradientMountains = L11_Vogelhaus_advanced.crc2.createLinearGradient(0, L11_Vogelhaus_advanced.horizonPoint, 0, L11_Vogelhaus_advanced.horizonPoint - 150);
        L11_Vogelhaus_advanced.gradientMountains.addColorStop(1, L11_Vogelhaus_advanced.ColorSpaces[1][0]);
        L11_Vogelhaus_advanced.gradientMountains.addColorStop(0.7, L11_Vogelhaus_advanced.ColorSpaces[1][0]);
        L11_Vogelhaus_advanced.gradientMountains.addColorStop(0.6, L11_Vogelhaus_advanced.ColorSpaces[1][1]);
        L11_Vogelhaus_advanced.gradientMountains.addColorStop(0.3, L11_Vogelhaus_advanced.ColorSpaces[1][2]);
        L11_Vogelhaus_advanced.gradientMountains.addColorStop(0, L11_Vogelhaus_advanced.ColorSpaces[1][3]);
        for (let i = 0; i < L11_Vogelhaus_advanced.randomBetween(5, 10); i++) {
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.startpointMountain = L11_Vogelhaus_advanced.randomBetween(-100, 600);
            L11_Vogelhaus_advanced.crc2.moveTo(L11_Vogelhaus_advanced.startpointMountain, L11_Vogelhaus_advanced.horizonPoint);
            L11_Vogelhaus_advanced.currentXMountain = L11_Vogelhaus_advanced.startpointMountain + L11_Vogelhaus_advanced.randomBetween(25, 100);
            for (let j = 0; j < L11_Vogelhaus_advanced.randomBetween(1, 20); j++) {
                L11_Vogelhaus_advanced.crc2.lineTo(L11_Vogelhaus_advanced.currentXMountain, L11_Vogelhaus_advanced.horizonPoint - (L11_Vogelhaus_advanced.randomBetween(20, 150)));
                L11_Vogelhaus_advanced.currentXMountain += L11_Vogelhaus_advanced.randomBetween(25, 100);
            }
            L11_Vogelhaus_advanced.crc2.lineTo(L11_Vogelhaus_advanced.currentXMountain, L11_Vogelhaus_advanced.horizonPoint);
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.fillStyle = L11_Vogelhaus_advanced.gradientMountains;
            L11_Vogelhaus_advanced.crc2.strokeStyle = L11_Vogelhaus_advanced.ColorSpaces[1][4];
            L11_Vogelhaus_advanced.crc2.lineWidth = 2;
            L11_Vogelhaus_advanced.crc2.fill();
            L11_Vogelhaus_advanced.crc2.stroke();
        }
    }
    function drawClouds() {
        let cloudRadius1;
        let cloudRadius2;
        for (let i = 0; i < L11_Vogelhaus_advanced.randomBetween(20, 50); i++) {
            cloudRadius1 = L11_Vogelhaus_advanced.randomBetween(10, 20);
            cloudRadius2 = cloudRadius1 + 40;
            L11_Vogelhaus_advanced.crc2.translate(L11_Vogelhaus_advanced.randomBetween(250, L11_Vogelhaus_advanced.crc2.canvas.width + 50), L11_Vogelhaus_advanced.cloudHeight + L11_Vogelhaus_advanced.randomBetween(-10, 10));
            L11_Vogelhaus_advanced.crc2.scale(3, 1);
            let cloudGradient = L11_Vogelhaus_advanced.crc2.createRadialGradient(0, 0, cloudRadius1, 0, 0, cloudRadius2);
            cloudGradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            cloudGradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
            L11_Vogelhaus_advanced.crc2.fillStyle = cloudGradient;
            L11_Vogelhaus_advanced.crc2.beginPath();
            L11_Vogelhaus_advanced.crc2.arc(0, 0, cloudRadius2, 0, Math.PI * 2);
            L11_Vogelhaus_advanced.crc2.fill();
            L11_Vogelhaus_advanced.crc2.closePath();
            L11_Vogelhaus_advanced.crc2.resetTransform();
        }
    }
    function drawGround() {
        for (let j = L11_Vogelhaus_advanced.horizonPoint; j <= L11_Vogelhaus_advanced.crc2.canvas.height; j++) {
            for (let i = 0; i <= L11_Vogelhaus_advanced.crc2.canvas.width; i++) {
                L11_Vogelhaus_advanced.crc2.fillStyle = L11_Vogelhaus_advanced.ColorSpaces[0][L11_Vogelhaus_advanced.randomBetween(0, 4)];
                L11_Vogelhaus_advanced.crc2.fillRect(i, j, 1, 1);
            }
        }
        L11_Vogelhaus_advanced.crc2.fillStyle = "HSLA(0, 0%, 100%, 0.6)";
        L11_Vogelhaus_advanced.crc2.fillRect(0, L11_Vogelhaus_advanced.horizonPoint, L11_Vogelhaus_advanced.crc2.canvas.width, L11_Vogelhaus_advanced.crc2.canvas.height - L11_Vogelhaus_advanced.horizonPoint);
    }
    function drawTrees() {
        for (let j = L11_Vogelhaus_advanced.horizonPoint; j <= L11_Vogelhaus_advanced.horizonPoint + L11_Vogelhaus_advanced.heightFarTreeArea; j = j + L11_Vogelhaus_advanced.randomBetween(3, 8)) {
            for (let i = 0; i <= L11_Vogelhaus_advanced.crc2.canvas.width; i = i + L11_Vogelhaus_advanced.randomBetween(5, 10)) {
                L11_Vogelhaus_advanced.crc2.translate(i, j + L11_Vogelhaus_advanced.randomBetween(-3, 3));
                let tree = new L11_Vogelhaus_advanced.Tree(4, 10, 10, 30, 1, 10);
                tree.draw();
                L11_Vogelhaus_advanced.crc2.resetTransform();
            }
        }
        for (let j = L11_Vogelhaus_advanced.horizonPoint + L11_Vogelhaus_advanced.heightFarTreeArea; j <= L11_Vogelhaus_advanced.horizonPoint + L11_Vogelhaus_advanced.heightFarTreeArea + L11_Vogelhaus_advanced.heightMiddleTreeArea; j = j + L11_Vogelhaus_advanced.randomBetween(5, 15)) {
            for (let i = 0; i <= L11_Vogelhaus_advanced.crc2.canvas.width; i = i + L11_Vogelhaus_advanced.randomBetween(5, 20)) {
                L11_Vogelhaus_advanced.crc2.translate(i, j + L11_Vogelhaus_advanced.randomBetween(-3, 3));
                let tree = new L11_Vogelhaus_advanced.Tree(4, 10, 10, 30, 1.5, 20);
                tree.draw();
                L11_Vogelhaus_advanced.crc2.resetTransform();
            }
        }
        for (let j = L11_Vogelhaus_advanced.horizonPoint + L11_Vogelhaus_advanced.heightFarTreeArea + L11_Vogelhaus_advanced.heightMiddleTreeArea; j <= L11_Vogelhaus_advanced.horizonPoint + L11_Vogelhaus_advanced.heightFarTreeArea + L11_Vogelhaus_advanced.heightMiddleTreeArea + L11_Vogelhaus_advanced.heightNearTreeArea; j = j + L11_Vogelhaus_advanced.randomBetween(10, 20)) {
            for (let i = 0; i <= L11_Vogelhaus_advanced.crc2.canvas.width; i = i + L11_Vogelhaus_advanced.randomBetween(10, 25)) {
                L11_Vogelhaus_advanced.crc2.translate(i, j + L11_Vogelhaus_advanced.randomBetween(-3, 3));
                let tree = new L11_Vogelhaus_advanced.Tree(4, 10, 10, 30, 2, 30);
                tree.draw();
                L11_Vogelhaus_advanced.crc2.resetTransform();
            }
        }
    }
    function drawSnowman(_xPosition, _yPosition) {
        L11_Vogelhaus_advanced.crc2.translate(_xPosition, _yPosition);
        let snowman = new L11_Vogelhaus_advanced.Snowman(40, 30, 20);
        snowman.draw();
        L11_Vogelhaus_advanced.crc2.resetTransform();
    }
})(L11_Vogelhaus_advanced || (L11_Vogelhaus_advanced = {}));
//# sourceMappingURL=drawBackground.js.map