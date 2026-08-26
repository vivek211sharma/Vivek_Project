function countnumofDigit(num)
{
    num = Math.abs(num);
    if(num === 0)
    {
        console.log("Count is 0");
        return;
    }
    
    let count = 0;

    while(num > 0)
    {
        num = Math.floor(num/10);
        count++;
    }
    console.log(count);
}

let input = prompt("Enter number");
countnumofDigit(Number(input));