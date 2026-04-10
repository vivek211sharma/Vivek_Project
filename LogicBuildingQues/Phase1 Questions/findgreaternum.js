function findGreaterNum(num1, num2){
    if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is greater than " + num1);
    }else{
        console.log("Both Number are equal.");
    }
}
let input1 = prompt("Enter first Number : ");
let input2 = prompt("Enter second Number : ");
findGreaterNum(Number(input1), Number(input2));