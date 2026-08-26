function sumofOddnum(num)
{
    let sum = 0;
    for(let i = 0; i <= num ; i++)
    {
        if(i%2 ==! 0)
        {
            sum = sum + i;
        }
    }
    console.log("Sum of all Odd Numbers : "+sum);
}

let input = prompt("enter a range");
sumofOddnum(Number(input));