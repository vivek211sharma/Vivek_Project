function checkdistnumber(num)
{
    if( num < 100 || num > 999){
        console.log("Please enter the correct size number");
        return;
    }

    let hunder = Math.floor(num/100);
    let ten = Math.floor((num%100)/10);
    let one = num%10;

    if(hunder !== ten && ten !== one && one !== hunder){
        console.log("this is Distint three digit number.");
    } else {
        console.log("this number is not a distint number.");
    }
}

let input = prompt("Enter a three digit number : ");
checkdistnumber(Number(input));