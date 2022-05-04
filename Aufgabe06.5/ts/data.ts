/******Variablen und Konstanten*******/
/*Deutschland, Frankreich, Italien, Niederlande*/

var currentPopEU:number = 447.01;
var baselineYear: number = 2008;
var nameCountry: string [] = ["Deutschland", "Frankreich", "Italien", "Niederlande"];
var currentPopCountry:number[] = [83.24,67.39,59.55,17.44];
var baselinePopCountry: number [] = [82.11,64.37,58.83,16.45];
var currentGrowth: number[] = [];
var currentPercentage: number[] = [];
var absoluteGrowth: number[] = [];

/**********Berechnungen und Ausgaben in die Konsole**************/
/*Ausgabe der aktuellen Bevölkerung pro Land*/
console.log("Ausgabe der aktuellen Gesamtbevölkerung pro Land");
for (let i=0;i<4;i++)
{
   console.log("Land: " + nameCountry[i] + ". Gesamtbevölkerung im Jahr 2022: " + currentPopCountry[i] + " Mio. Einwohner");
}
/*Berechnung und Ausgabe des Prozentualen Anteils im Vergleich zur europäischen Gesamtbevölkerung*/
/*Prozentualer Anteil = (Landesbevölkerung/EU Bevölkerung) *100*/
console.log("Ausgabe des prozentualen Anteils an der europäischen Gesamtbevölkerung");
for (let i=0;i<4;i++)
{
   currentPercentage[i] = (currentPopCountry[i]/currentPopEU)*100;
   console.log("Land: " + nameCountry[i] + ". Prozentualer Anteil an der Gesamtbevälkerung der EU: " + round(currentPercentage[i],2) + "%");
}
/*Berechnung und Ausgabe der prozentualen Wachstumsrate auf das baseline Jahr bezogen*/
/*Wachstum in Prozent vom Grundwert ausgehend = ((Aktueller Wert / Grundwert) - 1) * 100*/
console.log("Ausgabe der Wachstumsrate bezogen auf das Jahr " + baselineYear);
for (let i=0;i<4;i++)
{
   currentGrowth[i] = (((currentPopCountry[i]/baselinePopCountry[i])-1)*100);
   console.log("Land: " + nameCountry[i] + ". Prozentuales Wachstum der Bevölkerung seit " + baselineYear + ": " + round(currentGrowth[i],2) + "%");
}
/*Berechnung und Ausgabe des absoluten Bevölkerungswachstums der Länder*/
/**/
console.log("Ausgabe des absoluten Bevölkerungswachstums bezogen auf das Jahr " + baselineYear);
for (let i=0;i<4;i++)
{
   absoluteGrowth[i] = currentPopCountry[i]-baselinePopCountry[i];
   console.log("Land: " + nameCountry[i] + ". Absolutes Wachstum der Bevölkerung seit 2018: " + round(absoluteGrowth[i],2) + " Mio. Einwohner");
}

const currentPop = document.querySelector("#currentPop h2");
currentPop.textContent = round(currentPopCountry[0], 2) + " Mio.";
const text1 = document.querySelector("#currentPop p");
text1.textContent = "Gesamtzahl Einwohnerinnen und Einwohner in " + nameCountry[0] + " in 2022";

const curPer = document.querySelector("#currentPercentage h2");
curPer.textContent = round(currentPercentage[0], 2) + " %";

const curGro = document.querySelector("#currentGrowth h2");
curGro.textContent = round(currentGrowth[0], 2) + " %";

const absGro = document.querySelector("#absoluteGrowth h2");
absGro.textContent = round(absoluteGrowth[0], 2) + " Mio.";

/*Funktionen*/
/*Runde eine Nummer, precision = anzahl nachkommastellen*/
/*function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}*/