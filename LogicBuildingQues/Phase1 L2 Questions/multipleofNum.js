function multipleofeachother(a,b)
{
    if(a%b === 0 || b%a === 0)
    {
        console.log("Numbers are multiple of each other.");
    }
    else
    {
        console.log("Numbers are not multiple of each other.");
    }
}

let input = prompt("Enter the 1st number : ");
let input2 = prompt("Enter the 2nd number : ");
multipleofeachother(Number(input),Number(input2));