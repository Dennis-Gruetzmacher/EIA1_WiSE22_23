namespace L11_Vogelhaus_advanced
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