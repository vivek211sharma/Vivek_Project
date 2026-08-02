function electricity(unit)
{
    let bill;

    if(unit < 100)
    {
        bill = unit * 1.5;
    }
    else if(unit < 200)
    {
        bill = unit * 2.5;
    }
    else if(unit < 300)
    {
        bill = unit * 4
    }
    else
    {
        bill = unit * 6;
    }
    console.log("Electricity bill : ", bill);
}

let input = prompt("Enter unit");
electricity(input);