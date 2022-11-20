namespace A06_ShoppingHelper
{
    export function generateContent(_shoppingList: ShoppingList): void
    {
        let listSpace: HTMLElement = document.getElementById("list_space");
        for( let i: number = 0; i < _shoppingList.List.length; i++)
        {
            let newProductDiv = document.createElement("div");
            newProductDiv.classList.add("item_box");
            newProductDiv.setAttribute("id", "item-" + i);
            listSpace.appendChild(newProductDiv);
            let newProductName = document.createElement("p");
            newProductName.classList.add("product");
            newProductName.innerHTML = _shoppingList.List[i].product;
            newProductDiv.appendChild(newProductName);
            let newPurchaseDate = document.createElement("p");
            newPurchaseDate.classList.add("date");
            newPurchaseDate.innerHTML = "zuletzt am "+ _shoppingList.List[i].lastPurchase;
            newProductDiv.appendChild(newPurchaseDate);
            let newAmount = document.createElement("input");
            newAmount.setAttribute("type", "number");
            newAmount.setAttribute("min", "0");
            newAmount.setAttribute("id", "amountField_" + i);
            newAmount.classList.add("amount_item");
            newAmount.value = _shoppingList.List[i].quantity;
            newProductDiv.appendChild(newAmount);
            let newComment = document.createElement("textarea");
            newComment.classList.add("comment");
            newComment.setAttribute("id", "commentTextarea_" + i);
            newComment.value = _shoppingList.List[i].comment;
            newProductDiv.appendChild(newComment);
            let newStatusButton = document.createElement("i");
            newStatusButton.classList.add("fa-solid");
            newStatusButton.classList.add("fa-circle");
            newStatusButton.classList.add("button");
            newStatusButton.setAttribute("id", "StatusButtonId_" + i);
            newProductDiv.appendChild(newStatusButton);
            let newUpdateItemButton = document.createElement("button");
            newUpdateItemButton.classList.add("status_item");
            newUpdateItemButton.classList.add("button");
            newUpdateItemButton.setAttribute("id", "updateButtonID_" + i);
            newUpdateItemButton.innerHTML = "Änderungen übernehmen";
            newProductDiv.appendChild(newUpdateItemButton);
            let newTrashButton = document.createElement("i");
            newTrashButton.classList.add("fa-solid");
            newTrashButton.classList.add("fa-trash");
            newTrashButton.classList.add("button");
            newTrashButton.setAttribute("id", "TrashButtonId_" + i);
            newProductDiv.appendChild(newTrashButton);
            newStatusButton.addEventListener("click", changeItemStatus);
            newUpdateItemButton.addEventListener("click", updateItem);
            newTrashButton.addEventListener("click", deleteItem);
        }
    }
    export function destroyContent(_shoppingList: ShoppingList): void
    {
        for( let i: number = 0; i < _shoppingList.List.length; i++)
        {
            let currentItemDiv: HTMLElement = document.getElementById("item-" + i);
            currentItemDiv.remove();
        }
    }
    export function deleteItem(): void
    {
        let activeID: number = parseInt(getButtonID());
        destroyContent(globalShoppingList);
        globalShoppingList.List.splice(activeID, 1);
        generateContent(globalShoppingList);
        updateJSON();
    }
    export function updateItem(): void
    {
        let newAmountString: string = document.getElementById("amountField_" + getButtonID()).value;
        let newCommentString: string = document.getElementById("commentTextarea_" + getButtonID()).value;
        globalShoppingList.List[getButtonID()].quantity = parseInt(newAmountString);
        globalShoppingList.List[getButtonID()].comment = newCommentString;
        destroyContent(globalShoppingList);
        generateContent(globalShoppingList);
        updateJSON();
    }
    export function changeItemStatus(): void
    {
        let ActiveButton: HTMLElement = document.getElementById("StatusButtonId_" + getButtonID());
        let ActiveID: number = parseInt(getButtonID());
        if (globalShoppingList.List[ActiveID].inCart == false && globalShoppingList.List[ActiveID].bought == false)
        {
            ActiveButton.classList.add("fa-cart-shopping");
            ActiveButton.classList.remove("fa-circle");
            globalShoppingList.List[ActiveID].inCart = true;
        }
        else if (globalShoppingList.List[ActiveID].inCart == true && globalShoppingList.List[ActiveID].bought == false)
        {
            ActiveButton.classList.add("fa-check");
            ActiveButton.classList.remove("fa-cart-shopping");
            globalShoppingList.List[ActiveID].bought = true;
        }
        else
        {
            ActiveButton.classList.add("fa-circle");
            ActiveButton.classList.remove("fa-check");
            globalShoppingList.List[ActiveID].inCart = false;
            globalShoppingList.List[ActiveID].bought = false;
        }
        updateJSON();
    }
    export function getButtonID(): string
    {
        let activeItem: string = document.querySelector(".button:hover").getAttribute("id");
        let activeItemIDString: string[] = activeItem.split("_");
        let activeID: string = activeItemIDString[1];
        return activeID;
    }
}