"use strict";
/*
Aufgabe: L08.1_Generative_Art
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 26.11.2022
Quellen:
*/
var canvas_test;
(function (canvas_test) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    let activeX;
    let activeY;
    let activeRadius;
    let circleCoordinate = [];
    let grad1;
    let grad2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        prepareDrawing();
        drawOnCanvas();
    }
    function prepareDrawing() {
    }
    function drawOnCanvas() {
        createBackground();
        drawCircles();
        drawLines();
    }
    function createBackground() {
        crc2.fillStyle = "#000000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCircles() {
        for (let i = 0; i < randomBetween(25, 50); i++) {
            activeX = randomBetween(0, crc2.canvas.width);
            activeY = randomBetween(0, crc2.canvas.height);
            activeRadius = randomBetween(100, 250);
            crc2.beginPath();
            crc2.arc(activeX, activeY, activeRadius, 0, Math.PI * 2);
            crc2.fillStyle = "#0000FF88";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(activeX, activeY, activeRadius - randomBetween(10, 50), 0, Math.PI * 2);
            crc2.fillStyle = "#0000FF";
            crc2.fill();
            crc2.closePath();
        }
        grad1 = crc2.createRadialGradient(0, 0, 750, crc2.canvas.width, crc2.canvas.height, 750);
        grad1.addColorStop(0, "#FFFFFF");
        grad1.addColorStop(0.4, "#00FFFF");
        grad1.addColorStop(0.6, "#00FFFF");
        grad1.addColorStop(1, "#0000FF");
        for (let i = 0; i < randomBetween(50, 75); i++) {
            activeX = randomBetween(0, crc2.canvas.width);
            activeY = randomBetween(0, crc2.canvas.height);
            activeRadius = randomBetween(50, 150);
            crc2.beginPath();
            crc2.arc(activeX, activeY, activeRadius, 0, Math.PI * 2);
            crc2.fillStyle = "#00FFFF88";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(activeX, activeY, activeRadius - randomBetween(10, 25), 0, Math.PI * 2);
            crc2.fillStyle = grad1;
            crc2.fill();
            crc2.closePath();
        }
        grad2 = crc2.createLinearGradient(0, crc2.canvas.height, crc2.canvas.width, 0);
        grad2.addColorStop(0, "#000000");
        grad2.addColorStop(0.5, "#0000FF");
        grad2.addColorStop(0.75, "#00FFFF");
        grad2.addColorStop(1, "#FFFFFF");
        for (let i = 0; i < randomBetween(75, 100); i++) {
            activeX = randomBetween(0, crc2.canvas.width);
            activeY = randomBetween(0, crc2.canvas.height);
            activeRadius = randomBetween(10, 50);
            crc2.beginPath();
            crc2.arc(activeX, activeY, activeRadius, 0, Math.PI * 2);
            crc2.fillStyle = "#FFFFFF88";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(activeX, activeY, activeRadius - randomBetween(1, 9), 0, Math.PI * 2);
            crc2.fillStyle = grad2;
            crc2.fill();
            crc2.closePath();
            circleCoordinate.push([activeX, activeY]);
        }
        console.log(circleCoordinate);
    }
    function drawLines() {
        crc2.lineWidth = 3;
        for (let i = 0; i < circleCoordinate.length - 1; i++) {
            crc2.beginPath();
            crc2.moveTo(circleCoordinate[i][0], circleCoordinate[i][1]);
            crc2.lineTo(circleCoordinate[i + 1][0], circleCoordinate[i + 1][1]);
            crc2.closePath();
            crc2.strokeStyle = grad2;
            crc2.stroke();
        }
    }
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})(canvas_test || (canvas_test = {}));
//# sourceMappingURL=canvas_script.js.map