function validMonthday(month,day)
{
    if(day < 1 || month < 1 || month > 12)
    {
        console.log("Invalid date.");
    }
    else if(month === 2)
    {
        if(day <= 28)
        {
            console.log("valid date");
        }
        else{
            console.log("Invalid date");
        }
    }
    else if( month === 4 || month === 6 || month === 9 || month === 11)
    {
        if(day <= 30)
        {
            console.log("valid date");
        }
        else{
            console.log("invalid date");
        }
    }
    else{
        if(day <= 31)
        {
            console.log("Valid date");
        }
        else{
            console.log("Invalid date");
        }
    }
}

let inputmonth = prompt("Enter valid Month");
let inputday = prompt("Enter valid day");

validMonthday(Number(inputmonth),Number(inputday));