function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}
let input = prompt("Enter a year to check if it is a leap year : ");
leapYear(Number(input));