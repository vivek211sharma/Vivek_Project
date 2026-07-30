function checktaxeligibility(age, income)
{
    if(age > 18 && income > 500000)
    {
        console.log("Eligible for Tax.");
    }
    else{
        console.log("Not Eligible for Tax.")
    }
}

let input1 = prompt("Enter Age");
let input2 = prompt("Enter Income");

checktaxeligibility(Number(input1),Number(input2));