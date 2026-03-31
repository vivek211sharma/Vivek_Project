function checkEvenOdd(num){
    if(num % 2 === 0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}

let input = prompt("Enter a number : ");
checkEvenOdd(Number(input));