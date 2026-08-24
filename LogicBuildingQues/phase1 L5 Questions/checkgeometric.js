function Geometricprogression(a,b,c)
{
    if( b/a === c/b){
        console.log("This is a Geometric Progression.");
    }
    else{
        console.log("This is not Geometric");
    }
}

let inputa = prompt("enter 1st number")
let inputb = prompt("enter 2nd number")
let inputc = prompt("enter 3rd number")

Geometricprogression(Number(inputa),Number(inputb),Number(inputc));