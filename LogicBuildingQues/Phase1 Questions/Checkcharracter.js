function checkCharacter(char) {
    if (char >= 'A' && char <= 'Z'){
        console.log(char + " is an uppar case letter.");
    } else if ( char >= 'a' && char <= 'z'){
        console.log(char + " is a lower case letter.");
    } else if  (char >= '0' && char <= '9'){
        console.log(char + " is a digit.");
    } else {
        console.log( char + " is a special character.");
    }
}

let input = prompt("Enter a character : ");
checkCharacter(input);