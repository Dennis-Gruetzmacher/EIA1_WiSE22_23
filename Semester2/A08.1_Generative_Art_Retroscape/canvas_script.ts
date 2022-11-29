namespace canvas_test
{
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let horizonPoint: number;
    let vanishingPointX: number;
    let distanceGroundLinesTop: number;
    let distanceGroundLinesBottom: number;
    let amountGroundLines: number;
    let distanceHorizonLines: number;
    let startpointMountain: number;
    let currentXMountain: number;
    let activeMoonX: number;
    let activeMoonY: number;
    let ColorSpaces: string[][] = 
    [
        ["#95A8FF", "#5536FF", "#14069C", "#10076C", "#251197"],  //blue - light, fill1, fill2, fill3, dark
        ["#B1FEB6", "#0CE800", "#176F00", "#124305", "#033E00"],  //green
        ["#FFA756", "#FF3900", "#AC3300", "#601D00", "#4D1100"]   //red     
    ];
    let gradientGround: CanvasGradient;
    let gradientSky: CanvasGradient;
    let gradientMountains: CanvasGradient;
    let gradientMoons: CanvasGradient;
    let activeColorSpace: number;
    let activeMoonRadius: number;
    let activeCityX: number;
    let activeCityY: number;
    let activeCityWidth: number;
    let cityBubbleHeight: number;
    let activeBuildingWidth: number;
    function handleLoad(): void
    {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        prepareDrawing();
        drawOnCanvas();
    }
    function prepareDrawing(): void
    {
        horizonPoint = randomBetween(500, 700);
        vanishingPointX = randomBetween(250, 1250);
        distanceGroundLinesTop = randomBetween(20, 100);
        distanceGroundLinesBottom = distanceGroundLinesTop * randomBetween(3, 10);
        amountGroundLines = Math.round(crc2.canvas.width / distanceGroundLinesTop);
        distanceHorizonLines = randomBetween(20, 50);
        activeColorSpace = randomBetween(0, 2);
    }
    function drawOnCanvas(): void
    {
        createBackground();
        createStars();
        createMoons();
        createMountains();
        createHorizon();
        createGround();
        createBubbleCity();
        createCRT();
    }
    function createBackground(): void
    {
        gradientSky = crc2.createLinearGradient(0, 0, 0, horizonPoint);
        gradientSky.addColorStop(0, "#000000");
        gradientSky.addColorStop(0.6, "#000000");
        gradientSky.addColorStop(0.8, "#171429");
        gradientSky.addColorStop(1, "#171429");
        crc2.fillStyle = gradientSky;
        crc2.fillRect(0, 0, crc2.canvas.width, horizonPoint);
    }
    function createStars(): void
    {
        crc2.strokeStyle = ColorSpaces[activeColorSpace][0];
        crc2.fillStyle = ColorSpaces[activeColorSpace][1];
        for (let i: number = 10; i < randomBetween(50, 80); i++)
        {
            strokeStar(randomBetween(0, crc2.canvas.width), randomBetween(0, horizonPoint), randomBetween(2, 5), randomBetween(5, 8), randomBetween(1, 4));
        }
    }
    function strokeStar(x: number, y: number, r: number, n: number, inset: number): void
    {
        crc2.beginPath();
        crc2.translate(x, y);
        crc2.moveTo(0, 0 - r);
        for (let i: number = 0; i < n; i++) {
            crc2.rotate(Math.PI / n);
            crc2.lineTo(0, 0 - (r * inset));
            crc2.rotate(Math.PI / n);
            crc2.lineTo(0, 0 - r);
        }
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.resetTransform();
    }
    function createMoons(): void
    {
        
        for (let i: number = 0; i < randomBetween(1, 5); i++)
        {  
            activeMoonX = randomBetween(0, crc2.canvas.width);
            activeMoonY = randomBetween(0, horizonPoint);
            crc2.translate(activeMoonX, activeMoonY);
            activeMoonRadius = randomBetween(30, 150);
            gradientMoons = crc2.createRadialGradient(0, 0, 7, activeMoonRadius, activeMoonRadius, activeMoonRadius * 2);
            gradientMoons.addColorStop(0, ColorSpaces[activeColorSpace][1]);
            gradientMoons.addColorStop(0.5, ColorSpaces[activeColorSpace][2]);
            gradientMoons.addColorStop(1, ColorSpaces[activeColorSpace][3]);
            crc2.beginPath();
            crc2.fillStyle = gradientMoons;
            crc2.strokeStyle = ColorSpaces[activeColorSpace][3];
            crc2.arc(0, 0, activeMoonRadius, 0, Math.PI * 2);
            crc2.fill();
            crc2.stroke();      
            crc2.resetTransform();
        }
    }
    function createMountains(): void
    {
        gradientMountains = crc2.createLinearGradient(0, horizonPoint, 0, horizonPoint - 150);
        gradientMountains.addColorStop(0, ColorSpaces[activeColorSpace][4]);
        gradientMountains.addColorStop(0.5, ColorSpaces[activeColorSpace][3]);
        gradientMountains.addColorStop(1, ColorSpaces[activeColorSpace][2]);
        for(let i: number = 0; i < randomBetween(5, 10); i++)
        {
            crc2.beginPath();
            startpointMountain = randomBetween(-100, 900);
            crc2.moveTo(startpointMountain, horizonPoint);
            currentXMountain = startpointMountain + randomBetween(25, 100);
            for(let j: number = 0; j < randomBetween(1, 15); j++)
            {
                crc2.lineTo(currentXMountain, horizonPoint - (randomBetween(20, 150)));
                currentXMountain += randomBetween(25, 100);
            }
            crc2.lineTo(currentXMountain, horizonPoint);
            crc2.closePath();
            crc2.fillStyle = gradientMountains;
            crc2.strokeStyle = ColorSpaces[activeColorSpace][4];
            crc2.lineWidth = 2;
            crc2.fill();
            crc2.stroke();
        }
    }
    function createHorizon(): void
    {
        crc2.beginPath();
        crc2.rect(0, horizonPoint, crc2.canvas.width, horizonPoint);
        gradientGround = crc2.createLinearGradient(crc2.canvas.width / 2, horizonPoint, crc2.canvas.width / 2, crc2.canvas.height);
        gradientGround.addColorStop(0, ColorSpaces[activeColorSpace][3]);
        gradientGround.addColorStop(0, ColorSpaces[activeColorSpace][2]);
        gradientGround.addColorStop(1, ColorSpaces[activeColorSpace][1]);
        crc2.fillStyle = gradientGround;
        crc2.fill();
        crc2.lineWidth = 3;
        for (let i: number = 0; i < 25; i++)
        {
            crc2.beginPath();
            crc2.moveTo(0, horizonPoint + (distanceHorizonLines * i));
            crc2.lineTo(crc2.canvas.width, horizonPoint + (distanceHorizonLines * i));
            crc2.strokeStyle = ColorSpaces[activeColorSpace][0];
            crc2.stroke();
        }
    }
    function createGround(): void
    {
        crc2.strokeStyle = ColorSpaces[activeColorSpace][0];
        for (let i: number = 0; i <= amountGroundLines * 2; i++)
        {
            crc2.beginPath();
            crc2.moveTo(vanishingPointX - (distanceGroundLinesTop * i), horizonPoint);
            crc2.lineTo(750 - (distanceGroundLinesBottom * i), crc2.canvas.height);
            crc2.stroke();
        }
        for (let i: number = 0; i <= amountGroundLines * 2; i++)
        {
            crc2.beginPath();
            crc2.moveTo(vanishingPointX + (distanceGroundLinesTop * i), horizonPoint);
            crc2.lineTo(750 + (distanceGroundLinesBottom * i), crc2.canvas.height);
            crc2.stroke();
        }
        
    }
    function createBubbleCity(): void
    {
        for (let i: number = 0; i < randomBetween(1, 2); i++)
        {
            if (activeCityX == null)
            {
            activeCityX = randomBetween(100, crc2.canvas.width - 100);
            activeCityY = randomBetween(horizonPoint, horizonPoint + 200);
            }
            else
            {
                if (activeCityX > 750)
                {
                    activeCityX = randomBetween(100, crc2.canvas.width - 900);
                    activeCityY = randomBetween(horizonPoint, horizonPoint + 200);
                }
                else
                {
                    activeCityX = randomBetween(900, crc2.canvas.width - 100);
                    activeCityY = randomBetween(horizonPoint, horizonPoint + 200);
                }
            }
            activeCityWidth = randomBetween(100, 250);
            crc2.translate(activeCityX, activeCityY);
            createCenterTowers(activeCityWidth);
            createMiddleTowers(activeCityWidth);
            createFrontTowers(activeCityWidth);
            createBubble(activeCityWidth);
            createFoundation(activeCityWidth);
            crc2.resetTransform();
        }
        
    }
    function createCenterTowers(_cityWidth: number): void
    {
        cityBubbleHeight = randomBetween(30, 180);
        crc2.save();
        for (let i: number = 0; i < randomBetween(2, 6); i++)
        {
            crc2.save();
            crc2.translate(randomBetween(Math.round((-_cityWidth / 6)), Math.round((_cityWidth / 8))), 0);
            activeBuildingWidth = randomBetween(2, 8);
            crc2.beginPath();
            crc2.rect(activeBuildingWidth, 0, activeBuildingWidth * 2, Math.round(-(cityBubbleHeight - 20)));
            crc2.closePath();
            crc2.fillStyle = ColorSpaces[activeColorSpace][0];
            crc2.fill();
            crc2.strokeStyle = ColorSpaces[activeColorSpace][4];
            crc2.stroke();
            crc2.restore();
        }
        crc2.restore();
    }
    function createMiddleTowers(_cityWidth: number): void
    {
        crc2.save();
        for (let i: number = 0; i < randomBetween(15, 50); i++)
        {
            crc2.save();
            crc2.translate(randomBetween((-_cityWidth / 4), (_cityWidth / 4)), 0);
            activeBuildingWidth = randomBetween(2, 8);
            crc2.beginPath();
            crc2.rect(activeBuildingWidth, 0, activeBuildingWidth * 2, Math.round(-(cityBubbleHeight / 2)));
            crc2.closePath();
            crc2.fillStyle = ColorSpaces[activeColorSpace][0];
            crc2.fill();
            crc2.strokeStyle = ColorSpaces[activeColorSpace][4];
            crc2.stroke();
            crc2.restore();
        }
        crc2.restore();
    }
    function createFrontTowers(_cityWidth: number): void
    {
        crc2.save();
        for (let i: number = 0; i < randomBetween(15, 50); i++)
        {
            crc2.save();
            crc2.translate(randomBetween((-_cityWidth / 2) + 10, (_cityWidth / 2) - 30), 0);
            activeBuildingWidth = randomBetween(2, 8);
            crc2.beginPath();
            crc2.rect(activeBuildingWidth, 0, activeBuildingWidth * 2, Math.round(-(cityBubbleHeight / 3)));
            crc2.closePath();
            crc2.fillStyle = ColorSpaces[activeColorSpace][0];
            crc2.fill();
            crc2.strokeStyle = ColorSpaces[activeColorSpace][4];
            crc2.stroke();
            crc2.restore();
        }
        crc2.restore();
    }
    function createBubble(_cityWidth: number): void
    {
        crc2.beginPath();
        crc2.ellipse(0, 0, cityBubbleHeight, _cityWidth / 2, -Math.PI * 0.5, -Math.PI * 0.5, Math.PI * 0.5);
        crc2.closePath();
        crc2.strokeStyle = ColorSpaces[activeColorSpace][2];
        crc2.stroke();
        crc2.fillStyle = ColorSpaces[activeColorSpace][1] + "55";
        crc2.fill();
    }
    function createFoundation(_cityWidth: number): void
    {
        crc2.beginPath();
        crc2.moveTo(-_cityWidth / 2, 0);
        crc2.lineTo(_cityWidth / 2, 0);
        crc2.lineTo((_cityWidth / 2) + 10, 20);
        crc2.lineTo((-_cityWidth / 2) - 10, 20);
        crc2.lineTo(-_cityWidth / 2, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = ColorSpaces[activeColorSpace][0];
        crc2.fill();

    }
    function createCRT(): void
    {
        for(let i: number = 0; i < crc2.canvas.height / 5; i++)
        {
            crc2.beginPath();
            crc2.moveTo(0, i * 5);
            crc2.lineTo(crc2.canvas.width, i * 5);
            crc2.strokeStyle = "#FFFFFF22";
            crc2.lineWidth = 2;
            crc2.stroke();
        }
    }

    function randomBetween(min: number, max: number): number
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}