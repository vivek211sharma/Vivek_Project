function printnum10to1(num)
{
    for(let i = num; i >= 1 ; i--)
    {
        console.log(i);
    }
}

let input = prompt("enter number");
printnum10to1(Number(input));