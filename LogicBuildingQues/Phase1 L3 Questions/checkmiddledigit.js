function checkmiddledigit(num)
{
    if(num < 100 && num > 999)
    {
        console.log("Invalid Number");
        return;
    }

    let hunder = Math.floor(num/100);
    let ten = Math.floor((num%100)/10);
    let one = Math.floor(num%10);

    if(ten > hunder && ten > one){
        console.log("Middle number is greater then both left and right number.")
    }
    else if( ten < hunder && ten < one){
        console.log("Middle number is shorted then both left and right number.")
    }
    else{
        console.log("Neither");
    }
}

let input = prompt("enter the 3 digit number : ");
checkmiddledigit(Number(input));