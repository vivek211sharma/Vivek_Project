function comparefirstlastdigit(num)
{
    if (num < 1000 && num > 9999)
    {
        console.log("Please enter Valid number.");
        return;
    }

    let first = Math.floor(num/1000);
    let last = Math.floor(num%10);

    if (first == last){
        console.log("First and Last Digit is Equal.");
    }
    else{
        console.log("Not Equal.")
    }
}

let input = prompt("Enter the a 4 Digit number : ");
comparefirstlastdigit(Number(input));