namespace L11_Vogelhaus_advanced
{
 export class Bird extends MovingObject
 {
    rotation: number;
    wingFlapping: boolean;
    colorHead: string;
    colorBody: string;

    constructor(_xPos: number, _yPos: number, _zLevel: number, _direction: boolean, _status: string, _goal: string, _xGoal: number, _yGoal: number, _zGoal: number, _colorHead: string, _colorBody: string)
    {
        super(_xPos, _yPos, _zLevel, _direction, _status, _goal, _xGoal, _yGoal, _zGoal);
        this.setBird(_colorHead, _colorBody);
    }
    setBird(_colorHead: string, _colorBody: string): void
    {
        this.xGoal = randomBetween(snowmanAreaX + 50, canvas.width);
        this.zGoal = randomBetween(0, 6);
        this.yGoal = canvas.height - (this.zGoal * 20 );

        this.colorHead = _colorHead;
        this.colorBody = _colorBody;
        this.rotation = 0;
        this.wingFlapping = false;
    }
     draw(): void
     {
        crc2.translate(this.xPos, this.yPos);
        if( this.direction == true )
        {
            crc2.scale(-1, 1);
        }
        if(this.zLevel > 0)
        {
            crc2.scale( 1 - this.zLevel / 10, 1 - this.zLevel / 10);
        }
            //draw Feet
        if (this.status !== "Flying")
        {
            crc2.beginPath();
            crc2.moveTo(-5, 0);
            crc2.lineTo(-5, 20);
            crc2.strokeStyle = "#000000";
            crc2.closePath();
            crc2.stroke();
        }
         //draw Body
        crc2.rotate(Math.PI * this.rotation);
        crc2.rotate(Math.PI * 0.2);
        crc2.scale(2, 1);
        crc2.beginPath();
        crc2.fillStyle = this.colorBody;
        crc2.arc(0, 0, 12, Math.PI * 0.5, Math.PI * 1.5);
        crc2.lineTo(15, -2);
        crc2.lineTo(15, 2);
        crc2.closePath();
        crc2.fill();
        //draw Wing
        crc2.beginPath();
        crc2.fillStyle = this.colorHead;
        crc2.scale(1.5, 1);
        crc2.arc(0, 0, 5, 0, Math.PI);
        crc2.closePath();
        crc2.fill();
        if (this.status == "Flying")
        {
            if (this.wingFlapping == true)
            {
                crc2.beginPath();
                crc2.fillStyle = this.colorHead;
                crc2.scale(1, 5);
                crc2.arc(0, 0, 5, Math.PI, Math.PI * 2);
                crc2.closePath();
                crc2.fill();
                crc2.scale(1, 0.2);
                this.wingFlapping = false;
            }
            else
            {
                this.wingFlapping = true;
            }
        }
        crc2.scale(0.75, 1);
         //end body rotation and scaling
        crc2.scale(0.5, 1);
        crc2.rotate(Math.PI * -0.2);
         //draw Beak
        crc2.translate(-20, -20);
        crc2.beginPath();
        crc2.moveTo(0, -10);
        crc2.lineTo(-20, 0);
        crc2.lineTo(0, 10);
        crc2.fillStyle = "#ff9900";
        crc2.closePath();
        crc2.fill();
         //draw Head
        crc2.beginPath();
        crc2.fillStyle = this.colorHead;
        crc2.arc(0, 0, 10, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();   
        crc2.resetTransform();
    }
    update(): void
    {
        if (super.checkGoalreached() == true)
        {
            if (this.status == "Flying" && this.goal == "RandomGround")
            {
                this.status = "FeedingDOWN";
            }
            else
            if ( this.status == "FeedingDOWN" && this.goal == "RandomGround")
            {
                if ( this.rotation > -0.4)
                {
                    this.rotation = this.rotation - 0.03;
                }
                else
                if ( this.rotation <= -0.4 )
                {
                    this.status = "FeedingUP";
                }
            }  
            else
            if ( this.status == "FeedingUP" && this.goal == "RandomGround")
            {
                if ( this.rotation < 0 )
                {
                    this.rotation = this.rotation + 0.03;
                }
                else
                if ( this.rotation >= 0)
                {
                    if ( randomBetween(1, 50) == 25 )
                    {
                        this.status = "Flying";
                        this.goal = "EntryBirdshouse";
                        this.xGoal = xEntryBirdshouse;
                        this.yGoal = yEntryBirdshouse;
                        this.zGoal = 3;
                    }
                    else
                    {
                        this.status = "FeedingDOWN";
                    }
                }
            }
            else
            if ( this.status == "Flying" && this.goal == "EntryBirdshouse")
            {
                this.xGoal = xEntryBirdshouse + 80;
                this.goal = "InsideBirdshouse";
                this.status = "GoingIntoBirdshouse";
            }
            else
            if ( this.status == "GoingIntoBirdshouse" && this.goal == "InsideBirdshouse")
            {
                if(randomBetween(1, 200) == 100)
                {
                    this.xGoal = xEntryBirdshouse;
                    this.goal = "EntryBirdshouse";
                    this.status = "LeavingBirdshouse";
                }
            }
            else
            if ( this.status == "LeavingBirdshouse" && this.goal == "EntryBirdshouse")
            {
                if (randomBetween(0, 1) == 1)
                {
                    this.status = "Flying";
                    this.goal = "RandomGround";
                    this.xGoal = randomBetween(snowmanAreaX + 50, canvas.width);
                    this.zGoal = randomBetween(0, 6);
                    this.yGoal = canvas.height - (this.zGoal * 20 );
                }
                else
                if (randomBetween(0, 5) == 5)
                {
                    this.status = "Flying";
                    this.goal = "RandomSky";
                    this.xGoal = randomBetween(0, canvas.width);
                    this.zGoal = randomBetween(0, 6);
                    this.yGoal = -50;
                }
            }
            else
            if ( this.status == "Flying" && this.goal == "RandomSky")
            {
                if (randomBetween(0, 200) == 100)
                {
                    this.status = "Flying";
                    this.goal = "RandomGround";
                    this.xGoal = randomBetween(snowmanAreaX + 50, canvas.width);
                    this.zGoal = randomBetween(0, 6);
                    this.yGoal = canvas.height - (this.zGoal * 20 );
                }
                else
                if (randomBetween(0, 200) == 100)
                {
                    this.status = "Flying";
                    this.goal = "EntryBirdshouse";
                    this.xGoal = xEntryBirdshouse;
                    this.yGoal = yEntryBirdshouse;
                    this.zGoal = 3;
                }
            }
            
        }
        else
        {
            super.move();
        }   
    }
 }
} 