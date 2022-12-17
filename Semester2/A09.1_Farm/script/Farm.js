"use strict";
/*
Aufgabe: L09.1_OldMcDonaldsFarm
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 16.12.2022
Quellen: Natan Haider, Daniel Meier
*/
var L09_1_Farm;
(function (L09_1_Farm) {
    window.addEventListener("load", handleLoad);
    let interval;
    let index = 1;
    let animals = [];
    function handleLoad() {
        stockFarm();
        startSinging();
    }
    function stockFarm() {
        let foodPig = new L09_1_Farm.Food("Scraps", 200);
        let foodHay = new L09_1_Farm.Food("Hay", 100);
        let foodChicken = new L09_1_Farm.Food("Seeds", 50);
        let foodDucks = new L09_1_Farm.Food("Old Bread", 30);
        let pig = new L09_1_Farm.Animal("Pig", "Peppa", foodPig, 5, "OINK");
        let cow = new L09_1_Farm.Animal("Cow", "Gerda", foodHay, 10, "MOO");
        let chicken = new L09_1_Farm.Animal("Chicken", "Maria", foodChicken, 2, "CLUCK");
        let sheep = new L09_1_Farm.Animal("Sheep", "Hannes", foodHay, 3, "BAAH");
        let duck = new L09_1_Farm.Animal("Duck", "Tina", foodDucks, 1, "QUACK");
        animals.push(pig);
        animals.push(cow);
        animals.push(chicken);
        animals.push(sheep);
        animals.push(duck);
    }
    function startSinging() {
        animals[0].sing();
        animals[0].eat();
        interval = setInterval(makeLyrics, 10000);
    }
    function makeLyrics() {
        animals[index].sing();
        animals[index].eat();
        index++;
        if (index == animals.length) {
            clearInterval(interval);
            index = 1;
        }
    }
})(L09_1_Farm || (L09_1_Farm = {}));
//# sourceMappingURL=Farm.js.map