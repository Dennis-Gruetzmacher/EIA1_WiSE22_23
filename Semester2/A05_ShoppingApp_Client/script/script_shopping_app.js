"use strict";
/*
Aufgabe: L05_Einkaufsliste_Client
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 10.11.2022
Quellen:
*/
var A05_ShoppingHelper;
(function (A05_ShoppingHelper) {
    let dataJSON = "https://dennis-gruetzmacher.github.io/EIA2_WiSe22_23/Semester2/A05_ShoppingApp_Client/data/data.json";
    // let dataJSON: string = "http//:localhost/Studium/S1/EAI 1/EAI1_SoSe22/Semester2/A05_ShoppingApp_Clien/data/data.json";
    let newItemPanel = document.getElementById("new_item_panel");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem);
        A05_ShoppingHelper.startGenerateContent(dataJSON);
    }
    function showNewItemArea() {
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    function addNewItem() {
        let newFormInput = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        console.log(newInputData.get("product"));
        console.log(newInputData.get("quantity"));
        console.log(newInputData.get("comment"));
        if (newInputData.get("product") == "" || newInputData.get("quantity") < 1) {
            return;
        }
        A05_ShoppingHelper.destroyContent(shoppingList);
        let currentDate = new Date();
        let wrongMonth = parseInt(currentDate.getMonth());
        let correctDate = currentDate.getDate() + "." + (wrongMonth + 1) + "." + currentDate.getFullYear();
        let newItem = {
            product: String(newInputData.get("product")),
            quantity: parseInt(newInputData.get("quantity")),
            comment: String(newInputData.get("comment")),
            inCart: false,
            bought: false,
            lastPurchase: correctDate
        };
        shoppingList.Liste.push(newItem);
        A05_ShoppingHelper.startGenerateContent(dataJSON);
        newItemPanel.setAttribute("style", "display:none;");
    }
})(A05_ShoppingHelper || (A05_ShoppingHelper = {}));
//# sourceMappingURL=script_shopping_app.js.map