namespace L11_Vogelhaus_advanced
{
export class Snowman
    {
        baseRadius: number;
        middleRadius: number;
        topRadius: number;
        
        constructor(_baseRadius: number, _middleRadius: number, _topRadius: number)
        {
            this.set(_baseRadius, _middleRadius, _topRadius);
        }
        set(_baseRadius: number, _middleRadius: number, _topRadius: number): void
        {
            this.baseRadius = _baseRadius;
            this.middleRadius = _middleRadius;
            this.topRadius = _topRadius;

        }
        draw(): void
        {
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#595959";
            //Draw Arms
            crc2.beginPath();
            crc2.moveTo(0, -(2 * this.baseRadius + this.middleRadius));
            crc2.lineTo(70, -(2 * this.baseRadius + this.middleRadius) - 20);
            crc2.moveTo(0, -(2 * this.baseRadius + this.middleRadius));
            crc2.lineTo(-70, -(2 * this.baseRadius + this.middleRadius) - 20);
            crc2.closePath();
            crc2.strokeStyle = "#804000";
            crc2.lineWidth = 3;
            crc2.stroke();
            //Draw TopPart
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.arc(0, -(2 * this.baseRadius + 2 * this.middleRadius + this.topRadius), this.topRadius, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2. stroke();
            //Draw Middle Part
            crc2.beginPath();
            crc2.arc(0, -(2 * this.baseRadius + this.middleRadius), this.middleRadius , 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2. stroke();
            //Draw BasePArt
            crc2.beginPath();
            crc2.arc(0, -this.baseRadius, this.baseRadius, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2. stroke();
            //Draw Eyes
            crc2.translate(0, -(2 * this.baseRadius + 2 * this.middleRadius + this.topRadius));
            crc2.beginPath();
            crc2.arc(-8, -5, 2, 0, Math.PI * 2);
            crc2.fillStyle = "#000000";
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(8, -5, 2, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            //Draw Nose
            crc2.beginPath();
            crc2.arc(0, 0, 4, 0, Math.PI * 2);
            crc2.fillStyle = "#ff9900";
            crc2.closePath();
            crc2.fill();
            //draw Mouth
            crc2.beginPath();
            crc2.arc(0, 3, 10, 0, Math.PI);
            crc2.stroke();
            crc2.closePath();
            //draw Buttons
            crc2. translate(0, this.topRadius + this.middleRadius);
            for (let i: number = -2; i < 3; i++)
            {
                crc2.beginPath();
                crc2.arc(0, i * 10, 3, 0, Math.PI * 2);
                crc2.fillStyle = "#000000";
                crc2.fill();
                crc2.closePath();
            }
            crc2.lineWidth = 1;
        }
    }
}