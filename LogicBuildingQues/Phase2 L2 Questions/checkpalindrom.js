function Palindrom (num)
{
    let orignal = num;
    let reverse = 0;

    while(num > 0)
    {
        let lastdigit = num % 10;
        reverse = reverse*10 + lastdigit;
        num = Math.floor(num/10);
    }
    if(orignal === reverse)
    {
        console.log("This is Palindrom Number.");
    }
    else{
        console.log("This is not palindrom");
    }
}

let input = prompt("Enter Number to check Palindrom");
Palindrom(Number(input));