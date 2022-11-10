namespace A05_ShoppingHelper
{
    export interface ShoppingItem
    {
        product: string;
        quantity: number;
        comment: string;
        inCart: boolean;
        bought: boolean;
        lastPurchase: string;
    }
    export interface ShoppingList
    {
        [name: string]: ShoppingItem[];
    }
}