function checkTemp(temp) {
    if (temp < 20){
        console.log("Cold");
    }else if (temp >=20 && temp <=30)
    {
        console.log("Warm");
    }else{
        console.log("Hot");
    }
}
let temperature = prompt("Enter the temperature to check weather it is cold, warm or hot:");
checkTemp(parseFloat(temperature));