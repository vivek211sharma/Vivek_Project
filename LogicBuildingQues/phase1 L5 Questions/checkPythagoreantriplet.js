function findpythagoreantriplet(a,b,c)
{
    let largest = Math.max(a,b,c);

    if( (a*a + b*b === largest*largest)||(b*b + c*c === largest*largest)||(a*a + c*c === largest*largest))
    {
        console.log("This is the pythagorian Triplet.");
    }else
    {
        console.log("this is not a pyhtagorian triplet.");
    }
}

let inputa = prompt("enter 1st side");
let inputb = prompt("enter 1st side");
let inputc = prompt("enter 1st side");
findpythagoreantriplet(Number(inputa),Number(inputb),Number(inputc));