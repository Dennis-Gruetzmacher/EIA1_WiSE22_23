/*
Aufgabe: L10.2_Vogelhaus_Poly
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 20.01.2023
Quellen:
*/
namespace L10_2_Vogelhaus_classes
{
    export class Snowflake extends MovingObject
    {
        constructor(_xPos: number, _yPos: number, _zLevel: number, _direction: boolean, _status: string, _goal: string, _xGoal: number, _yGoal: number, _zGoal: number)
        {
            super(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal);
            this.setSnowflake();
        }
        setSnowflake(): void
        {
            this.xGoal = this.xPos;
            this.yGoal = canvas.height;
        }
        draw(): void
        {
            crc2.translate(this.xPos, this.yPos);
            crc2.beginPath();
            crc2.fillStyle = "#FFF";
            crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.resetTransform();
        }
        update(): void
        {
            if(super.checkGoalreached() == true)
            {
                this.yPos = 0;
                this.xPos = randomBetween(0, canvas.width);
                this.xGoal = this.xPos;
            }
            else
            {
                this.yPos += 5;
            }
        }
    }
}   