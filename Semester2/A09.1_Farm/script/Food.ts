/*
Aufgabe: L09.1_OldMcDonaldsFarm
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 16.12.2022
Quellen: Natan Haider, Daniel Meier
*/
namespace L09_1_Farm 
{
    export class Food 
    {
        type: string;
        totalAmount: number; 

        constructor(_type: string, _totalAmount: number) 
        {
            this.type = _type;
            this.totalAmount = _totalAmount; 
        }

        public manageAmount(_eatenAmount: number): void 
        {
           this.totalAmount = this.totalAmount - _eatenAmount;
           this.print(_eatenAmount); 
        }

        print(_eatenAmount: number): void  
        {
            let type: HTMLElement = <HTMLElement>document.getElementById("type");
            type.innerHTML = this.type; 
            let eaten: HTMLElement = <HTMLElement>document.getElementById("eaten");
            eaten.innerHTML = _eatenAmount.toString(); 
            let left: HTMLElement = <HTMLElement>document.getElementById("left");
            left.innerHTML = this.totalAmount.toString();
        }
    }
}