function reversegivenNum(num)
{
    let reverse = 0;
    console.log("Number : ",num);
    while(num > 0)
    {
        let lastdigit = num % 10;
        reverse = reverse*10 + lastdigit;
        num = Math.floor(num/10);
    }
    console.log("Reverse : "+reverse);
}

let input = prompt("Enter a Number");
reversegivenNum(Number(input));