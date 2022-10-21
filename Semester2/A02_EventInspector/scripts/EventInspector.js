"use strict";
/*
Aufgabe: L01_EventInspector
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 21.10.2022
Quellen: -
*/
var EventInspector;
(function (EventInspector) {
    let xPosition;
    let yPosition;
    let div0 = document.getElementById("div0");
    let div1 = document.getElementById("div1");
    let button1 = document.getElementById("button1");
    let infoBox = document.getElementById("span1");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        button1.addEventListener("click", triggerCustomEvent);
        document.addEventListener("customEvent", catchCustomEvent);
    }
    function setInfoBox(_event) {
        xPosition = _event.x;
        yPosition = _event.y;
        infoBox.innerHTML = "  x Position: " + xPosition + " px <br>   y Position: " + yPosition + " px <br>   Target: " + _event.target;
        infoBox.style.left = _event.pageX + 10 + "px";
        infoBox.style.top = _event.pageY + 10 + "px";
    }
    function logInfo(_event) {
        console.log("Current Target:" + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("Event-Phase: " + _event.eventPhase);
        console.log("Event-Type: " + _event.type);
        console.log(_event);
    }
    function triggerCustomEvent(_event) {
        let newCustomEvent = new CustomEvent("customEvent", { bubbles: true });
        button1.dispatchEvent(newCustomEvent);
    }
    function catchCustomEvent(_event) {
        console.log("CustomEvent durch Klick auf Button ausgelöst, von Document abgefangen.");
        console.log("Current Target:" + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("Event-Phase: " + _event.eventPhase);
        console.log("Event-Type: " + _event.type);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map