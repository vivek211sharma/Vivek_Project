function printAnglebtwhourminhand(hour,min)
{ if(hour >= 1 && hour <= 12 && min >= 0 && min <= 59){
    let minangle = min * 6;
    let hourangle = hour * 30 + min * 0.5;
    let diff = Math.abs(hourangle - minangle);
    let smallerangle = Math.min(diff, 360-diff);
    console.log(smallerangle);
    }
    else{
        console.log("please enter the correct hour and mins details");
    }
}

let inputhour = prompt("Enter Hour");
let inputmin = prompt("Enter Min");

printAnglebtwhourminhand(Number(inputhour),Number(inputmin));