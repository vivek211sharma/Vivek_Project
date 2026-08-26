function sumofEvennum(num)
{
    let sum = 0;
    for(let i=0; i <=num; i++)
    {
        if(i%2 === 0)
        {
            sum = sum + i;
        }
    }
    console.log(sum);
}

let input = prompt("Enter a range");
sumofEvennum(Number(input));