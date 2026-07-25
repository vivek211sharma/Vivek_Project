function checkMultipleof7(num)
{
    if(num%7 === 0 || Math.abs(num) % 10 === 7 )
    {
        console.log("Number is Multiple of 7 or end with 7.");
    }
    else
    {
        console.log("Number is not Multiple of 7 or end with 7.");
    }
}

let input = prompt("Enter the number to check : ");
checkMultipleof7(Number(input));