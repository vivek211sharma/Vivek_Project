function checkhowmanydigit(num)
{
    num = Math.abs(num);

    if(num >= 0 && num < 10){
        console.log("Number is single digit.");
    }
    else if( num >=10 && num < 100)
    {
        console.log("Number is dubble digit.");
    }
    else {
        console.log("number is multi digit.");
    }
}

let input = prompt("Enter the number to check how many digit : ");
checkhowmanydigit(Number(input));