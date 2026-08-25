function print1to10(a)
{
    for(let i=1; i<= a; i++)
    {
        console.log(i);
    }
}

let inputa = prompt("Enter a number");
print1to10(Number(inputa))