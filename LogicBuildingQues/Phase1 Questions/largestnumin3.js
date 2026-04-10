function largestNum(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        console.log(num1 + " Number is greater than " +num2+ " and "+num3+ ".");
    } else if(num2 > num1 && num2 > num3){
        console.log(num2 + " Number is greater than " +num1+ " and "+num3+ ".");
    } else {
        console.log(num3 + " Number is greater than " +num1+ " and "+num2+ ".");
    }
}
let input1 = prompt("Enter the 1 number : ");
let input2 = prompt("Enter the 2 number : ");
let input3 = prompt("Enter the 3 number : ");
largestNum(Number(input1),Number(input2),Number(input3));