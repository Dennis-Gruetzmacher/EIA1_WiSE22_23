namespace A04_ShoppingHelper
{
    export function generateContent(_shoppingList: ShoppingList): void
    {
        let listSpace: HTMLElement = document.getElementById("list_space");
        for( let i: number = 0; i < _shoppingList.Liste.length; i++)
        {
            let newProductDiv = document.createElement("div");
            newProductDiv.classList.add("item_box");
            newProductDiv.setAttribute("id", "item-" + i);
            listSpace.appendChild(newProductDiv);
            let newProductName = document.createElement("p");
            newProductName.classList.add("product");
            newProductName.innerHTML = _shoppingList.Liste[i].product;
            newProductDiv.appendChild(newProductName);
            let newPurchaseDate = document.createElement("p");
            newPurchaseDate.classList.add("date");
            newPurchaseDate.innerHTML = "zuletzt am "+ _shoppingList.Liste[i].lastPurchase;
            newProductDiv.appendChild(newPurchaseDate);
            let newAmount = document.createElement("input");
            newAmount.setAttribute("type", "number");
            newAmount.setAttribute("min", "0");
            newAmount.setAttribute("id", "amountField_" + i);
            newAmount.classList.add("amount_item");
            newAmount.value = _shoppingList.Liste[i].quantity;
            newProductDiv.appendChild(newAmount);
            let newComment = document.createElement("textarea");
            newComment.classList.add("comment");
            newComment.setAttribute("id", "commentTextarea_" + i);
            newComment.value = _shoppingList.Liste[i].comment;
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
    };

    export function destroyContent(_shoppingList: ShoppingList): void
    {
        for( let i: number = 0; i < _shoppingList.Liste.length; i++)
        {
            let currentItemDiv: HTMLElement = document.getElementById("item-" + i);
            currentItemDiv.remove();
        }
    }

    function deleteItem(): void
    {
        let ActiveDiv: HTMLElement = document.getElementById("item-" + getButtonID());
        ActiveDiv.remove();
    };

    function updateItem(): void
    {
        let newAmountString: string = document.getElementById("amountField_" + getButtonID()).value;
        console.log(newAmountString);
        let newCommentString: string = document.getElementById("commentTextarea_" + getButtonID()).value;
        console.log(newCommentString);
    }

    function changeItemStatus(): void
    {
        let ActiveButtonID: string = document.querySelector(".fa-solid:hover").getAttribute("id");
        let ActiveButton: HTMLElement = document.getElementById(ActiveButtonID);
        if (ActiveButton.classList.contains("fa-circle"))
        {
            ActiveButton.classList.add("fa-cart-shopping");
            ActiveButton.classList.remove("fa-circle");

        }
        else if (ActiveButton.classList.contains("fa-cart-shopping"))
        {
            ActiveButton.classList.add("fa-check");
            ActiveButton.classList.remove("fa-cart-shopping");
        }
        else
        {
            ActiveButton.classList.add("fa-circle");
            ActiveButton.classList.remove("fa-check");
        }

    }

    function getButtonID(): string
    {
        let activeItem: string = document.querySelector(".button:hover").getAttribute("id");
        let activeItemIDString: string[] = activeItem.split("_");
        let activeID: string = activeItemIDString[1];
        return activeID;
    }
}