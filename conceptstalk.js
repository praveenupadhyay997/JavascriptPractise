// Var, let and const principle
// Hoisting
// console.log(a)
// var a=10;
// let b= 20;

// setTimeout(function valueOfA(){
//     for (var i = 1 ; i<=a; i++){
//         if(i%2 === 0)
//         console.log(i)
//     }
// },5000)
// console.log("I am executed first")
// console.log(a, ",", b)

// function a(){
//     console.log(b)
// }
// var b=10
// a()


// Lexical Scope
// Call Stack
// Temporal dead zone
// function afunc(){
//     var b=10
//     c()
//     function c(){
//         console.log(b)
//     }
// }
// var a=10
// var b = 100
// afunc()
// console.log("Outside function", a)

// console.log("i am here")
// sum(5)(4)(3)(2)(1)()
// var sum = function (a) {
//     return function (b){
//         if(b){
//             return sum(a+b)
//         }
//         else{
//             return a
//         }
//     }
// }
// var sumCurry = a => b => b? sumCurry(a+b) : a;
// console.log(sum(5)(4)(3)(2)(1)())
// console.log(sumCurry(5)(4)(3)(2)(1)())

// Closure -> Local memory + Lexical environment of parent
// function outerfunction(a){
//     var innervalue = 10
//     return function innerfunction(b){
//         return innervalue + b + a
//     }
// }
// console.log(outerfunction(20)(5))

// Prototypal inheritance
let jsonArrayObject = [
    {
        firstName: "John", lastName: "Doe", age: 43, profession: "Teacher"
    },
    {
        firstName: "Marco", lastName: "Yansen", age: 44, profession: "Pilot"
    },
    {
        firstName: "Tola", lastName: "Dogra", age: 43, profession: "Teacher"
    },
    {
        firstName: "Inzamam", lastName: "Haq", age: 53, profession: "Cricketer"
    },
    {
        firstName: "Hrithik", lastName: "Dogra", age: 23, profession: "Model"
    },
    {
        firstName: "Geeta", lastName: "Dogra", age: 43, profession: "Doctor"
    },
    {
        firstName: "Mansi", lastName: "Dogra", age: 33, profession: "Homemaker"
    }
]
// var weekdayName = ["Sun", "Mon", "Wed", "Thu", "Fri", "Sat"]
// integralInputs = [1,23,45,53,3,765,232]
// function haulperiod(a){
//     return weekdayName[parseInt(a)];
// }
// console.log(haulperiod)

// console.log(haulperiod(5))

// console.log(jsonArrayObject)


// Call, apply and bind

// They are used to borrow a function in some object context.

// var printTheHelmetType = function(price, dos){
//     console.log(this.brand, this.modelno, price, dos, "====> ")
//     if(this.brand === "vega"){
//         switch(this.modelno){
//             case 1: return "aerial"; break;
//             case 2: return "crux"; break;
//             default: return "unknown"; break;
//         }
//     }
//     else if(this.brand === "studs"){
//         switch(this.modelno){
//             case 1: return "oreo"; break;
//             case 2: return "hardrock"; break;
//             default: return "unknown"; break;
//         }
//     }
//     else if(this.brand === "steelbird"){
//         switch(this.modelno){
//             case 1: return "hawk"; break;
//             case 2: return "metalwings"; break;
//             default: return "unknown"; break;
//         }
//     }
//     else 
//     return "unknown brand"
// }

// var helmet1 ={
//     brand: "steelbird",
//     modelno: 2
// }

// console.log(printTheHelmetType.call(helmet1,4000, "12-06-2022"))
// console.log(printTheHelmetType.apply(helmet1,[4000, "12-06-2022"]))
// var display = printTheHelmetType.bind(helmet1,4000, "12-06-2022")
// console.log(display())