function findTrianglethirdangle(angle1 ,angle2)
{
    if(angle1 + angle2 >= 180 || angle1 <= 0 || angle2 <= 0)
    {
        console.log("Please enter the correct angle.");
        return;
    }

    let angle3 = 180 - (angle1 + angle2);
    console.log("Third Angle is : ",angle3);
}

let input1 = prompt("enter angle 1");
let input2 = prompt("enter angle 2");

findTrianglethirdangle(Number(input1),Number(input2));