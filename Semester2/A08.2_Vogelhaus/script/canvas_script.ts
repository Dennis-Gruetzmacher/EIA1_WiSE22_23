/*
Aufgabe: L08.2_Vogelhaus
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 03.12.2022
Quellen: Natan Haider
*/
namespace L08_2_Vogelhaus
{
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let horizonPoint: number;
    let startpointMountain: number;
    let currentXMountain: number;
    let gradientSky: CanvasGradient;
    let gradientMountains: CanvasGradient;
    let heightFarTreeArea: number;
    let heightMiddleTreeArea: number;
    let heightNearTreeArea: number;
    let snowmanAreaX: number;
    let snowmanAreaY: number;
    let cloudHeight: number;
    let ColorSpaces: string[][] = 
    [
        ["hsl(0, 0%, 100%)", "hsl(0, 0%, 96%)", "hsl(0, 0%, 92%)", "hsl(0, 0%, 88%)", "hsl(0, 0%, 84%)"],  //snow
        ["hsl(0, 0%, 100%)", "hsl(0, 0%, 65%)", "hsl(0, 0%, 50%)", "hsl(0, 0%, 45%)", "hsl(0, 0%, 30%)"]  //mountains    
    ];
    let birdColors: string[][] = 
    [
        ["hsl(0, 100%, 45%)", "hsl(336, 100%, 50%)", "hsl(12, 100%, 55%)"],  //Red
        ["hsl(220, 100%, 60%)", "hsl(225, 100%, 45%)", "hsl(225, 100%, 35%)"],  //Blue    
        ["hsl(120, 60%, 45%)", "hsl(150, 100%, 40%)", "hsl(120, 100%, 30%)"]  //Green  
    ];
    class Tree
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

    class Snowman
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
    class Birdshouse
    {
        draw(): void
        {
            crc2.fillStyle = "#802b00";
            crc2.fillRect(-6, 0, 12, -100);
            crc2.fillStyle = "#663300";
            crc2.fillRect(-75, -100, 150, -150);
            crc2.translate(0, -175);
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.translate(0, 40);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#331a00";
            crc2.fill();
            crc2.fillRect(-105, -5, 30, 10);
            crc2.fillRect(75, -5, 30, 10);
            crc2.translate(0, -105);
            crc2.beginPath();
            crc2.moveTo(-100, 0);
            crc2.lineTo(0, -50);
            crc2.lineTo(100, 0);
            crc2.closePath();
            crc2.fillStyle = "#FF0000";
            crc2.fill();
        
        }
    }
    class Bird
    {
        colorHead: string;
        colorBody: string;
        constructor(_colorHead: string, _colorBody: string)
        {
            this.set(_colorHead, _colorBody);
        }
        set(_colorHead: string, _colorBody: string): void
        {
            this.colorHead = _colorHead;
            this.colorBody = _colorBody;
        }

        draw(): void
        {
            //draw Feet
            crc2.beginPath();
            crc2.moveTo(-5, 0);
            crc2.lineTo(-5, 20);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            //draw Body
            crc2.rotate(Math.PI * 0.2);
            crc2.scale(2, 1);
            crc2.beginPath();
            crc2.fillStyle = this.colorBody;
            crc2.arc(0, 0, 12, Math.PI * 0.5, Math.PI * 1.5);
            crc2.lineTo(15, -2);
            crc2.lineTo(15, 2);
            crc2.closePath();
            crc2.fill();
            //end body rotation and scaling
            crc2.scale(0.5, 1);
            crc2.rotate(Math.PI * -0.2);
            //draw Beak
            crc2.translate(-20, -20);
            crc2.beginPath();
            crc2.moveTo(0, -10);
            crc2.lineTo(-20, 0);
            crc2.lineTo(0, 10);
            crc2.closePath();
            crc2.fillStyle = "#ff9900";
            crc2.fill();
            //draw Head
            crc2.beginPath();
            crc2.fillStyle = this.colorHead;
            crc2.arc(0, 0, 10, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();   
        }
    }

    function handleLoad(): void
    {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        prepareDrawing();
        drawOnCanvas();
    }
    function prepareDrawing(): void
    {
        horizonPoint = randomBetween(150, 250);
        heightFarTreeArea = randomBetween(25, 50);
        heightMiddleTreeArea = randomBetween(30, 50);
        heightNearTreeArea = randomBetween(40, 60);
        snowmanAreaY = horizonPoint + heightFarTreeArea + heightMiddleTreeArea + heightNearTreeArea;
        snowmanAreaX = randomBetween(0, 100);
        cloudHeight = horizonPoint / 3;
    }
    function drawOnCanvas(): void
    {
        drawSky();
        drawSun(randomBetween(0, 50), randomBetween(0, 50));
        drawMountains();
        drawClouds();
        drawGround();
        drawTrees();
        drawSnowman(randomBetween(20, snowmanAreaX), randomBetween(snowmanAreaY + 50, snowmanAreaY + 150));
        drawBirds();
        drawBirdshouse();
        drawSnowfall();

    }
    function drawSky(): void
    {
        gradientSky = crc2.createLinearGradient(0, 0, 0, horizonPoint);
        gradientSky.addColorStop(0, "#3333ff");
        gradientSky.addColorStop(0.3, "#3333ff");
        gradientSky.addColorStop(0.75, "#eeeeff");
        gradientSky.addColorStop(1, "#eeeeff");
        crc2.fillStyle = gradientSky;
        crc2.fillRect(0, 0, crc2.canvas.width, horizonPoint);
    }

    function drawSun(_sunX: number, _sunY: number): void
    {
        let radius1: number = 30;
        let radius2: number = 130;
        let sunGradient: CanvasGradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        sunGradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        sunGradient.addColorStop(1, "HSLA(60, 0%, 90%, 0)");
        crc2.translate(_sunX, _sunY);
        crc2.fillStyle = sunGradient;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.resetTransform();
    }

    function drawMountains(): void
    {
        gradientMountains = crc2.createLinearGradient(0, horizonPoint, 0, horizonPoint - 150);
        gradientMountains.addColorStop(1, ColorSpaces[1][0]);
        gradientMountains.addColorStop(0.7, ColorSpaces[1][0]);
        gradientMountains.addColorStop(0.6, ColorSpaces[1][1]);
        gradientMountains.addColorStop(0.3, ColorSpaces[1][2]);
        gradientMountains.addColorStop(0, ColorSpaces[1][3]);
        for(let i: number = 0; i < randomBetween(5, 10); i++)
        {
            crc2.beginPath();
            startpointMountain = randomBetween(-100, 600);
            crc2.moveTo(startpointMountain, horizonPoint);
            currentXMountain = startpointMountain + randomBetween(25, 100);
            for(let j: number = 0; j < randomBetween(1, 20); j++)
            {
                crc2.lineTo(currentXMountain, horizonPoint - (randomBetween(20, 150)));
                currentXMountain += randomBetween(25, 100);
            }
            crc2.lineTo(currentXMountain, horizonPoint);
            crc2.closePath();
            crc2.fillStyle = gradientMountains;
            crc2.strokeStyle = ColorSpaces[1][4];
            crc2.lineWidth = 2;
            crc2.fill();
            crc2.stroke();
        }
    }

    function drawClouds(): void
    {
        let cloudRadius1: number;
        let cloudRadius2: number;
        for( let i: number = 0; i < randomBetween(20, 50); i++)
        {
            cloudRadius1 = randomBetween(10, 20);
            cloudRadius2 = cloudRadius1 + 40;
            crc2.translate(randomBetween(250, crc2.canvas.width + 50), cloudHeight + randomBetween(-10, 10));
            crc2.scale(3, 1);
            let cloudGradient: CanvasGradient = crc2.createRadialGradient(0, 0, cloudRadius1, 0, 0, cloudRadius2);
            cloudGradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            cloudGradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
            crc2.fillStyle = cloudGradient;
            crc2.beginPath();
            crc2.arc(0, 0, cloudRadius2, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            crc2.resetTransform();
        }
    }

    function drawGround(): void
    {
        for (let j: number = horizonPoint; j <= crc2.canvas.height; j++)
        {
            for (let i: number = 0; i <= crc2.canvas.width; i++)
            {
                crc2.fillStyle = ColorSpaces[0][randomBetween(0, 4)];
                crc2.fillRect(i, j, 1, 1);
            }
        } 
        crc2.fillStyle = "HSLA(0, 0%, 100%, 0.6)";
        crc2.fillRect(0, horizonPoint, crc2.canvas.width, crc2.canvas.height - horizonPoint);
    }
    function drawTrees(): void
    {
        for (let j: number = horizonPoint; j <= horizonPoint + heightFarTreeArea; j = j + randomBetween(3, 8))
        {
            for (let i: number = 0; i <= crc2.canvas.width; i = i + randomBetween(5, 10))
            {
                crc2.translate(i, j + randomBetween(-3, 3));
                let tree: Tree = new Tree(4, 10, 10, 30, 1, 10);
                tree.draw();
                crc2.resetTransform();
            }
        }
        for (let j: number = horizonPoint + heightFarTreeArea; j <= horizonPoint + heightFarTreeArea + heightMiddleTreeArea; j = j + randomBetween(5, 15))
        {
            for (let i: number = 0; i <= crc2.canvas.width; i = i + randomBetween(5, 20))
            {
                crc2.translate(i, j + randomBetween(-3, 3));
                let tree: Tree = new Tree(4, 10, 10, 30, 1.5, 20);
                tree.draw();
                crc2.resetTransform();
            }
        }
        for (let j: number = horizonPoint + heightFarTreeArea + heightMiddleTreeArea; j <= horizonPoint + heightFarTreeArea + heightMiddleTreeArea + heightNearTreeArea; j = j + randomBetween(10, 20))
        {
            for (let i: number = 0; i <= crc2.canvas.width; i = i + randomBetween(10, 25))
            {
                crc2.translate(i, j + randomBetween(-3, 3));
                let tree: Tree = new Tree(4, 10, 10, 30, 2, 30);
                tree.draw();
                crc2.resetTransform();
            }
        }
    }
    
    function drawSnowman(_xPosition: number, _yPosition: number): void
    {
        crc2.translate(_xPosition, _yPosition);
        let snowman: Snowman = new Snowman(40, 30, 20);
        snowman.draw();
        crc2.resetTransform();
    }
    
    function drawBirdshouse(): void
    {
        crc2.translate(randomBetween(500, 700), crc2.canvas.height);
        let birdshouse: Birdshouse = new Birdshouse;
        birdshouse.draw();
        crc2.resetTransform();
    }
    
    function drawBirds(): void
    {
        let randomdirection: number;
        for (let i: number = 0; i < randomBetween(10, 20); i++)
        {
            randomdirection = randomBetween(-1, 0);
            if(randomdirection == 0)
            {
                randomdirection = 1;
            }
            crc2.translate(randomBetween(200, crc2.canvas.width), randomBetween(crc2.canvas.height - 100, crc2.canvas.height - 25));
            crc2.scale(randomdirection, 1);
            let bird: Bird = new Bird(birdColors[randomBetween(0, 2)][randomBetween(0, 2)], birdColors[randomBetween(0, 2)][randomBetween(0, 2)]);
            bird.draw();
            crc2.resetTransform();
        }
    }

    function drawSnowfall(): void
    {

        for (let i: number = 1; i < randomBetween(400, 750); i++)
        {
            strokeSnowflake(randomBetween(0, crc2.canvas.width), randomBetween(0, crc2.canvas.height), randomBetween(1, 3), randomBetween(5, 6), randomBetween(1, 2));
        }
    }
    function strokeSnowflake(x: number, y: number, r: number, n: number, inset: number): void
    {
        crc2.beginPath();
        crc2.translate(x, y);
        let snowGradient: CanvasGradient = crc2.createRadialGradient(0, 0, 1, 0, 0, r + 2);
        snowGradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        snowGradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
        crc2.fillStyle = snowGradient;
        crc2.moveTo(0, 0 - r);
        for (let i: number = 0; i < n; i++) {
            crc2.rotate(Math.PI / n);
            crc2.lineTo(0, 0 - (r * inset));
            crc2.rotate(Math.PI / n);
            crc2.lineTo(0, 0 - r);
        }
        crc2.closePath();
        crc2.fill();
        crc2.resetTransform();
    }
    }
    function randomBetween(min: number, max: number): number
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}