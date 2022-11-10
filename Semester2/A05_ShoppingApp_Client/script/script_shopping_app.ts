/*
Aufgabe: L05_Einkaufsliste_Client
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 10.11.2022
Quellen: 
*/
namespace A05_ShoppingHelper
{
    let dataJSON: string = "https://dennis-gruetzmacher.github.io/EIA2_WiSe22_23/Semester2/A05_ShoppingApp_Client/data/data.json";
   // let dataJSON: string = "http//:localhost/Studium/S1/EAI 1/EAI1_SoSe22/Semester2/A05_ShoppingApp_Clien/data/data.json";
    let newItemPanel: HTMLElement = document.getElementById("new_item_panel");
    window.addEventListener("load", handleLoad);
    function handleLoad(): void
    {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem); 
        startGenerateContent(dataJSON); 
    }
    function showNewItemArea(): void 
    {        
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    function addNewItem(): void
    {
        
        let newFormInput: HTMLElement = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        console.log(newInputData.get("product"));
        console.log(newInputData.get("quantity"));
        console.log(newInputData.get("comment"));
        if( newInputData.get("product") == "" || newInputData.get("quantity") < 1 )
        {
            return;
        }
        destroyContent(shoppingList);
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
        shoppingList.Liste.push(newItem);
        startGenerateContent(dataJSON);
        newItemPanel.setAttribute("style", "display:none;");
    }
}    
