function printTable(num)
{
    for(let i =1; i <= 10 ; i++)
    {
        console.log(num+" * "+i+ " = " +i*num)
    }
}

let input = prompt("Enter number to check its table");
printTable(Number(input));