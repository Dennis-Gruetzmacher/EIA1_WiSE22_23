/*
Aufgabe: L09.2_Vogelhaus_Classes
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 
Quellen:
*/
namespace L09_2_Vogelhaus_classes
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
    export let animatedBirds: Bird[] = [];
     

    function handleLoad(): void
    {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        prepareDrawing();
        prepareBackground();
        prepareBirds();
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
    function prepareBirds(): void
    {
        for(let i: number = 0; i < 30; i++)
        {
            let bird: Bird = new Bird(randomBetween(snowmanAreaX + 50, canvas.width), -50, randomBetween(0, 6), generateRandomBool(), "Flying", "RandomGround", birdColors[randomBetween(0, 2)][randomBetween(0, 2)], birdColors[randomBetween(0, 2)][randomBetween(0, 2)]);
            animatedBirds.push(bird);
        }
    }
    function drawImage(): void
    {
        for(let i: number = 0; i < animatedBirds.length; i++)
        {
            animatedBirds[i].updateBird();
        }
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.putImageData(savedBackgroundImage, 0, 0);  
        for( let j: number = 6; j >= 0; j--)
        {
            for(let i: number = 0; i < animatedBirds.length; i++)
            {
                if ( animatedBirds[i].zLevel == j )
                {
                    animatedBirds[i].draw();
                }
            }
            if ( j == 3 )
            {
                crc2.translate(750 , crc2.canvas.height - 60);
                birdshouse = new Birdshouse;
                birdshouse.drawBase();
                crc2.resetTransform();
            }
            if ( j == 0 )
            {
                crc2.translate(750 , crc2.canvas.height - 60);
                birdshouse.drawTop();
                crc2.resetTransform();
            }
        }
        
    }
}