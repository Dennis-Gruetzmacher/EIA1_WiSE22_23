/*
Aufgabe: L09.1_OldMcDonaldsFarm
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 16.12.2022
Quellen: Natan Haider, Daniel Meier
*/
namespace L09_1_Farm 
{
    window.addEventListener("load", handleLoad);
    let interval: number;
    let index: number = 1;
    let animals: Animal[] = [];

    function handleLoad(): void 
    {      
        stockFarm();
        startSinging();
    }
    function stockFarm(): void
    {
        let foodPig: Food = new Food("Scraps", 200);
        let foodHay: Food = new Food("Hay", 100);
        let foodChicken: Food = new Food("Seeds", 50);
        let foodDucks: Food = new Food("Old Bread", 30);

        let pig: Animal = new Animal("Pig", "Peppa", foodPig, 5, "OINK",);      
        let cow: Animal = new Animal("Cow", "Gerda", foodHay, 10, "MOO");     
        let chicken: Animal = new Animal("Chicken", "Maria", foodChicken, 2, "CLUCK");
        let sheep: Animal = new Animal("Sheep", "Hannes", foodHay, 3, "BAAH");
        let duck: Animal = new Animal("Duck", "Tina", foodDucks, 1, "QUACK");

        animals.push(pig);
        animals.push(cow);
        animals.push(chicken);
        animals.push(sheep);
        animals.push(duck);
    }

    function startSinging(): void 
    {
        animals[0].sing();
        animals[0].eat();

        interval = setInterval(makeLyrics, 10000);
    }

    function makeLyrics(): void 
    {
        animals[index].sing();
        animals[index].eat();
        index++;
        if (index == animals.length) 
        {
            clearInterval(interval);
            index = 1;
        }
    }
}