/*
Aufgabe: L03_Einkaufsliste_Formular
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 29.10.2022
Quellen: Alina Hahn
*/
namespace ShoppingHelper 
{
    window.addEventListener("load", assignListeners);
    function assignListeners(): void
    {
        document.getElementById("add_newItem").addEventListener("click", addNewItem);
        for (let i: number = 1; i < 4; i++ )
        {
            document.getElementById("button_status_item_" + i).addEventListener("click", switchStatusEntry);
            document.getElementById("button_trash_item_" + i).addEventListener("click", logDeleteEntry);
        }
            
    }
    function addNewItem(): void 
    {
        console.log("Neues Item wird hinzugefügt.");
    }

    function logDeleteEntry(): void 
    {
        console.log("Item wird aus er Liste gelöscht");
    }

    function switchStatusEntry(): void 
    {
        console.log("Status des Items wird durchgewechselt von: Noch offen -> Im Wagen -> Eingekauft -> wieder zu Noch Offen");
    }


}
