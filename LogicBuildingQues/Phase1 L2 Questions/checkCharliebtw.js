function checkCharlieBtw(char)
{
    char = char.toLowerCase();

    if(char.length !== 1 || char < 'a' || char > 'z')
    {
        console.log("Invalid Charater.");
    }
    else if(char <= 'm')
    {
        console.log("Charater lie between a to m");
    }
    else
    {
        console.log("charater lie between n to z");
    }
}

let input = prompt("Enter apha to check lies between : ");
checkCharlieBtw(input);