/******Variablen und Konstanten*******/
/*Deutschland, Frankreich, Italien, Niederlande*/

/*Basisdaten: BEvölkerung EU + baseline Jahr zum Vergleichen*/
var currentPopEU: number = 447.01;
var baselineYear: number = 2008;
/*Array der Grunddaten --> coreData: Name des Landes, Aktuelle Bevölkerungszahl, Bevlkerung im baseline Jahr 2008*/
var coreData: any [][] = 
[ 
   [ "Deutschland", 83.24, 82.11 ], 
   [ "Frankreich", 67.39, 64.37 ], 
   ["Italien", 59.55, 58.83 ], 
   ["Niederlande", 17.44, 16.45 ] 
];
/*Array calcData - calculated Data --> berechnte Werte. Deklariert, noch nicht initialisiert*/
var calcData: number [][] = [ [], [], [], [] ]; 


/**********Berechnungen und Ausgaben in die Konsole**************/
/*Schleife zur Berechnung der Werte und Füllen des Arrays calcData*/
for (let i = 0; i < 4; i++)
{
   calcData[i][0] = ( coreData[i][1] / currentPopEU )*100; /*Berechnung des Prozentualen Anteils im Vergleich zur EU + Speichern der Ergebnise in calcData[i][0] */
   calcData[i][1] = ( ( ( coreData[i][1] / coreData[i][2]) - 1 ) * 100 ); /*Berchnung der Prozentualen Wachstumsrate für jedes Land + Speichern in calcData [i][1]*/
   calcData[i][2] = coreData[i][1] - coreData[i][2]; /*Berchnung der Absoluten Wachstumsrate für jedes Land + Speichern in calcData [i][2]*/
}
/*Schleife zur Ausgabe der berechneten Werte aus Array calcData*/
for (let i = 0; i < 4; i++)
{
   console.log("Land: " + coreData[i][0] );
   console.log(". Gesamtbevölkerung im Jahr 2022: " + coreData[i][1] + " Mio. Einwohner");
   console.log(". Prozentualer Anteil an der Gesamtbevölkerung der EU: " + round(calcData[i][0], 2) + "%");
   console.log(". Prozentuales Wachstum der Bevölkerung seit " + baselineYear + ": " + round(calcData[i][1], 2) + "%");
   console.log(". Absolutes Wachstum der Bevölkerung seit " + baselineYear + ": " + round(calcData[i][2], 2) + " Mio. Einwohner");
}

const curPop = document.querySelector("#currentPop h2");
curPop.textContent = round(coreData[0][1], 2) + " Mio.";
const text1 = document.querySelector("#currentPop p");
text1.textContent = "Gesamtzahl Einwohnerinnen und Einwohner in " + coreData[0][0] + " in 2022";

const curPer = document.querySelector("#currentPercentage h2");
curPer.textContent = round(calcData[0][0], 2) + " %";

const curGro = document.querySelector("#currentGrowth h2");
curGro.textContent = round(calcData[0][1], 2) + " %";

const absGro = document.querySelector("#absoluteGrowth h2");
absGro.textContent = round(calcData[0][2], 2) + " Mio.";


/*Funktionen*/
/*Runde eine Nummer, precision = anzahl nachkommastellen*/

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}