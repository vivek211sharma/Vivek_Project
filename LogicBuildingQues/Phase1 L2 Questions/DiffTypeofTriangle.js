function DiffTypeofTriangle(a,b,c){
    if( a + b > c && b + c > a && a + c > b){
        if(a === b && b === c)
        {
            console.log("This is Equalatral Triangle.")
        } 
        else if(a === b || b === c || a === c)
        {
            console.log("This is Isosceles Triangle")
        }
        else
        {
            console.log("This is Scalene Triangle")
        }
        console.log("this is a Valid triangle.")
    }
    else{
        console.log("This is not a valid Triangle.")
    }
}

let input1 = prompt("enter 1st side of triangle : ");
let input2 = prompt("enter 2nd side of triangle : ");
let input3 = prompt("enter 3rd side of triangle : ");
DiffTypeofTriangle(Number(input1),Number(input2),Number(input3));