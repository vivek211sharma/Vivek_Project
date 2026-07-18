function printGrade(a)
{
    if( a >= 90)
    {
        console.log("A");
    }
    else if( a >= 80 && a < 90)
    {
        console.log("B");
    }
    else if( a >= 70 && a < 80)
    {
        console.log("C");
    }
    else if( a >= 60 && a < 70)
    {
        console.log("D");
    }
    else if( a >= 50 && a < 60)
    {
        console.log("E");
    }
    else
    {
        console.log("F");
    }
}
let input = prompt("Enter a obtained marks : ");
printGrade(Number(input));