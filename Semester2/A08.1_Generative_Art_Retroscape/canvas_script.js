"use strict";
var canvas_test;
(function (canvas_test) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    let horizonPoint;
    let vanishingPointX;
    let distanceGroundLinesTop;
    let distanceGroundLinesBottom;
    let amountGroundLines;
    let distanceHorizonLines;
    let startpointMountain;
    let currentXMountain;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        prepareDrawing();
        drawOnCanvas();
    }
    function prepareDrawing() {
        horizonPoint = randomBetween(500, 700);
        vanishingPointX = randomBetween(250, 1250);
        distanceGroundLinesTop = randomBetween(20, 100);
        distanceGroundLinesBottom = distanceGroundLinesTop * randomBetween(3, 10);
        amountGroundLines = Math.round(crc2.canvas.width / distanceGroundLinesTop);
        distanceHorizonLines = randomBetween(20, 50);
    }
    function drawOnCanvas() {
        createBackground();
        createStars();
        createMoons();
        createMountains();
        createHorizon();
        createGround();
    }
    function createBackground() {
        crc2.fillStyle = "#000000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function createStars() {
        crc2.strokeStyle = "#0000FF";
        crc2.fillStyle = "#00FFFF";
        for (let i = 10; i < randomBetween(30, 80); i++) {
            strokeStar(randomBetween(0, crc2.canvas.width), randomBetween(0, horizonPoint), randomBetween(2, 5), randomBetween(5, 8), randomBetween(1, 4));
        }
    }
    function strokeStar(x, y, r, n, inset) {
        crc2.beginPath();
        crc2.translate(x, y);
        crc2.moveTo(0, 0 - r);
        for (let i = 0; i < n; i++) {
            crc2.rotate(Math.PI / n);
            crc2.lineTo(0, 0 - (r * inset));
            crc2.rotate(Math.PI / n);
            crc2.lineTo(0, 0 - r);
        }
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.resetTransform();
    }
    function createMoons() {
        for (let i = 0; i < randomBetween(1, 5); i++) {
            crc2.beginPath();
            crc2.fillStyle = "#FF0000";
            crc2.strokeStyle = "#FFFF00";
            crc2.arc(randomBetween(0, crc2.canvas.width), randomBetween(0, horizonPoint), randomBetween(20, 150), 0, Math.PI * 2);
            crc2.fill();
            crc2.stroke();
        }
    }
    function createMountains() {
        for (let i = 0; i < 5; i++) {
            crc2.beginPath();
            startpointMountain = randomBetween(-100, 900);
            crc2.moveTo(startpointMountain, horizonPoint);
            currentXMountain = startpointMountain + randomBetween(25, 100);
            for (let j = 0; j < randomBetween(1, 15); j++) {
                crc2.lineTo(currentXMountain, horizonPoint - (randomBetween(20, 150)));
                currentXMountain += randomBetween(25, 100);
            }
            crc2.lineTo(currentXMountain, horizonPoint);
            crc2.closePath();
            crc2.fillStyle = "#00FF00";
            crc2.strokeStyle = "#FFFF00";
            crc2.fill();
            crc2.stroke();
        }
    }
    function createHorizon() {
        crc2.beginPath();
        crc2.rect(0, horizonPoint, crc2.canvas.width, horizonPoint);
        crc2.fillStyle = "#0000FF";
        crc2.fill();
        crc2.lineWidth = 3;
        for (let i = 0; i < 25; i++) {
            crc2.beginPath();
            crc2.moveTo(0, horizonPoint + (distanceHorizonLines * i));
            crc2.lineTo(crc2.canvas.width, horizonPoint + (distanceHorizonLines * i));
            crc2.strokeStyle = "#FFFFFF";
            crc2.stroke();
        }
    }
    function createGround() {
        crc2.strokeStyle = "#FFFFFF";
        for (let i = 0; i <= amountGroundLines * 2; i++) {
            crc2.beginPath();
            crc2.moveTo(vanishingPointX - (distanceGroundLinesTop * i), horizonPoint);
            crc2.lineTo(750 - (distanceGroundLinesBottom * i), crc2.canvas.height);
            crc2.stroke();
        }
        for (let i = 0; i <= amountGroundLines * 2; i++) {
            crc2.beginPath();
            crc2.moveTo(vanishingPointX + (distanceGroundLinesTop * i), horizonPoint);
            crc2.lineTo(750 + (distanceGroundLinesBottom * i), crc2.canvas.height);
            crc2.stroke();
        }
    }
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})(canvas_test || (canvas_test = {}));
//# sourceMappingURL=canvas_script.js.map