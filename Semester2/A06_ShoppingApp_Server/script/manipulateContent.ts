/*
Aufgabe: L06_Einkaufsliste_Server
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 18.11.2022
Quellen: 
*/

namespace A06_ShoppingHelper
{
    export interface ReturnedDatabaseObject
    {
        status: string; 
        data: IdObject[];
    }
    export interface IdObject
    {
        [id: string]: ShoppingItem;
    }
    export interface ShoppingItem
    {
        product: string;
        quantity: number;
        comment: string;
        inCart: boolean;
        bought: boolean;
        lastPurchase: string;
    }
    export let dataJSON: string = "https://webuser.hs-furtwangen.de/~gruetzma/database/?command=find&collection=ShoppingList";
    export let globalShoppingList: IdObject[];
    export let objectIds: string[];
    let newItemPanel: HTMLElement = document.getElementById("new_item_panel");
    window.addEventListener("load", handleLoad);
    async function importJSON(_url: RequestInfo): Promise<void>
    {
       // if (objectIds.length !== null)
        //{
         //   console.log(objectIds);
          //  destroyContent(globalShoppingList);
        //}
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let newDatabaseObject: ReturnedDatabaseObject = await response.json();
        console.log(newDatabaseObject);
        globalShoppingList = newDatabaseObject.data;
        let entries: string[] = Object.entries(globalShoppingList);
        console.log("entries: " + entries);
        objectIds = Object.keys(newDatabaseObject.data);
        console.log(objectIds);
        generateContent(globalShoppingList);
    }
    async function handleLoad(): Promise<void>
    {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem); 
        await importJSON(dataJSON);
    }
    function showNewItemArea(): void 
    {        
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    async function addNewItem(): void
    {
        
        let newFormInput: HTMLElement = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        if( newInputData.get("product") == "" || newInputData.get("quantity") < 1 )
        {
            return;
        }
        let currentDate: Date = new Date();
        let wrongMonth: number = parseInt(currentDate.getMonth());
        let correctDate: string = currentDate.getDate() + "." + (wrongMonth + 1)  + "." + currentDate.getFullYear();
        let newItem: ShoppingItem =
        {
            product: String(newInputData.get("product")),
            quantity: parseInt(newInputData.get("quantity")),
            comment: String(newInputData.get("comment")),
            inCart: false,
            bought: false,
            lastPurchase: correctDate
        };
        let newJSONString: string = JSON.stringify(newItem);
        await fetch("https://webuser.hs-furtwangen.de/~gruetzma/database/command=insert&collection=ShoppingList&data=" + newJSONString);
        await importJSON(dataJSON);

        newItemPanel.setAttribute("style", "display:none;");
    }
    export async function deleteItem(): Promise<void>
    {
        let activeID: number = parseInt(getButtonID());
        let activeJSONID: string = objectIds[activeID];
        await fetch("https://webuser.hs-furtwangen.de/~gruetzma/database/?command=delete&collection=ShoppingList&id=" + activeJSONID);
        await importJSON(dataJSON);
    }

    export async function updateItem(): void
    {
        let newAmountString: string = document.getElementById("amountField_" + getButtonID()).value;
        let newCommentString: string = document.getElementById("commentTextarea_" + getButtonID()).value;
        let newJSONString: string = "{quantity: " + newAmountString + ", comment: " + newCommentString + "}";
        let activeID: number = parseInt(getButtonID());
        let activeJSONID: string = objectIds[activeID];
        await fetch("https://webuser.hs-furtwangen.de/~gruetzma/database/?command=update&collection=ShoppingList&id=" + activeJSONID + "&data=" + newJSONString);
        await importJSON(dataJSON);


    }
}