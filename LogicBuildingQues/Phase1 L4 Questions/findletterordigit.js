function letterDigit(value){
    if(value >= 0)
    {
        console.log("Numbes.");
    }
    else if(value >= 'A' || value <='Z' || value >= 'a' || value <= 'z')
    {
        console.log("Aphabet.");
    }
    else {
        console.log("other.")
    }
}                

let input = prompt("enter the value to check digit or letter");
letterDigit(input);