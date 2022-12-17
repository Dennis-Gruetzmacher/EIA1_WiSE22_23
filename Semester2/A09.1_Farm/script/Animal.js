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
    class Animal {
        species;
        name;
        food;
        eatsAmount;
        sound;
        constructor(_species, _name, _food, _eatsAmount, _sound) {
            this.species = _species;
            this.name = _name;
            this.food = _food;
            this.eatsAmount = _eatsAmount;
            this.sound = _sound;
        }
        eat() {
            this.food.manageAmount(this.eatsAmount);
        }
        sing() {
            let speciesText = document.getElementById("animal");
            speciesText.innerHTML = this.species + "s";
            let nameText = document.getElementById("name");
            nameText.innerHTML = this.name;
            for (let index = 0; index < 5; index++) {
                let sound = document.getElementById("noise" + index);
                if (index == 0 || index == 1 || index == 4) {
                    sound.innerHTML = this.sound + " " + this.sound;
                }
                else {
                    sound.innerHTML = this.sound;
                }
            }
        }
    }
    L09_1_Farm.Animal = Animal;
})(L09_1_Farm || (L09_1_Farm = {}));
//# sourceMappingURL=Animal.js.map