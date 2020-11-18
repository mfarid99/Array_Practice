const myArr = new Array(1,3,4,5)
console.log(myArr)
//Result [1,3,4,5]
//Only word Array will work here. It is a prototype. New initiate the array. 
//This is simply one way of creating an array

//Nested or multi dimensional array is an array within an array


//Spread Operator [...]
const myArr1 = [1, 2];
const myArr2 = [3, 4];
const myArr3 = myArr1.concat(myArr2);
const myArr4 = [...myArr1, ...myArr2] //spread operator
console.log(myArr3)
//[ 1, 2, 3, 4 ]
console.log(myArr4)
//[ 1, 2, 3, 4 ]


//Destructuring
const myArr5 = [1, 2];
const [one, two] = myArr5;
console.log(one, two)
//result 1 2 (it replaced one with 1 and two with 2)

//Looping over array

const myArr6 = [1,2,4,5,6]
for (index = 0; index<myArr6.length; index++) {
    console.log(myArr6[index])
} 
//result
// 1
// 2
// 4
// 5
// 6

for (value of myArr6) {
    console.log(value)
}
//same result
// 1
// 2
// 4
// 5
// 6

const myArr7 = [1, 2, 3, 5]

const loopFunction = (a, b) => {
    //first param in loopFunction = (a, b) is a which is the value inside the array such as 1, 2, 3, 5. The second param is the index such as 0, 1, 2, 3. 
    console.log (a, b)
    
}
myArr7.forEach(loopFunction)
//result 
// 1 0
// 2 1
// 3 2
// 5 3

//Another waiting of writing myArr7 function is
myArr7.forEach((value, index)=> {
    console.log(value, index)
})

const myArr8 = [1,2,3,4]

myArr8.pop() // removes last index in array (4)
console.log(myArr8)
//[ 1, 2, 3 ]

myArr8.push(5) //add 5 at end of array
console.log(myArr8)
//[1, 2, 3, 5]

myArr8.shift()  //removes 1st index (1)
console.log(myArr8) //removes 1st index (1)
//[ 2, 3, 5 ]

myArr8.unshift(0) //adds to beginning of array
console.log(myArr8)
//[ 0, 2, 3, 5 ]

myArr9 = [1,2,3,4]
const second = myArr9.slice(1,3)
console.log(second)
// [ 2, 3 ] it custs starting index 1 which is 2 and stops at index 3 which is 4 but does not include 4

myArr10 = [1,2,3,4]
const trio = myArr10.splice(1,2) //1 represents index to start cutting and 2 represents how many total will be cut
console.log(trio)
//[2,3]
console.log(trio, myArr10) //console logs both arrays
//[ 2, 3 ] [ 1, 4 ]

myArr11 = [1,2,3,4,5,6,7,8,9,10]

const myVal = myArr11.filter((a, b)=> {
    return a % 2 == 0 ;
})
console.log(myVal)
//[2,4,6,8,10]
//a is param for value, b is param for index
//we filtered myArr11 to create a new array with just value divisible by 2

myArr12 = [1, 2, 3, 4, 5, 6]
const burger = myArr12.map((a, b)=> {
    return "hot"
})
console.log(burger)
//map will loop over every index and return (in this case hot) so we will have a new array full of the word hot/

myArr13 = [1, 2, 3, 4, 5, 6]
const burgers = myArr13.map((a, b)=> {
    return a * 3
})
console.log(burgers)
//[ 3, 6, 9, 12, 15, 18 ]