namespace L11_Vogelhaus_advanced
{
 export class Tree
 {
     widthTrunk: number;
     heightTrunk: number;
     width: number;
     height: number;
     scale: number;
     tint: number;
     constructor(_widthTrunk: number, _heightTrunk: number, _width: number, _height: number, _scale: number, _tint: number) 
     {
         this.set(_widthTrunk, _heightTrunk, _width, _height, _scale, _tint);
     }
 
     set(_widthTrunk: number, _heightTrunk: number, _width: number, _height: number, _scale: number, _tint: number): void 
     {
         this.widthTrunk = _widthTrunk;
         this.heightTrunk = _heightTrunk;
         this.width = _width;
         this.height = _height;
         this.scale = _scale;
         this.tint = _tint;
     }
     draw(): void
     {
         crc2.scale(this.scale, this.scale);
         crc2.fillStyle = "hsl(30, 100%, " + this.tint + "%)";
         crc2.fillRect(-(this.widthTrunk / 2), 0, this.widthTrunk, -this.heightTrunk);
         crc2.beginPath();
         crc2.moveTo(0, -this.heightTrunk);
         crc2.lineTo(-(this.width / 2), -(this.heightTrunk));
         crc2.lineTo(0, -this.height);
         crc2.lineTo(this.width / 2, -(this.heightTrunk));
         crc2.closePath();
         crc2.fillStyle = "hsl(140, 100%, " + this.tint + "%)";
         crc2.fill();
     }
 } 
}