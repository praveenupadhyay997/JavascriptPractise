console.log("Feeling Proud")

var numericObject = [54, 69, 22, 33, 5, 10, 19, 45, 36, 46, 84, 90, 200, 200];
let stringObject = ["Saab", "Volvo", "BMW", "Perl", "Mohtashim", "zara", "uliptart"];

function isEven(x)
{
    return x%11 == 0;
}
console.log(numericObject.filter(x => isEven(x)));