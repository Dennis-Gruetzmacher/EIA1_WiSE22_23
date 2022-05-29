var names: string[] = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
var laenge: string = String(names.length);
var output: string = "";
document.getElementById("numberNames").innerHTML = laenge;
document.getElementById("buttonAufsteigend").addEventListener("click", orderAscending);
document.getElementById("buttonAbsteigend").addEventListener("click", orderDescending);
document.getElementById("buttonOhne").addEventListener("click", orderDescendingWithout);

function orderAscending()
{
    names.sort();
    console.log(names);
    for(let i = 0; i < names.length; i++)
    {
        writeNames(i);
    }
    output = "";
}
function orderDescending()
{
    names.reverse();
    console.log(names);
    for(let i = 0; i < names.length; i++)
    {
        writeNames(i);
    }
    output = "";
}
function orderDescendingWithout()
{
    names.reverse();
    console.log(names);
    for(let i = 0; i < names.length; i++)
    {
        if(!(names[i] == "Lea" || names[i] == "Paul"))
        {
            writeNames(i);
        }
        
    }
    output = "";  
}

function writeNames(index)
{
    output = output.concat("<li>" + names[index] + "</li>");
    document.getElementById("liste").innerHTML = output;
}