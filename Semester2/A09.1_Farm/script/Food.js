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
    class Food {
        type;
        totalAmount;
        constructor(_type, _totalAmount) {
            this.type = _type;
            this.totalAmount = _totalAmount;
        }
        manageAmount(_eatenAmount) {
            this.totalAmount = this.totalAmount - _eatenAmount;
            this.print(_eatenAmount);
        }
        print(_eatenAmount) {
            let type = document.getElementById("type");
            type.innerHTML = this.type;
            let eaten = document.getElementById("eaten");
            eaten.innerHTML = _eatenAmount.toString();
            let left = document.getElementById("left");
            left.innerHTML = this.totalAmount.toString();
        }
    }
    L09_1_Farm.Food = Food;
})(L09_1_Farm || (L09_1_Farm = {}));
//# sourceMappingURL=Food.js.map