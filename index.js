// console.log("Feeling Proud")

// var numericObject = [54, 69, 22, 33, 5, 10, 19, 45, 36, 46, 84, 90, 200, 200];
// let stringObject = ["Saab", "Volvo", "BMW", "Perl", "Mohtashim", "zara", "uliptart"];
// let jsonArrayObject = [
//     {
//         firstName: "John", lastName: "Doe", age: 43, profession :"Teacher"
//     },
//     {
//         firstName: "Marco", lastName: "Yansen", age: 44, profession :"Pilot"
//     },
//     {
//         firstName: "Tola", lastName: "Dogra", age: 43, profession :"Teacher"
//     },
//     {
//         firstName: "Inzamam", lastName: "HAq", age: 53, profession :"Cricketer"
//     },
//     {
//         firstName: "Hrithik", lastName: "Dogra", age: 23, profession :"Model"
//     },
//     {
//         firstName: "Geeta", lastName: "Dogra", age: 43, profession :"Doctor"
//     },
//     {
//         firstName: "Mansi", lastName: "Dogra", age: 33, profession :"Homemaker"
//     }
// ]


// function isEven(x) {
//     return x % 11 == 0;
// }
// console.log(numericObject.filter(x => isEven(x)));

// jsonArrayObject.forEach(x => {
//     console.log(x.firstName.concat(x.lastName));
// })

// // Adding all the element in array plus 1
// const reducedSum = numericObject.reduce((acc, cur) => {
//     acc += cur
//     return acc
// }, 0) + numericObject.length
// console.log("Sum of all Element + 1 for each element = ", reducedSum)

// // Check whether a string is rotation of other string
// function stringRotation(str1, str2) {
//     return str1.length == str2.length && str1.concat(str1).indexOf(str2) != -1
// }

// console.log(stringRotation("ABCD", "CDAB"))

// //oddBallSum -- Without reduce
// function sumOfArray(filteredArray) {
//     var sum = 0;
//     for (s in filteredArray) {
//         sum += Number(filteredArray[s]);
//     }
//     return sum
// }
// console.log(sumOfArray(numericObject.filter(x => x & 1 != 0)))

// //2-D array sum
// const twoDimArray = [[1, 2], [1, 2, 4], [1, 2, 3, 4, 5]]

// async function sumOfMultiDimArray(fullArray) {
//     let sum = 0;
//     try {
//         fullArray.forEach((individualAray) => {
//             for (let a = 0; a < individualAray.length; a++)
//                 sum += Number(individualAray[a])
//         })
//     }
//     finally {
//         return Promise.resolve(sum)
//     }
// }
// console.log("Sum =", sumOfMultiDimArray(twoDimArray))

// function LuckySeven(numObject) {
//     // Lucky Sevens
//     if (numObject.length > 3) {
//         for (var i = 2; i < numObject.length; i++) {
//             if (numObject[i] + numObject[i - 1] + numObject[i - 2] === 7) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
// console.log(LuckySeven([2, 1, 5, 1, 0]) ? "It is Lucky Seven" : "It is not a Lucky Seven")

// // Reverse each string and return the concatenated string
// function reverseString(string, separator){
//     return string.split(separator).reverse().join(separator);
// }

// console.log(reverseString("Welcome,to,this,Javascript,Guide", ','))

// // Fibonacci nth term
// var arr = [0, 1]
// //var n = window.prompt("Enter the number of term you want to observe of Fibonacci series -")
// /*for(let i = 1; i<n-1; i++){
//     arr.push(arr[i-1]+ arr[i])
// }

//  arr.forEach(x =>
//     console.log(x)) */

// // Fibonacci nth term recursively
// function fib(n){
//     if(n === 0 || n === 1){
//         return n;
//     }
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(6))

// console.log(numericObject.sort((a,b)=>console.log(a, ">", b, "=", a>b)))
// console.log(numericObject.sort((a,b)=> b-a))