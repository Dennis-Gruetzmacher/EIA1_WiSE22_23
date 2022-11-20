"use strict";
/*
Aufgabe: L06_Einkaufsliste_Server
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 18.11.2022
Quellen:
*/
var A06_ShoppingHelper;
(function (A06_ShoppingHelper) {
    A06_ShoppingHelper.dataJSON = "https://webuser.hs-furtwangen.de/~gruetzma/database/?command=find&collection=ShoppingList";
    let newItemPanel = document.getElementById("new_item_panel");
    window.addEventListener("load", handleLoad);
    async function importJSON(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let newDatabaseObject = await response.json();
        A06_ShoppingHelper.objectIds = Object.keys(newDatabaseObject.data);
        console.log(A06_ShoppingHelper.objectIds);
        for (let i = 0; i < A06_ShoppingHelper.objectIds.length; i++) {
            A06_ShoppingHelper.globalShoppingList.push(newDatabaseObject.data.id);
        }
        console.log(A06_ShoppingHelper.globalShoppingList);
    }
    async function handleLoad() {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem);
        await importJSON(A06_ShoppingHelper.dataJSON);
        A06_ShoppingHelper.generateContent(A06_ShoppingHelper.globalShoppingList);
    }
    async function updateJSON() {
        let sendJSONString = JSON.stringify(A06_ShoppingHelper.globalShoppingList);
        console.log(sendJSONString);
        let query = new URLSearchParams(sendJSONString);
    }
    A06_ShoppingHelper.updateJSON = updateJSON;
    function showNewItemArea() {
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    function addNewItem() {
        let newFormInput = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        if (newInputData.get("product") == "" || newInputData.get("quantity") < 1) {
            return;
        }
        A06_ShoppingHelper.destroyContent(A06_ShoppingHelper.globalShoppingList);
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
        A06_ShoppingHelper.globalShoppingList.List.push(newItem);
        updateJSON();
        A06_ShoppingHelper.generateContent(A06_ShoppingHelper.globalShoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
})(A06_ShoppingHelper || (A06_ShoppingHelper = {}));
//# sourceMappingURL=manipulateContent.js.map