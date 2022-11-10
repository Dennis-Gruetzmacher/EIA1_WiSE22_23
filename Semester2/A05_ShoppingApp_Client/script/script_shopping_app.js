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
    A05_ShoppingHelper.dataJSON = "https://dennis-gruetzmacher.github.io/EIA2_WiSe22_23/Semester2/A05_ShoppingApp_Client/data/data.json";
    let newItemPanel = document.getElementById("new_item_panel");
    window.addEventListener("load", handleLoad);
    async function importJSON(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        A05_ShoppingHelper.globalShoppingList = await response.json();
        console.log(A05_ShoppingHelper.globalShoppingList);
    }
    async function handleLoad() {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem);
        await importJSON(A05_ShoppingHelper.dataJSON);
        A05_ShoppingHelper.generateContent(A05_ShoppingHelper.globalShoppingList);
    }
    async function updateJSON() {
        let sendJSONString = JSON.stringify(A05_ShoppingHelper.globalShoppingList);
        console.log(sendJSONString);
        let query = new URLSearchParams(sendJSONString);
        await fetch("ShoppingApp.html?" + query.toString());
        alert("JSON Datei wurde geupdated!");
    }
    A05_ShoppingHelper.updateJSON = updateJSON;
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
        A05_ShoppingHelper.destroyContent(A05_ShoppingHelper.globalShoppingList);
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
        A05_ShoppingHelper.globalShoppingList.List.push(newItem);
        updateJSON();
        A05_ShoppingHelper.generateContent(A05_ShoppingHelper.globalShoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
})(A05_ShoppingHelper || (A05_ShoppingHelper = {}));
//# sourceMappingURL=script_shopping_app.js.map