"use strict";
/*****************Grundlegendes*********************/
/*
Funktion
Das Skript erzeugt ein Array (activeData[]) und füllt dieses mit den errechneten Werten des aktiven Landes
Danach werden diese Daten in die HTML-Struktur ausgegeben und für eventuelle Sonderfälle angepasst
(z.B. positives/negatives Wachstum oder die Namen mancher Länder)
Eine weitere Funktion (backtostart()) setzt die Website wieder auf den Ursprungszustand wenn "ins Leere" geklickt wird
*/
/***********************Code****************************/
var Aufgabe07;
(function (Aufgabe07) {
    /******Deklaration und Initialisierung der Variablen und Konstanten*******/
    /*Globale Variable für den Array-Index des geklickten Objekts*/
    let activeIndex;
    /*Array der Grunddaten --> coreData: Name des Landes, Aktuelle Bevölkerungszahl, Bevölkerung im baseline Jahr 2008*/
    var coreData = [
        ["Deutschland", 83.24, 82.11],
        ["Österreich", 8.91, 8.321],
        ["Belgien", 11.56, 10.71],
        ["Bulgarien", 6.927, 7.493],
        ["Kroatien", 4.047, 4.31],
        ["Zypern", 1.207, 1.082],
        ["Tschechien", 10.7, 10.38],
        ["Dänemark", 5.831, 5.494],
        ["Estland", 1.331, 1.337],
        ["Finnland", 5.531, 5.313],
        ["Frankreich", 67.39, 64.37],
        ["Griechenland", 10.72, 11.08],
        ["Ungarn", 9.75, 10.04],
        ["Irland", 4.995, 4.49],
        ["Italien", 59.55, 58.83],
        ["Lettland", 1.902, 2.177],
        ["Litauen", 2.795, 3.198],
        ["Luxemburg", 0.632, 0.488],
        ["Malta", 0.525, 0.409],
        ["Niederlande", 17.44, 16.45],
        ["Polen", 37.95, 38.13],
        ["Portugal", 10.31, 10.56],
        ["Rumänien", 19.29, 20.54],
        ["Slowakei", 5.459, 5.379],
        ["Slowenien", 2.1, 2.021],
        ["Spanien", 47.35, 45.95],
        ["Schweden", 10.35, 8.22],
        ["Europäische Union", 447.7, 440.66] /*Kerndaten der gesamten EU als letzter Block im Array */
    ];
    /*Array vorbereitet für die Klassen der Länder */
    var countriesClasses = [];
    /*Array vorbereitet für die Aktiven Daten (nach klick)*/
    var activeData = [];
    /*******************************Set-Up und verteilung der EventListener***************************/
    /*Wähle alle Bilder im Dokument aus und speichere sie in das Array countries*/
    const countries = document.querySelectorAll("img");
    for (let i = 0; i < countries.length; i++) /*Schleife welche das Array countries durchläuft */ {
        countriesClasses[i] = countries[i].getAttribute("class"); /*Speichere die Klasse jedes Elements in countries in countriesClasses[] */
        countries[i].addEventListener("click", showtime); /*Hänge einen EventListener an jedes element von countries*/
    }
    document.querySelector("html").addEventListener("click", backtostart); /*Hänge einen EventListener an das gesamte HTML-Dokument*/
    /*****************Funktionen******************/
    /*backtostart() setzt die gesamte Website auf den Anfangszustand, wenn irgendwo im html doklument geklickt wird*/
    function backtostart() {
        clearData();
        document.querySelector("#startscreen").setAttribute("style", "display:inline-block"); /*Macht den Starttext sichtbar*/
        for (let i = 1; i < 5; i++) /*Schleife welche die vier <section> Elemente welche die DAten enthalten durchläuft und diese unsichtbar macht*/ {
            document.querySelector("#datascreen" + i).setAttribute("style", "display:none");
        }
        document.querySelector("#activeheader").innerHTML = " der europäischen Union"; /*setzte die Überschrift auf start zurück*/
    }
    /*showtime() ist die Hauptfunktion und wird durch klicken eines Bildelements gestartet */
    function showtime(event) {
        event.stopPropagation(); /*verhindert das bei einem Klick auf ein Bild (Land) ebenfalls der EventListener im gesamten Dokument aktiviert wird.*/
        clearData(); /*Lösche alte Daten aus eventuellem vorherigen Durchgang*/
        highlightActive(); /*hebe das aktive Land hervor*/
        createActiveData(createActiveIndex()); /*suche den Index des aktiven LAndes heraus und erzeuge damit das Array der aktiven Daten*/
        showData(); /*mache die <sectionen> welche die Daten enthalten sichtbar*/
        writeValues(); /*schreibe die Daten in die HTML-Struktur*/
        chartGraph(); /*"zeichne" die Balkendiagramme*/
    }
    /*clearData() leert das activeData Array indem es Länge auf 0 setzt*/
    /*Ausserdem durchläuft die Funktion alle .wrapper Elemente und entfernt die activeHighlight IDs*/
    function clearData() {
        activeData.length = 0;
        const wrappers = document.querySelectorAll(".wrapper");
        for (let i = 0; i < wrappers.length; i++) /*Schleife welche countries durchläuft */ {
            wrappers[i].removeAttribute("id");
        }
    }
    /*highlightActive() vergibt dem aktivem Element/gewählten Land eine id um es als "aktiv" zu markieren*/
    function highlightActive() {
        document.querySelector(".wrapper:hover").setAttribute("id", "activeHighlight"); /*siehe: styles.css --> #activeHighlight*/
    }
    /*createActiveIndex() liest die Klasse des gehoverten Bilder aus, vergleicht diese mit den in countriesClasses[] gespeicherten Klassen*/
    /*und gibt den Index-Wert der aktiven Klasse zurück*/
    function createActiveIndex() {
        const currentClassHover = document.querySelector("img:hover").getAttribute("class");
        activeIndex = countriesClasses.indexOf(currentClassHover);
        return activeIndex;
    }
    /*createActiveData() nimmt die Werte aus coreData[] mit dem aktuellen Index "activeIndex" und schiebt (pushed) diese in das Array activeData*/
    /*Danach berechnet es aus den Grunddaten in coreData[] die abgeleiteten Werte und speichert diese ebenfalls in activeData[]*/
    /*Am Ende dieser Funktion hat man ein Array activeData, welches mit den spezifisch berechneten Werten für das geklickte Bild gefüllt ist.*/
    function createActiveData(activeIndex) {
        activeData.push(coreData[activeIndex][0], coreData[activeIndex][1], coreData[activeIndex][2]); /*Grunddaten werden in geschoben*/
        activeData[3] = round((coreData[activeIndex][1] / coreData[coreData.length - 1][1]) * 100, 2); /*Berechnung relative Einwohner zur EU*/
        activeData[4] = round((((coreData[activeIndex][1] / coreData[activeIndex][2]) - 1) * 100), 2); /*Berechnung relative Wachstumsrate seit 2008*/
        activeData[5] = round(coreData[activeIndex][1] - coreData[activeIndex][2], 2); /*Berechnung absolute Wachstumsrate seit 2008*/
    }
    /*showData() lässt den Starttext nach einem klick verschwinden und zeigt die vier <section> elemente mit den Daten an*/
    function showData() {
        document.querySelector("#startscreen").setAttribute("style", "display:none");
        for (let i = 1; i < 5; i++) {
            document.querySelector("#datascreen" + i).setAttribute("style", "display:inline-block");
        }
    }
    /*writeValues() "schreibt" die erechneten Werte aus dem Array activeData in die HTML-Struktur*/
    /*Damit die Namen aller Länder korrekt im Satz eingebaut werden wird hier über eine if else Abfrage mehrfach nach bestimmten*/
    /*Ländern gefragt*/
    function writeValues() {
        if (activeData[0] == "Europäische Union") {
            document.querySelector("#datascreen2").setAttribute("style", "display:none;"); /*Macht das <section> element welches die Daten zum relativen Wachstum im Vergleich zur EU enthält unsichtbar, da unnötig bzw. sinnlos*/
            document.querySelector("#activeCountry").innerHTML = " der europäischen Union ";
            document.querySelector("#activeheader").innerHTML = " der europäischen Union";
        }
        else if (activeData[0] == "Niederlande") {
            document.querySelector("#activeCountry").innerHTML = " den Niederlanden ";
            document.querySelector("#activeheader").innerHTML = " den Niederlanden";
        }
        else if (activeData[0] == "Slowakei") {
            document.querySelector("#activeheader").innerHTML = "der " + activeData[0];
            document.querySelector("#activeCountry").innerHTML = "der " + activeData[0];
        }
        else {
            document.querySelector("#activeheader").innerHTML = activeData[0];
            document.querySelector("#activeCountry").innerHTML = activeData[0];
        }
        /*Schreiben der Daten in die vier <section> elemente*/
        document.querySelector("#currentPercentage").innerHTML = activeData[3] + "%";
        document.querySelector("#currentPop").innerHTML = activeData[1] + " Mio.";
        document.querySelector("#currentGrowth").innerHTML = activeData[4] + " %";
        document.querySelector("#absoluteGrowth").innerHTML = activeData[5] + " Mio.";
        /*Abfrage ob das absolute Wachstum positiv (größer gleich 0) war*/
        if (activeData[5] > 0) {
            /*positives absolutes Wachstum --> Schrift wird grün*/
            document.querySelector("#absoluteGrowth").setAttribute("style", "color: rgb(75, 150, 75);");
        }
        else {
            /*negatives absolutes Wachstum --> Schrift wird rot*/
            document.querySelector("#absoluteGrowth").setAttribute("style", "color: rgb(185, 40, 40);");
        }
    }
    /*chartGraph "zeichnet" die beiden Balkendiagramme*/
    function chartGraph() {
        /*Blakendiagramm der Einwohnerzahl relativ zur EU*/
        document.querySelector(".chart").setAttribute("style", "height:" + activeData[3] + "%");
        /*Balkendiagramm der Wachstumsrate seit 2008*/
        /*Da die Wachstumsrate auch negativ sein kann, Abfrage ob der wert größer gleich 0 ist*/
        if (activeData[4] >= 0) {
            /*positive Wachstumsrate*/
            document.querySelector(".chartGrowth").setAttribute("id", "chartpositive"); /*siehe: styles.css*/
            document.querySelector(".chartGrowth").setAttribute("style", "height:" + activeData[4] + "%;");
        }
        else {
            /*negative Wachstumsrate*/
            document.querySelector(".chartGrowth").setAttribute("id", "chartnegative"); /*siehe: styles.css*/
            document.querySelector(".chartGrowth").setAttribute("style", "height:" + Math.abs(activeData[4]) + "%;"); /*Math.abs() wandelt negative Zahl zu positiver Zahl*/
        }
    }
    /********Hilfsfunktionen************************/
    /*Runde eine Nummer, precision = anzahl nachkommastellen*/
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map