namespace L09_2_Vogelhaus_classes
{
 export class Bird
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
    rotation: number;
    wingFlapping: boolean;
    colorHead: string;
    colorBody: string;

    constructor(_xPos: number, _yPos: number, _zLevel: number, _direction: boolean, _status: string, _goal: string, _colorHead: string, _colorBody: string)
    {
        this.set(_xPos, _yPos, _zLevel, _direction, _status, _goal, _colorHead, _colorBody);
    }
    set(_xPos: number, _yPos: number, _zLevel: number, _direction: boolean, _status: string, _goal: string, _colorHead: string, _colorBody: string): void
    {
        this.xPos = _xPos;
        this.yPos = _yPos;
        this.zLevel = _zLevel;
        this.direction = _direction;
        this.status = _status;
        this.goal = _goal;
        this.colorHead = _colorHead;
        this.colorBody = _colorBody;
        this.xGoal = randomBetween(snowmanAreaX + 50, canvas.width);
        this.rotation = 0;
        this.zGoal = randomBetween(0, 6);
        this.yGoal = canvas.height - (this.zGoal * 20 );
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
                //crc2.fillStyle = this.colorHead;
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
    moveBird(): void
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
    updateBird(): void
    {
        if (this.checkGoalreached() == true)
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
                    if ( randomBetween(1, 2) == 2 )
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
                if(randomBetween(1,2) == 2)
                {
                    this.xGoal = xEntryBirdshouse;
                    this.goal = "EntryBirdshouse";
                    this.status = "LeavingBirdshouse";
                }
            }
            else
            if ( this.status == "LeavingBirdshouse" && this.goal == "EntryBirdshouse")
            {
                if (randomBetween(0, 3) == 3)
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
                if (randomBetween(0, 3) == 3)
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
                    this.goal = "EntryBirdshouse";
                    this.xGoal = xEntryBirdshouse;
                    this.yGoal = yEntryBirdshouse;
                    this.zGoal = 3;
                }
            }
            
        }
        else
        {
            this.moveBird();
        }   
        //this.draw();    
    }
 }
} 