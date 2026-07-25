function checkCordinate( x, y)
{
    if(x > 0 && y > 0)
    {
        console.log("Lies in I Quadrant");
    }
    else if(x > 0 && y < 0)
    {
        console.log("Lies in II Quadrant.");
    }
    else if(x < 0 && y < 0)
    {
        console.log("Lies in III Quadrant.");
    }
    else if(x < 0 && y > 0)
    {
        console.log("Lies in IV Quadrant.");
    }
    else if(x === 0 && y === 0 )
    {
        console.log("Lies in Origin.");
    }
    else if(x === 0)
    {
        console.log("Lies in Y-axis.");
    }
    else
    {
         console.log("Lies in X-axis.");
    }
}

let inputx = prompt("Enter the X-axis value ");
let inputy = prompt("Enter the Y-axis value ");
checkCordinate(Number(inputx),Number(inputy));