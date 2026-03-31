function printNumberType(num){
    if(num > 0){
        console.log("Positive Number");
    } else if (num < 0){
        console.log("Negative Number");
    } else{
        console.log("Zero");
    }
}
let input = prompt("Enter a number : ");
printNumberType(Number(input));