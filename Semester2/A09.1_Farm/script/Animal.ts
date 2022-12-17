/*
Aufgabe: L09.1_OldMcDonaldsFarm
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 16.12.2022
Quellen: Natan Haider, Daniel Meier
*/

namespace L09_1_Farm
{    
    export class Animal 
    {
        species: string;
        name: string;
        food: Food;
        eatsAmount: number;
        sound: string;
        
        constructor( _species: string, _name: string, _food: Food, _eatsAmount: number, _sound: string) 
        {
            this.species = _species;
            this.name = _name;
            this.food = _food;
            this.eatsAmount = _eatsAmount;
            this.sound = _sound;
        }

        public eat(): void
        {
            this.food.manageAmount(this.eatsAmount);
        }

        public sing(): void
        {
            let speciesText: HTMLElement = <HTMLElement>document.getElementById("animal");
            speciesText.innerHTML = this.species + "s";
            let nameText: HTMLElement = <HTMLElement>document.getElementById("name");
            nameText.innerHTML = this.name;           

            for (let index: number = 0; index < 5; index++) 
            {
                let sound: HTMLElement = <HTMLElement>document.getElementById("noise" + index);
                if (index == 0 || index == 1 || index == 4) 
                {
                    sound.innerHTML = this.sound + " " + this.sound;
                }
                else 
                {
                    sound.innerHTML = this.sound;
                }
            }
        }    
}