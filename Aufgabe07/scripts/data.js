var Aufgabe07;
(function (Aufgabe07) {
    /******Variablen und Konstanten*******/
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
        ["Europäische Union", 447.7, 440.66]
    ];
    var countriesClasses = [];
    /*Array vorbereitet für die Aktiven Daten (nach klick)*/
    var activeData = [];
    const countries = document.querySelectorAll("img");
    for (let i = 0; i < countries.length; i++) {
        countriesClasses[i] = countries[i].getAttribute("class");
        countries[i].addEventListener("click", showtime);
    }
    /*Funktionen*/
    function showtime() {
        createActiveIndex();
        createActiveData(activeIndex);
        writeValues();
        chartGraph();
    }
    function createActiveIndex() {
        const curClassHover = document.querySelector("img:hover").getAttribute("class");
        activeIndex = countriesClasses.indexOf(curClassHover);
        console.log(activeIndex);
    }
    function createActiveData(activeIndex) {
        activeData.length = 0;
        activeData.push(coreData[activeIndex][0], coreData[activeIndex][1], coreData[activeIndex][2]);
        console.log("Land: " + activeData[0] + " Bevölkerung 2022: " + activeData[1] + " Bevölkerung 2008: " + activeData[2]);
        activeData[3] = round((coreData[activeIndex][1] / coreData[coreData.length - 1][1]) * 100, 2);
        activeData[4] = round((((coreData[activeIndex][1] / coreData[activeIndex][2]) - 1) * 100), 2);
        activeData[5] = round(coreData[activeIndex][1] - coreData[activeIndex][2], 2);
        console.log("Prozent: " + activeData[3] + " %");
        console.log("Wachstum in Prozent: " + activeData[4] + " %");
        console.log("Wachstum Absolut: " + activeData[5] + "Mio.");
    }
    function writeValues() {
        document.querySelector(".hidden").setAttribute("style", "inline-block;");
        if (activeData[0] == "Europäische Union") {
            document.querySelector(".hidden").setAttribute("style", "display:none;");
            let country = document.querySelector("#activeCountry");
            country.innerHTML = " der europäischen Union ";
        }
        else if (activeData[0] == "Niederlande") {
            let country = document.querySelector("#activeCountry");
            country.innerHTML = " den Niederlanden ";
            let curPer = document.querySelector("#currentPercentage");
            curPer.innerHTML = activeData[3] + "%";
        }
        else {
            let country = document.querySelector("#activeCountry");
            country.innerHTML = activeData[0];
            let curPer = document.querySelector("#currentPercentage");
            curPer.innerHTML = activeData[3] + "%";
        }
        let curPop = document.querySelector("#currentPop");
        curPop.innerHTML = activeData[1] + " Mio.";
        let curGro = document.querySelector("#currentGrowth");
        curGro.innerHTML = activeData[4] + " %";
        let absGro = document.querySelector("#absoluteGrowth");
        absGro.innerHTML = activeData[5] + " Mio.";
    }
    function chartGraph() {
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + activeData[3] + "%");
        document.querySelector(".chartWrapper .chartGrowth").setAttribute("style", "height:" + activeData[4] + "%");
    }
    /*Runde eine Nummer, precision = anzahl nachkommastellen*/
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map