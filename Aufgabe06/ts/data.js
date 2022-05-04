/******Variablen und Konstanten*******/
/*Gewähtlte Länder: Deutschland, Frankreich, Italien, Niederlande*/
var currentPopEU = 447.01; /*Gesamtbevölkerung der EU*/
var baselineYear = 2008; /*Baseline Jahr = Vergleichsjahr*/
/************Arrays***********/
var nameCountry = ["Deutschland", "Frankreich", "Italien", "Niederlande"]; /*Ländernamen*/
var currentPopCountry = [83.24, 67.39, 59.55, 17.44]; /*Aktuelle Bevölkerungszahl*/
var baselinePopCountry = [82.11, 64.37, 58.83, 16.45]; /*Bevölkerungszahl im baseline Jahr*/
var currentGrowth = []; /*leeres Array vorbereitet für die Berechnung des prozentualen Wachstums*/
var currentPercentage = []; /*leeres Array vorbereitet für die Berechnung des Prozentualen Anteils*/
var absoluteGrowth = []; /*leeres array vorbereitet für die Berechnung des absoluten Wachstums*/
/**********Berechnungen und Ausgaben in die Konsole**************/
/*Ausgabe der aktuellen Bevölkerung pro Land*/
console.log("Ausgabe der aktuellen Gesamtbevölkerung pro Land");
for (let i = 0; i < 4; i++) /* Schleife durchläuft Array und gibt Daten in Konsole aus*/ {
    console.log("Land: " + nameCountry[i] + ". Gesamtbevölkerung im Jahr 2022: " + currentPopCountry[i] + " Mio. Einwohner");
}
/*Berechnung und Ausgabe des Prozentualen Anteils im Vergleich zur europäischen Gesamtbevölkerung*/
/*Prozentualer Anteil = (Landesbevölkerung/EU Bevölkerung) *100*/
console.log("Ausgabe des prozentualen Anteils an der europäischen Gesamtbevölkerung");
for (let i = 0; i < 4; i++) /*Schleife durchläuft Arrays --> berechnet neue Werte und gibt diese in Konsole aus*/ {
    currentPercentage[i] = (currentPopCountry[i] / currentPopEU) * 100;
    console.log("Land: " + nameCountry[i] + ". Prozentualer Anteil an der Gesamtbevälkerung der EU: " + round(currentPercentage[i], 2) + "%");
}
/*Berechnung und Ausgabe der prozentualen Wachstumsrate auf das baseline Jahr bezogen*/
/*Wachstum in Prozent vom Grundwert ausgehend = ((Aktueller Wert / Grundwert) - 1) * 100*/
console.log("Ausgabe der Wachstumsrate bezogen auf das Jahr " + baselineYear);
for (let i = 0; i < 4; i++) /*Schleife durchläuft Arrays --> berechnet neue Werte und gibt diese in Konsole aus*/ {
    currentGrowth[i] = (((currentPopCountry[i] / baselinePopCountry[i]) - 1) * 100);
    console.log("Land: " + nameCountry[i] + ". Prozentuales Wachstum der Bevölkerung seit " + baselineYear + ": " + round(currentGrowth[i], 2) + "%");
}
/*Berechnung und Ausgabe des absoluten Bevölkerungswachstums der Länder*/
console.log("Ausgabe des absoluten Bevölkerungswachstums bezogen auf das Jahr " + baselineYear);
for (let i = 0; i < 4; i++) /*Schleife durchläuft Arrays --> berechnet neue Werte und gibt diese in Konsole aus*/ {
    absoluteGrowth[i] = currentPopCountry[i] - baselinePopCountry[i];
    console.log("Land: " + nameCountry[i] + ". Absolutes Wachstum der Bevölkerung seit " + baselineYear + ": " + round(absoluteGrowth[i], 2) + " Mio. Einwohner");
}
/*Funktionen*/
/*Runden einer Nummer --> precision = Anzahl nachkommastellen*/
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
//# sourceMappingURL=data.js.map