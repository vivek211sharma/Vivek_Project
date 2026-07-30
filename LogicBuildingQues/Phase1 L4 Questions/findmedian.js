function findMedian(num1, num2, num3)
{
    let median;
    if((num1 >= num2 && num1 <= num3)||(num1 >= num3 && num1 <= num2))
    {
        median = num1;
    }
    else if((num2 >= num1 && num2 <=num3) || (num2 >= num3 && num2 <= num1))
    {
        median = num2;
    }
    else{
        median = num3;
    }

    console.log("Median Value is : ", median);
}
let input1 = prompt("enter 1st value");
let input2 = prompt("enter 2nd value");
let input3 = prompt("enter 3rd value");

findMedian(Number(input1), Number(input2), Number(input3));