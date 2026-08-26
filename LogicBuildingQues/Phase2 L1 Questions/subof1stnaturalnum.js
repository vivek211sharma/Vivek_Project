function sumofNaturalno (num)
{
    let sum = 0;
    for(let i = 0; i <= num ; i++)
    {
        sum = sum + i;
        console.log(i+" "+sum);
    }
}

let input = prompt("enter natural no");
sumofNaturalno(Number(input));