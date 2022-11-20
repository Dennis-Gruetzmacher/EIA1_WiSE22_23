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
        data: { [id: string]: { List: ShoppingItem[]}};
    }
    export interface ShoppingList
    {
        List: ShoppingItem[];
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
    export let globalShoppingList: ShoppingList;
    export let objectIds: string[];
    let newItemPanel: HTMLElement = document.getElementById("new_item_panel");
    window.addEventListener("load", handleLoad);
    async function importJSON(_url: RequestInfo): Promise<void>
    {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let newDatabaseObject: ReturnedDatabaseObject = await response.json();
        objectIds = Object.keys(newDatabaseObject.data);
        console.log(objectIds);
        for ( let i: number = 0; i < objectIds.length; i++)
        {
            globalShoppingList.push(newDatabaseObject.data.id);
        }
        console.log(globalShoppingList);
    }
    async function handleLoad(): Promise<void>
    {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem); 
        await importJSON(dataJSON);
        generateContent(globalShoppingList); 
    }
    export async function updateJSON(): Promise<void>
    {
            let sendJSONString: string = JSON.stringify(globalShoppingList);
            console.log(sendJSONString);
            let query: URLSearchParams = new URLSearchParams(<any>sendJSONString);
    }
    function showNewItemArea(): void 
    {        
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    function addNewItem(): void
    {
        
        let newFormInput: HTMLElement = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        if( newInputData.get("product") == "" || newInputData.get("quantity") < 1 )
        {
            return;
        }
        destroyContent(globalShoppingList);
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
        globalShoppingList.List.push(newItem);
        updateJSON();
        generateContent(globalShoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
}