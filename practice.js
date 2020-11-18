// myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(myArray.join())
// //1,2,3,4,5,6,7,8,9,10
// console.log(myArray.join(" "))
// //1 2 3 4 5 6 7 8 9 10
// console.log(myArray.join('-'))
// //1-2-3-4-5-6-7-8-9-10

// myStr = "Hello World"
// console.log(myStr.split())
// //[ 'Hello World' ]
// console.log(myStr.split(" "))
// // /[ 'Hello', 'World' ]
// console.log(myStr.split(""))
// // [  'H', 'e', 'l', 'l',
//     // 'o', ' ', 'W', 'o',
//     // 'r', 'l', 'd']
// console.log(myArray.pop())
// //[10] pop last index
// console.log(myArray)
// //[1, 2, 3, 4, 5,6, 7, 8, 9] rendered same array after last element was removed
// console.log(myArray.push(11))
// //10
// console.log(myArray)
// //[1, 2, 3 4, 5, 6, 7, 8, 9, 11]
// console.log(myArray.shift())
// //removes first index (1) and renders [1]
// console.log(myArray)
// //[2, 3, 4, 5, ,6 7, 8, 9, 11]

// console.log(myArray.unshift(17))
// //removes 1st index (1) and replaces it with 17
// console.log(myArray)
// //[17, 2, 3, 4,  5, 6, 7, 8, 9, 11]


// console.log(myArray.slice(4,7))
//remove everything from index 4 (5th spot) including index 5 and 6 but it does not include 7. Result [5, 6, 7]. It does not manipulate the original array. It just cuts index 4, 5, 

// console.log(myArray.splice(2, 4))
//remove everything from index 2(3rd spot) and includes a total of 4 items - result [3, 4, 5, 6]
// console.log(myArray)
//splice, manipulates the original, therefore, result [ 1, 2, 7, 8, 9, 10 ]

//Pure function such as slice, does not manipulate the original array. 

//Impure is the opposite such as splice. 

/*
Javascript - Pure vs. Impure Functions: 
Pure function does not mutate the original Array.
Ex: 
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myArray.slice(4, 7))
Result: [5, 6, 7]
myArray does not Change   

Impure function mutates the original Array. 
Ex: 
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myArray.splice(2, 4))
Result: [3, 4, 5, 6] 
myArray is now = [1, 2, 7, 8, 9, 10] 
*/

myArray2 = ['four', 'five', 'six']

//filter, map, forEach, some are all iterate methods - they all loop. They all take a function or callback as its paramenter 

// console.log(myArray2.some((value)=> {
// return value.length == 2
// }))
//it counts number of letter for each word, so 3 or 4 would result in true, any other number is false

// console.log(myArray2.filter((value) => {
//     return value.length == 4
// }))
//returns an array with words that have 4 letters ['four', 'five']

// console.log(myArray2.map((value, index) => {
//     //2 params, value and index # that you plan to manipulate
//     return value + ' six'
//     [ 'four six', 'five six', 'six six' ]
// }))

// console.log(myArray2.forEach((value, index)=> {
//     console.log(value)
//         return index
// }))