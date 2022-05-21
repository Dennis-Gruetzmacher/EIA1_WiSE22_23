var WarmUp;
(function (WarmUp) {
    var colors = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)"];
    var activeIndex = 0;
    document.getElementById("buttonA").addEventListener("click", changeColor);
    function changeColor() {
        document.body.style.background = colors[activeIndex];
        activeIndex++;
        colors.push("rgb(" + 5 * activeIndex + ",0,0)");
    }
})(WarmUp || (WarmUp = {}));
//# sourceMappingURL=script.js.map