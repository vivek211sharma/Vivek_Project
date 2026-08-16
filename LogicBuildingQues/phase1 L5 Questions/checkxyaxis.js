function checkXYazis(x,y)
{
    if( x === 0 && y === 0)
    {
        console.log("Lies in Origin.");
    }
    else if (x === 0)
    {
        console.log("Lies on Y-axis.");
    }
    else if (y === 0)
    {
        console.log("Lies on X-axis.");
    }
    else
    {
        console.log("Lies in the plane.");
    }
}

let inputx = prompt("Enter the X-axis value ");
let inputy = prompt("Enter the Y-axis value ");
checkXYazis(Number(inputx),Number(inputy));