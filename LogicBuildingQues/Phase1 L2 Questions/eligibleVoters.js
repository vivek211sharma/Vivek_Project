function eligibleVoters(age)
{
    if( age >= 18 )
    {
        console.log("This Person can Vote.");
    }
    else if( age >= 0 && age < 18)
    {
        console.log("Not Eligbile for Vote.");
    }
    else{
        console.log("Invalid....!");
    }
}

let input = prompt("Enter person age : ");
eligibleVoters(Number(input));