function checksumlessthen100(num1, num2)
{
    if(num1 >= 0 && num2 >=0 && (num1+num2) <100)
    {
        console.log("Both numbers are postive and sum is also less then 100.")
    }
    else
    {
        console.log("Numbers are may not positive and also may sum is also not less then 100.")
    }
}

let input1 = prompt("Enter Number 1");
let input2 = prompt("Enter Number 2");

checksumlessthen100(Number(input1), Number(input2));