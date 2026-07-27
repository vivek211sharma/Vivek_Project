function checkNumber100to999(num)
{
    if(num > 100 && num < 999)
    {
        console.log("Number lies btw 100 to 999");
    }
    else{
        console.log("Number is not lies btw 100 to 999.")
    }
}

let input = prompt("Enter the number to check.");
checkNumber100to999(Number(input));