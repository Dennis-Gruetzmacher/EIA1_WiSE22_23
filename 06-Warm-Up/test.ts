console.log("Start");
var testNumber: number = 15;
console.log(testNumber);
var testString1: string = "Hallo";
console.log(testString1);
var testBoolean: boolean = true;
var testString2: string = "Wie geht es dir?"
var emptystring: string = " ";

console.log(testString1 + emptystring + testString2);
if (testBoolean == true) 
{
    console.log(testNumber);
    testNumber++;
    console.log(testNumber);
    testNumber++;
    console.log(testNumber);
}
for (let j=1; j<=3; j++)
{
    for (let i=1; i<=3; i++)
    {
        console.log("Block statement execution no." + j +" " + i);
        console.log( (j*3) +i);
    }
}