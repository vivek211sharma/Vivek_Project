function amount(amt)
{
    if(amt % 100 !== 0)
    {
        console.log("Amount cannot evenly divided into 2000,500 and 100.");
        return;
    }

    let notes2000 = Math.floor(amt / 2000);
    amt = amt % 2000;

    let notes500 = Math.floor(amt / 500);
    amt = amt % 500;

    let notes100 = Math.floor(amt / 100);

    console.log("2000 notes : ", notes2000);
    console.log("500 notes : ", notes500);
    console.log("100 notes : ", notes100);
    
}

let input =  prompt("Enter the Amount in multiple of 1000");
amount(Number(input));