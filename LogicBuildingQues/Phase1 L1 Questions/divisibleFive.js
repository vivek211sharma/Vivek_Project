function divisblebyFive(num){
    if (num % 5 === 0) {
        console.log(num + " is divisible by 5.");
    } else {
        console.log(num + " is not divisibe by 5.");
    }   
}

let input = prompt("Enter a number to check if it is divisible by 5 : ");
divisblebyFive(Number(input));