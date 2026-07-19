function checkNumberEvenOdd(num1, num2)
{
    if(num1 % 2 === 0 && num2 % 2 ===0 ){
        console.log("Both Numbers are Even.");
    }
    else if(num1 % 2 !== 0 && num2 % 2 !== 0)
    {
        console.log("Both Numbers are odd.");
    }
    else{
        console.log("one is Even and another is Odd.")
    }
}

let input1 = prompt("enter 1st number : ");
let input2 = prompt("enter 2nd number : ");
checkNumberEvenOdd(Number(input1),Number(input2));