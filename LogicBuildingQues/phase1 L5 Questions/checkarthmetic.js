function checkArithmeticprog(a,b,c)
{
    if(b-a === c-b)
    {
        console.log("this is Arthmetic progression.")
    }
    else{
        console.log("this is not Arthmetic progression.")
    }
}

let inputa = prompt("Enter 1st number");
let inputb = prompt("Enter 2nd number");
let inputc = prompt("Enter 3rd number");

checkArithmeticprog(Number(inputa),Number(inputb),Number(inputc));