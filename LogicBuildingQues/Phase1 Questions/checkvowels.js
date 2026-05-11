function checkVowels(ch){
    if("aeiouAEIOU".includes(ch)){
        console.log(ch + " is a vowel.");
    } else {
        console.log(ch + " is not a vowel.");
    }
}
let vowel = prompt("Enter a character to check if it's a vowel:");
checkVowels(vowel);