/*
Aufgabe: L10.2_Vogelhaus_Poly
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 20.01.2023
Quellen:
*/
namespace L10_2_Vogelhaus_classes
{    
    export function drawBackground(): void
    {
        drawSky();
        drawSun(randomBetween(0, 50), randomBetween(0, 50));
        drawMountains();
        drawClouds();
        drawGround();
        drawTrees();
        drawSnowman(randomBetween(20, snowmanAreaX), randomBetween(snowmanAreaY + 50, snowmanAreaY + 150));
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
}    