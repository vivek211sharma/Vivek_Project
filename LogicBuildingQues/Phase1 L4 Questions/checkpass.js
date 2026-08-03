function checkPass(pass)
{
    let hasdigit = false;

    for(let i = 0; i < pass.length; i++){
        if(pass[i] >= '0' && pass[i] <= '9')
        {
            hasdigit = true;
            break;
        }

    }

    if(pass.length >= 8 && hasdigit)
    {
        console.log("Your entered pass is matching the condition");
    }
    else{
        console.log("Pasword is not matching the condition");
    }
}

let input = prompt("enter password");
checkPass(input);