function divisibleFiveThree(num) {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(num + " is divisible by both 5 and 3.");
     } else {
        console.log(num + " is not divisible by both 5 and 3.");
     }
}
let input = prompt("Enter a number to check if it is divisible by both 5 and 3 : ");
divisibleFiveThree(Number(input));