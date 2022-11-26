"use strict";
var A06_ShoppingHelper;
(function (A06_ShoppingHelper) {
    function generateContent(_shoppingList) {
        let listSpace = document.getElementById("list_space");
        for (let i = 0; i < _shoppingList.length; i++) {
            let newProductDiv = document.createElement("div");
            newProductDiv.classList.add("item_box");
            newProductDiv.setAttribute("id", "item-" + _shoppingList[i].id);
            listSpace.appendChild(newProductDiv);
            let newProductName = document.createElement("p");
            newProductName.classList.add("product");
            newProductName.innerHTML = _shoppingList[i].id.product;
            newProductDiv.appendChild(newProductName);
            let newPurchaseDate = document.createElement("p");
            newPurchaseDate.classList.add("date");
            newPurchaseDate.innerHTML = "zuletzt am " + _shoppingList[i].id.lastPurchase;
            newProductDiv.appendChild(newPurchaseDate);
            let newAmount = document.createElement("input");
            newAmount.setAttribute("type", "number");
            newAmount.setAttribute("min", "0");
            newAmount.setAttribute("id", "amountField_" + _shoppingList[i].id);
            newAmount.classList.add("amount_item");
            newAmount.value = _shoppingList[i].id.quantity;
            newProductDiv.appendChild(newAmount);
            let newComment = document.createElement("textarea");
            newComment.classList.add("comment");
            newComment.setAttribute("id", "commentTextarea_" + _shoppingList[i].id);
            newComment.value = _shoppingList[i].id.comment;
            newProductDiv.appendChild(newComment);
            let newStatusButton = document.createElement("i");
            newStatusButton.classList.add("fa-solid");
            newStatusButton.classList.add("fa-circle");
            newStatusButton.classList.add("button");
            newStatusButton.setAttribute("id", "StatusButtonId_" + _shoppingList[i].id);
            newProductDiv.appendChild(newStatusButton);
            let newUpdateItemButton = document.createElement("button");
            newUpdateItemButton.classList.add("status_item");
            newUpdateItemButton.classList.add("button");
            newUpdateItemButton.setAttribute("id", "updateButtonID_" + _shoppingList[i].id);
            newUpdateItemButton.innerHTML = "Änderungen übernehmen";
            newProductDiv.appendChild(newUpdateItemButton);
            let newTrashButton = document.createElement("i");
            newTrashButton.classList.add("fa-solid");
            newTrashButton.classList.add("fa-trash");
            newTrashButton.classList.add("button");
            newTrashButton.setAttribute("id", "TrashButtonId_" + _shoppingList[i].id);
            newProductDiv.appendChild(newTrashButton);
            newStatusButton.addEventListener("click", changeItemStatus);
            newUpdateItemButton.addEventListener("click", A06_ShoppingHelper.updateItem);
            newTrashButton.addEventListener("click", A06_ShoppingHelper.deleteItem);
        }
    }
    A06_ShoppingHelper.generateContent = generateContent;
    function destroyContent(_shoppingList) {
        for (let i = 0; i < _shoppingList.length; i++) {
            let currentItemDiv = document.getElementById("item-" + i);
            currentItemDiv.remove();
        }
    }
    A06_ShoppingHelper.destroyContent = destroyContent;
    function changeItemStatus() {
        let ActiveButton = document.getElementById("StatusButtonId_" + getButtonID());
        let ActiveID = parseInt(getButtonID());
        if (A06_ShoppingHelper.globalShoppingList[ActiveID].id.inCart == false && A06_ShoppingHelper.globalShoppingList[ActiveID].id.bought == false) {
            ActiveButton.classList.add("fa-cart-shopping");
            ActiveButton.classList.remove("fa-circle");
            A06_ShoppingHelper.globalShoppingList[ActiveID].id.inCart = true;
        }
        else if (A06_ShoppingHelper.globalShoppingList[ActiveID].id.inCart == true && A06_ShoppingHelper.globalShoppingList[ActiveID].id.bought == false) {
            ActiveButton.classList.add("fa-check");
            ActiveButton.classList.remove("fa-cart-shopping");
            A06_ShoppingHelper.globalShoppingList[ActiveID].id.bought = true;
        }
        else {
            ActiveButton.classList.add("fa-circle");
            ActiveButton.classList.remove("fa-check");
            A06_ShoppingHelper.globalShoppingList[ActiveID].id.inCart = false;
            A06_ShoppingHelper.globalShoppingList[ActiveID].id.bought = false;
        }
    }
    A06_ShoppingHelper.changeItemStatus = changeItemStatus;
    function getButtonID() {
        let activeItem = document.querySelector(".button:hover").getAttribute("id");
        let activeItemIDString = activeItem.split("_");
        let activeID = activeItemIDString[1];
        return activeID;
    }
    A06_ShoppingHelper.getButtonID = getButtonID;
})(A06_ShoppingHelper || (A06_ShoppingHelper = {}));
//# sourceMappingURL=showContent.js.map