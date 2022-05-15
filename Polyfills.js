// // Bind polyfill
// let printName = function (hometown, state, country) {
//     console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
// }

// let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
// printMyName("India");

// Function.prototype.mybind = function (...args) {
//     if (this === null) throw new TypeError()
//     let func = this, params = args.slice(1);
//     return function (...args2) {
//         func.apply(args[0], [...params, ...args2]);
//     }
// }

// var name = {
//     firstname: "Akshay",
//     lastname: "Saini"
// }
// let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
// printMyName2("India");

// // string manipulator polyfill -- praveen-kumar.upadhyay@capgemini.com
// Array.prototype.emailsplit = function(){
//     let nameObject =[{ }]
//     let obj = this
//     obj.forEach(x=>{
//         let splitArray = x.split(".")
//         let fnamesplit =  splitArray[0].split("-")
//         let fname = fnamesplit[0], mname = fnamesplit[1]
//         let lnamesplit  = splitArray[1].split("@")
//         let lname = lnamesplit[0], domainname = lnamesplit[1]
//         let secondarydomain = splitArray[2]
//         let primObj = {
//             "fname": fname,
//             "mname": mname,
//             "lname": lname,
//             "primedomain" : domainname,
//             "secondarydomain" : secondarydomain
//         }
//         nameObject.push(primObj)
//     })
//     return nameObject
// }
// console.log(["praveen-kumar.upadhyay@capgemini.com", "vijay-nath.upadhyay@capgemini.com"].emailsplit())

// hashcode generator polyfill