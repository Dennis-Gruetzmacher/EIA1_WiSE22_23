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
        // if (objectIds.length !== null)
        //{
        //   console.log(objectIds);
        //  destroyContent(globalShoppingList);
        //}
        let response = await fetch(_url);
        console.log("Response", response);
        let newDatabaseObject = await response.json();
        console.log(newDatabaseObject);
        A06_ShoppingHelper.globalShoppingList = newDatabaseObject.data;
        let entries = Object.entries(A06_ShoppingHelper.globalShoppingList);
        console.log("entries: " + entries);
        A06_ShoppingHelper.objectIds = Object.keys(newDatabaseObject.data);
        console.log(A06_ShoppingHelper.objectIds);
        A06_ShoppingHelper.generateContent(A06_ShoppingHelper.globalShoppingList);
    }
    async function handleLoad() {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem);
        await importJSON(A06_ShoppingHelper.dataJSON);
    }
    function showNewItemArea() {
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    async function addNewItem() {
        let newFormInput = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        if (newInputData.get("product") == "" || newInputData.get("quantity") < 1) {
            return;
        }
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
        let newJSONString = JSON.stringify(newItem);
        await fetch("https://webuser.hs-furtwangen.de/~gruetzma/database/command=insert&collection=ShoppingList&data=" + newJSONString);
        await importJSON(A06_ShoppingHelper.dataJSON);
        newItemPanel.setAttribute("style", "display:none;");
    }
    async function deleteItem() {
        let activeID = parseInt(A06_ShoppingHelper.getButtonID());
        let activeJSONID = A06_ShoppingHelper.objectIds[activeID];
        await fetch("https://webuser.hs-furtwangen.de/~gruetzma/database/?command=delete&collection=ShoppingList&id=" + activeJSONID);
        await importJSON(A06_ShoppingHelper.dataJSON);
    }
    A06_ShoppingHelper.deleteItem = deleteItem;
    async function updateItem() {
        let newAmountString = document.getElementById("amountField_" + A06_ShoppingHelper.getButtonID()).value;
        let newCommentString = document.getElementById("commentTextarea_" + A06_ShoppingHelper.getButtonID()).value;
        let newJSONString = "{quantity: " + newAmountString + ", comment: " + newCommentString + "}";
        let activeID = parseInt(A06_ShoppingHelper.getButtonID());
        let activeJSONID = A06_ShoppingHelper.objectIds[activeID];
        await fetch("https://webuser.hs-furtwangen.de/~gruetzma/database/?command=update&collection=ShoppingList&id=" + activeJSONID + "&data=" + newJSONString);
        await importJSON(A06_ShoppingHelper.dataJSON);
    }
    A06_ShoppingHelper.updateItem = updateItem;
})(A06_ShoppingHelper || (A06_ShoppingHelper = {}));
//# sourceMappingURL=manipulateContent.js.map