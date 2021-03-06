// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { isMainThread } = require("worker_threads")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe("When cutAndShuffle is called on an array,", () => {

//     it("returns an array with the first item removed and shuffles the remainder of the array.", () => {

//         const colors1 = ["purple", "blue", "green", "yellow", "pink"];

//         actResult = cutAndShuffle(colors1);

//         expect(actResult).toEqual(["yellow", "blue", "pink", "green"]);
//     })

//     it("returns an array with the first item removed and shuffles the remainder of the array.", () => {

//         const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];

//         actResult = cutAndShuffle(colors2);

//         expect(actResult).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]);
//     })

// })



// // b) Create the function that makes the test pass.

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
// console.log(cutAndShuffle(colors2))




// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("When cubeThenSum is called on an array,", () => {

    it("returns the sum of all the numbers cubed", () => {

        const cubeAndSum1 = [2, 3, 4];

        actResult = cubeThenSum(cubeAndSum1);

        expect(actResult).toEqual(99);
    })

    it("returns the sum of all the numbers cubed", () => {

        const cubeAndSum1 = [0, 5, 10];

        actResult = cubeThenSum(cubeAndSum1);

        expect(actResult).toEqual(1125);
    })

})


// b) Create the function that makes the test pass.

const cubeThenSum = (array) => {

    let cubedArr = array.map(value => {
        let cubed = value ** 3
        return cubed
    })
    // loop through the array and cube all the elements in it

    return cubedArr.reduce((a,b) => a + b, 0)
    // sum up all of the elements in the array 
    // reduces the array to one single value with the given function of adding all the numbers from left to right
}
console.log(cubeThenSum(cubeAndSum1))
console.log(cubeThenSum(cubeAndSum2))



// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

describe("When minAndMax is called on an array,", () => {

    it("returns an array of the minimum and maximum numbers in that order.", () => {

        const nums1 = [3, 56, 90, -8, 0, 23, 6];

        actResult = minAndMax(nums1);

        expect(actResult).toEqual([-8, 90]);
    })

    it("returns an array of the minimum and maximum numbers in that order.", () => {

        const nums2 = [109, 5, 9, -59, 8, 24];

        actResult = minAndMax(nums2);

        expect(actResult).toEqual([-59, 109]);
    })

})



// b) Create the function that makes the test pass.

const minAndMax = (array) => {
    
    let newArr = [];
    
    newArr.push(Math.min.apply(Math, array));
    // push the smallest number into newArr

    newArr.push(Math.max.apply(Math, array));
    // then push the largest number into newArr

    return newArr
}

console.log(minAndMax(nums1))
console.log(minAndMax(nums2))



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


describe("When capitalize is called on an array,", () => {

    it("returns a string with every other letter capitalized.", () => {

        const testString1 = "albatross";

        actResult = capitalize(testString1);

        expect(actResult).toEqual("aLbAtRoSs");
    })

    it("returns a string with every other letter capitalized.", () => {

        const testString2 = "jabberwocky";

        actResult = capitalize(testString2);

        expect(actResult).toEqual("jAbBeRwOcKy");
    })

})



// b) Create the function that makes the test pass.

const capitalize = (string) => {

    let splitString = string.split("")

    return splitString.map((value, index) => {

        if (index % 2 !== 0){
            return value.toUpperCase()
        } else {
            return value
        }

    }).join("")
}

console.log(capitalize(testString1))
console.log(capitalize(testString2))



// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]





// b) Create the function that makes the test pass.
