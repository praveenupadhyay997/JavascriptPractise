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

// // Count the number of records
// console.log(jsonArrayObject.length)
// // print all the records
// console.log("First Name------------Last Name------------Age------------Profession------------")
// jsonArrayObject.forEach(x => console.log(x.firstName, "------------", x.lastName, "------------",
//     x.age, "------------", x.profession))
// // print on basis of a condition
// console.log("Printing age > 45 people")
// console.log(jsonArrayObject.filter((x) => x.age > 45))
// // sort by age in ascending and descending
// console.log("Printing Sorted data")
// jsonArrayObject.sort((a, b) => a.age - b.age).forEach(function (employee) {
//     console.log(employee.firstName, "------------", employee.lastName, "------------",
//         employee.age, "------------", employee.profession)
// })
// console.log("Printing Sorted data descending")
// jsonArrayObject.sort((a, b) => b.age - a.age).forEach(x => {
//     console.log(x.firstName, "------------", x.lastName, "------------",
//         x.age, "------------", x.profession)
// })
// // sort by name in in ascending and descending
// console.log("Printing Sorted first name data")
// jsonArrayObject.sort((a, b) => {
//     if (a.firstName > b.firstName)
//         return 1
//     else if (a.firstName < b.firstName)
//         return -1
//     else
//         return 0
// }).forEach(function (employee) {
//     console.log(employee.firstName, "------------", employee.lastName, "------------",
//         employee.age, "------------", employee.profession)
// })
// console.log("Printing Sorted data by first name descending")
// jsonArrayObject.sort((a, b) => {
//     if (a.firstName > b.firstName)
//         return -1
//     else if (a.firstName < b.firstName)
//         return 1
//     else
//         return 0
// }).forEach(function (employee) {
//     console.log(employee.firstName, "------------", employee.lastName, "------------",
//         employee.age, "------------", employee.profession)
// })
// Group people into their profession and print concatenated name
// let uniqueProfession = new Set()
// jsonArrayObject.forEach(x => uniqueProfession.add(x.profession))
// console.log(uniqueProfession)
var groupedData = jsonArrayObject.reduce(function (acc, curr) {
    acc[curr.profession] = acc[curr.profession] || [];
    acc[curr.profession].push(curr.firstName + " " + curr.lastName);
    return acc;
}, {})
//console.log(groupedData)
// Count number of people in each group
var countedGroup = jsonArrayObject.reduce(function(acc, curr){
    //console.log(curr.profession, curr.firstName, acc)
    console.log(acc[curr.profession] || 0)
    acc[curr.profession] = (acc[curr.profession] || 0) + 1;
    return acc
}, {})
//console.log(countedGroup)