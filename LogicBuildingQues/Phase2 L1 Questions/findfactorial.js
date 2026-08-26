function factorial(num)
{
    let fact = 1;
    for(let i=1; i<=num; i++)
    {
        fact = fact*i;
    }
    console.log("Factorial of given lenght : "+fact);
}

let input = prompt("enter range to find factorial");
factorial(Number(input));