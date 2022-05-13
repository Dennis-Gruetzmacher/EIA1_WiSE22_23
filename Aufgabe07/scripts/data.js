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
    /*Arra vorbereitet für die Klassen der Länder */
    var countriesClasses = [];
    /*Array vorbereitet für die Aktiven Daten (nach klick)*/
    var activeData = [];
    /*Wähle alle Bilder im Dokument aus und speichere sie in countries*/
    const countries = document.querySelectorAll("img");
    for (let i = 0; i < countries.length; i++) /*Schleife welche countries durchläuft */ {
        countriesClasses[i] = countries[i].getAttribute("class"); /*Speichere die Klasse jedes Elements in countries in countriesClasses[] */
        countries[i].addEventListener("click", showtime); /*Hänge einen EventListener an jedes element von countries*/
    }
    /*Funktionen*/
    function showtime() {
        createActiveData(createActiveIndex());
        showData();
        highlightActive(activeIndex);
        writeValues();
        chartGraph();
    }
    function createActiveIndex() {
        const currentClassHover = document.querySelector("img:hover").getAttribute("class");
        activeIndex = countriesClasses.indexOf(currentClassHover);
        return activeIndex;
    }
    function createActiveData(activeIndex) {
        activeData.length = 0;
        activeData.push(coreData[activeIndex][0], coreData[activeIndex][1], coreData[activeIndex][2]);
        activeData[3] = round((coreData[activeIndex][1] / coreData[coreData.length - 1][1]) * 100, 2);
        activeData[4] = round((((coreData[activeIndex][1] / coreData[activeIndex][2]) - 1) * 100), 2);
        activeData[5] = round(coreData[activeIndex][1] - coreData[activeIndex][2], 2);
    }
    function writeValues() {
        if (activeData[0] == "Europäische Union") {
            document.querySelector("#datascreen2").setAttribute("style", "display:none;");
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
        document.querySelector("#currentPercentage").innerHTML = activeData[3] + "%";
        document.querySelector("#currentPop").innerHTML = activeData[1] + " Mio.";
        document.querySelector("#currentGrowth").innerHTML = activeData[4] + " %";
        document.querySelector("#absoluteGrowth").innerHTML = activeData[5] + " Mio.";
        if (activeData[5] > 0) {
            document.querySelector("#absoluteGrowth").setAttribute("style", "color: rgb(75, 150, 75);");
        }
        else {
            document.querySelector("#absoluteGrowth").setAttribute("style", "color: rgb(185, 40, 40);");
        }
    }
    function chartGraph() {
        document.querySelector(".chart").setAttribute("style", "height:" + activeData[3] + "%");
        if (activeData[4] >= 0) {
            document.querySelector(".chartGrowth").setAttribute("id", "chartpositive");
            document.querySelector(".chartGrowth").setAttribute("style", "height:" + activeData[4] + "%;");
        }
        else {
            document.querySelector(".chartGrowth").setAttribute("id", "chartnegative");
            document.querySelector(".chartGrowth").setAttribute("style", "height:" + Math.abs(activeData[4]) + "%;");
        }
    }
    function showData() {
        document.querySelector("#startscreen").setAttribute("style", "display:none");
        for (let i = 1; i < 5; i++) {
            document.querySelector("#datascreen" + i).setAttribute("style", "display:inline-block");
        }
    }
    function highlightActive(activeIndex) {
        console.log(countriesClasses[activeIndex]);
        document.querySelector("." + countriesClasses[activeIndex]).setAttribute("id", "activeHighlight");
    }
    /*Runde eine Nummer, precision = anzahl nachkommastellen*/
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map