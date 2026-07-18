function takeHour(a)
{
    if(a > 5 && a < 12){
        console.log("Good Morning Guys.");
    }
    else if(a >= 12 && a < 16){
        console.log("Good Noon Guys.");
    }
    else if(a >= 16 && a < 20)
    {
        console.log("Good Evening guys.");
    }
    else if( (a >= 20 && a < 24) || ( a >= 0 && a < 5)){
        console.log("Good Night guys.")
    }
    else{
        console.log("Invalid Hour details.")
    }
}

let input = prompt("Enter hour : ");
takeHour(Number(input));