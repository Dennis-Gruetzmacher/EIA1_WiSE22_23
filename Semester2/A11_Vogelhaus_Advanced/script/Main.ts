/*
Aufgabe: L09.2_Vogelhaus_Classes
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 
Quellen:
*/
namespace L11_Vogelhaus_advanced
{
    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let horizonPoint: number;
    export let startpointMountain: number;
    export let currentXMountain: number;
    export let gradientSky: CanvasGradient;
    export let gradientMountains: CanvasGradient;
    export let heightFarTreeArea: number;
    export let heightMiddleTreeArea: number;
    export let heightNearTreeArea: number;
    export  let snowmanAreaX: number;
    export  let snowmanAreaY: number;
    export  let cloudHeight: number;
    let savedBackgroundImage: ImageData;
    export let birdshouse: Birdshouse;
    export let xEntryBirdshouse: number = 655;
    export let yEntryBirdshouse: number = 285;
    export  let ColorSpaces: string[][] = 
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
    export let animatedObjects: MovingObject[] = [];
     
    function checkforBird(event: MouseEvent): void
    {
        for(let i: number = 0; i < animatedObjects.length; i++)
        {
            if((animatedObjects[i].xPos <= (event.offsetX + 10)) && (animatedObjects[i].xPos >= (event.offsetX - 10)))
            {
                if((animatedObjects[i].yPos <= (event.offsetY + 10)) && (animatedObjects[i].yPos >= (event.offsetY - 10)))
                {
                    if(animatedObjects[i] instanceof Bird)
                    {
                        animatedObjects.splice(i, 1);
                        return;
                    }
                    else
                    {
                        continue;
                    }
                }
                else
                {
                    continue;
                }
            }
            else
            {
                continue;
            }
        }
        createBird(event);
        
    }
    function createBird(click: MouseEvent): void
    {
        let newbird: Bird = new Bird(click.clientX, click.clientY, 2, generateRandomBool(), "Flying", "RandomGround", 0, 0, 0, birdColors[randomBetween(0, 2)][randomBetween(0, 2)], birdColors[randomBetween(0, 2)][randomBetween(0, 2)]);
        animatedObjects.push(newbird);
    }
    function handleLoad(): void
    {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        canvas.addEventListener("click", checkforBird);
        prepareDrawing();
        prepareBackground();
        prepareMovingObjects();
        setInterval(drawImage, 25);
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
    function prepareBackground(): void
    {
        drawBackground();
        savedBackgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function prepareMovingObjects(): void
    {
        for(let i: number = 0; i < 30; i++)
        {
            let bird: Bird = new Bird(randomBetween(snowmanAreaX + 50, canvas.width), -25, randomBetween(0, 6), generateRandomBool(), "Flying", "RandomGround", 0, 0, 0, birdColors[randomBetween(0, 2)][randomBetween(0, 2)], birdColors[randomBetween(0, 2)][randomBetween(0, 2)]);
            animatedObjects.push(bird);
        }
        for(let i: number = 0; i < 200; i++)
        {
            let snowflake: Snowflake = new Snowflake(randomBetween(0, canvas.width), randomBetween(0, canvas.height), 0, generateRandomBool(), "Falling", "RandomGround", 0, 0, 0);
            animatedObjects.push(snowflake);
            console.log(animatedObjects);
        }
    }
    function drawImage(): void
    {
        for(let i: number = 0; i < animatedObjects.length; i++)
        {
            if(animatedObjects[i] instanceof Bird)
            {
                let bird1: Bird = animatedObjects[i];
                bird1.update();
            }
            if(animatedObjects[i] instanceof Snowflake)
            {
                let snowflake1: Snowflake = animatedObjects[i];
                snowflake1.update();
            }
        }
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.putImageData(savedBackgroundImage, 0, 0);  
        for( let j: number = 6; j >= 0; j--)
        {
            for(let i: number = 0; i < animatedObjects.length; i++)
            {
                if ( animatedObjects[i].zLevel == j )
                {
                    if(animatedObjects[i] instanceof Bird)
                    {
                        let bird1: Bird = animatedObjects[i];
                        bird1.draw();
                    }
                    if(animatedObjects[i] instanceof Snowflake)
                    {
                        let snowflake1: Snowflake = animatedObjects[i];
                        snowflake1.draw();
                    }
                }
            }
            if ( j == 3 )
            {
                crc2.translate(750 , crc2.canvas.height - 60);
                birdshouse = new Birdshouse;
                birdshouse.drawBase();
                crc2.resetTransform();
            }
            if ( j == 1 )
            {
                crc2.translate(750 , crc2.canvas.height - 60);
                birdshouse.drawTop();
                crc2.resetTransform();
            }
        }
        
    }
}