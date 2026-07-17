function ValidTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log("The given sides can form a valid triangle.");
    } else {
        console.log("This is not a valid triangle.");
    }
}
let input1 = prompt("Enter the first sides if the triangle : ");
let input2 = prompt("Enter the second sides if the triangle : ");
let input3 = prompt("Enter the third sides if the triangle : ");
ValidTriangle(Number(input1), Number(input2), Number(input3));
