// // --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// // a) Create a test with an expect statement using the variable provided.

// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // loop throgh the array 
// // take out the first element in each array with shift
// // then randomize the array 

// const cutAndShuffle = (array) => {

//     array.shift()

//     for (let i = array.length - 1; i > 0; i--){

//         let random = Math.floor(Math.random() * (i + 1));
//         // create a random number and call it 'random'
//         let temp = array[i]
//         // loop through and store the current value into the 'temp' variable for later
//         array[i] = array[random]
//         // replace the current value with the random value's index
//         array[random] = temp
//         // replace the index that the random value came from, with the temp value (which was the current value)
//     }
//     return array
// }

// console.log(cutAndShuffle(colors1))

// // --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// // a) Create a test with expect statements for each of the variables provided.

// var cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// var cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125

// // cube each number with a loop
// // sum them up

// const cubeThenSum = (array) => {

//     let cubedArr = array.map(value => {
//         let cubed = value ** 3
//         return cubed
//     })
//     // loop through the array and cube all the elements in it

//     return cubedArr.reduce((a,b) => a + b, 0)
//     // sum up all of the elements in the array 
//     // reduces the array to one single value with the given function of adding all the numbers from left to right
// }
// console.log(cubeThenSum(cubeAndSum1))
// console.log(cubeThenSum(cubeAndSum2))


// // --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // a) Create a test with expect statements for each of the variables provided.

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, -59, 8, 24]
// // Expected output: [-59, 109]

// // find the smallest number with math min  method
// // put it in a new array
// // find the max number with a math max method
// // put it in the new array
// // return the new array

// const minAndMax = (array) => {
    
//     let newArr = [];
    
//     newArr.push(Math.min.apply(Math, array));

//     newArr.push(Math.max.apply(Math, array));

//     return newArr
// }

// console.log(minAndMax(nums1))
// console.log(minAndMax(nums2))

// // --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// // a) Create a test with expect statements for each of the variables provided.

// var testString1 = "albatross"
// // Expected output: "aLbAtRoSs"
// var testString2 = "jabberwocky"
// // Expected output: "jAbBeRwOcKy"

// const capitalize = (string) => {

//     let splitString = string.split("")

//     return splitString.map((value, index) => {
//         if (index % 2 !== 0){
//             return value.toUpperCase()
//         } else {
//             return value
//         }
//     }).join("")
// }

// console.log(capitalize(testString1))
// console.log(capitalize(testString2))


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// const noDuplicates = (array1, array2) => {

//     let unique = [];
//     let repeats = [];

//     for(i = 0; i <= array1.length; i++){
//         unique.push(i)
//         if(unique.includes(i)){
//             repeats.push(i)
//         } else {
//             unique.push(i)
//         }
//     }

//     for(i = 0; i <= array2.length; i++){
//         unique.push(i)
//         if(unique.includes(i)){
//             repeats.push(i)
//         } else {
//             unique.push(i)
//         }
//     }
//     return repeats

// }

const noDuplicates = (array1, array2) => {

    let unique = [];
    let repeats = [];

    array1.forEach(value => {
        unique.push(value)
        if(unique.includes(value)){
            repeats.push(value)
        } else {
            unique.push(value)
        }
    })
    return unique
}

console.log(noDuplicates(testArray1, testArray2))
// this ain't doing what I'm expecting it to do :(