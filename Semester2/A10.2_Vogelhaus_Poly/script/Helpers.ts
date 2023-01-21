/*
Aufgabe: L10.2_Vogelhaus_Poly
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 20.01.2023
Quellen:
*/
namespace L10_2_Vogelhaus_classes
{    
    export function randomBetween(min: number, max: number): number
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    export function setCoordinates( _xPos: number, _yPos: number): void
    {
       crc2.translate(_xPos, _yPos);
    }
    export function resetCoordinates(): void
    {
       crc2.resetTransform();
    }
    export function generateRandomBool(): boolean
    {
        let direction: boolean;
        let random: number = randomBetween(0, 1);
        if( random == 0)
        {
            direction = false;
        }
        else
        {
            direction = true;
        }
        return direction;
    }
}    