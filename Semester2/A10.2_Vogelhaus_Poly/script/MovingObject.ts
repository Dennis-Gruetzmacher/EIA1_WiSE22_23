/*
Aufgabe: L10.2_Vogelhaus_Poly
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 20.01.2023
Quellen:
*/
namespace L10_2_Vogelhaus_classes
{
 export class MovingObject
 {
    xPos: number;
    yPos: number;
    zLevel: number;
    direction: boolean;
    status: string;
    goal: string;
    xGoal: number;
    yGoal: number;
    zGoal: number;
 
 constructor(_xPos: number, _yPos: number, _zLevel: number, _direction: boolean,  _status: string, _goal: string, _xGoal: number, _yGoal: number, _zGoal: number)
    {
        this.set(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal);
    }
    set(_xPos: number, _yPos: number, _zLevel: number, _direction: boolean, _status: string, _goal: string, _xGoal: number, _yGoal: number, _zGoal: number): void
    {
        this.xPos = _xPos;
        this.yPos = _yPos;
        this.zLevel = _zLevel;
        this.direction = _direction;
        this.status = _status;
        this.goal = _goal;
        this.xGoal = _xGoal;
        this.yGoal = _yGoal;
        this.zGoal = _zGoal;
    }
    checkGoalreached(): boolean
    {
        if ( (this.yPos + 5 >= this.yGoal) && (this.xPos + 5 >= this.xGoal) && (this.zLevel == this.zGoal) )
        {
            if ((this.yPos - 5 <= this.yGoal) && (this.xPos - 5 <= this.xGoal))
            {
                return true;
            }
            else
            {
                return false;
            }             
        }
        else
        {
            return false;
        }
    }
    move(): void
    {
        if ( this.yGoal >= this.yPos)
        {
            this.yPos += 5;
            if ( this.xGoal >= this.xPos)
            {
                this.direction = true;
                this.xPos += 5;
                if ( this.zLevel >= this.zGoal)
                {
                    this.zLevel -= 1;
                }
                else
                if (this.zLevel <= this.zGoal)
                {
                    this.zLevel += 1;
                }
            }
            else
            if (this.xGoal <= this.xPos)
            {
                this.direction = false;
                this.xPos -= 5;
                if ( this.zLevel >= this.zGoal)
                {
                    this.zLevel -= 1;
                }
                else
                if (this.zLevel <= this.zGoal)
                {
                    this.zLevel += 1;
                }
            }
        }
        else
        if (this.yGoal <= this.yPos)
        {
            this.yPos -= 5;
            if ( this.xGoal >= this.xPos)
            {
                this.direction = true;
                this.xPos += 5;
                if ( this.zLevel >= this.zGoal)
                {
                    this.zLevel -= 1;
                }
                else
                if (this.zLevel <= this.zGoal)
                {
                    this.zLevel += 1;
                }
            }
            else
            if (this.xGoal <= this.xPos)
            {
                this.direction = false;
                this.xPos -= 5;
                if ( this.zLevel >= this.zGoal)
                {
                    this.zLevel -= 1;
                }
                else
                if ( this.zLevel <= this.zGoal)
                {
                    this.zLevel += 1;
                }
            }
        }
    }

}
}    