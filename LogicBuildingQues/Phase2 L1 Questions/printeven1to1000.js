function printEven1to1000(num)
{
    for(let i = 1; i <= num; i++)
    {
        if(i%2 === 0)
            {
        console.log(i);
            }
    }
}

let input = prompt("enter number");
printEven1to1000(Number(input))