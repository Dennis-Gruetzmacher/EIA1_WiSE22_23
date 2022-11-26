namespace A06_ShoppingHelper
{
    export function generateContent(_shoppingList: IdObject[]): void
    {
        let listSpace: HTMLElement = document.getElementById("list_space");
        for( let i: number = 0; i < _shoppingList.length; i++)
        {
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
            newUpdateItemButton.addEventListener("click", updateItem);
            newTrashButton.addEventListener("click", deleteItem);
        }
    }
    export function destroyContent(_shoppingList: IdObject[]): void
    {
        for( let i: number = 0; i < _shoppingList.length; i++)
        {
            let currentItemDiv: HTMLElement = document.getElementById("item-" + i);
            currentItemDiv.remove();
        }
    }

    export function changeItemStatus(): void
    {
        let ActiveButton: HTMLElement = document.getElementById("StatusButtonId_" + getButtonID());
        let ActiveID: number = parseInt(getButtonID());
        if (globalShoppingList[ActiveID].id.inCart == false && globalShoppingList[ActiveID].id.bought == false)
        {
            ActiveButton.classList.add("fa-cart-shopping");
            ActiveButton.classList.remove("fa-circle");
            globalShoppingList[ActiveID].id.inCart = true;
        }
        else if (globalShoppingList[ActiveID].id.inCart == true && globalShoppingList[ActiveID].id.bought == false)
        {
            ActiveButton.classList.add("fa-check");
            ActiveButton.classList.remove("fa-cart-shopping");
            globalShoppingList[ActiveID].id.bought = true;
        }
        else
        {
            ActiveButton.classList.add("fa-circle");
            ActiveButton.classList.remove("fa-check");
            globalShoppingList[ActiveID].id.inCart = false;
            globalShoppingList[ActiveID].id.bought = false;
        }
    }
    export function getButtonID(): string
    {
        let activeItem: string = document.querySelector(".button:hover").getAttribute("id");
        let activeItemIDString: string[] = activeItem.split("_");
        let activeID: string = activeItemIDString[1];
        return activeID;
    }
}