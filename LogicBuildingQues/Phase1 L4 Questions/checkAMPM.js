function checkAMPM(hour,min)
{
    if(hour <= 0 || hour >= 24 || min <= 0 || min > 60)
    {
        console.log("Invalid Time.");
    }
    else if( hour < 12)
    {
        console.log("AM");
    }
    else
    {
        console.log("PM");
    }
}

let hour1 = prompt("Enter Hour");
let min1 = prompt("Enter Min");

checkAMPM(Number(hour1),Number(min1));