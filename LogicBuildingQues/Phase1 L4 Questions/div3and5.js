function divisibleby3and5(num)
{
    if((num%3 === 0) && (num%5 === 0))
    {
        console.log("FizzBuzz");
    }
    else if(num%5 === 0){
        console.log("Buzz");
    }
    else if(num%3 === 0)
    {
        console.log("Fizz");
    }
    else
    {
        console.log("NA");
    }
}

let input = prompt("Enter the number");
divisibleby3and5(Number(input));