// COUNT THE NUMBER OF DUPLICATES 

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.



string = "Indivisibilities"

//PHASE 1 - LOWER LEVEL FUNCTIONS


//returns a lower cased array of a string.
const toLowerCaseArray = (str) => {
    return str.toLowerCase().split('')
}


//returns a uniq set of chars from an array
const uniq = (arr) => {
    let uniqStr = [...new Set(arr)]
    return uniqStr
}


//converts an array into an object with a 0 count of each element
//DEF CONSOLE.LOG THIS ONE..THIS ONE IS COOOL!!
const arrToObj = (array) => {
    let newObj = array.reduce((obj, item) => {
        obj[item] = 0;
        return obj;
    }, {});
    return newObj
}


//COUNTS TOTAL NUMBER OF DUPLICATES
const countTotal = (obj) => {
    let number = 0
    for (let key in obj) {
        if (obj[key] > 1) {
            number++
            // console.log("this", number)
        }
    }
    return number
}




//PHASE 2 - COMBINE FUNCTIONS FROM PHASE 1
//combines the functions from phase1 to produce a uniq set of chars in an obj and add int value of 0 each of them.
const uniqLetterCount = (string) => {
    return arrToObj(uniq(toLowerCaseArray(string)))
}






//////////////////////////////////////////////////////////////////
//PHASE FINAL - COMPARE ORIGINAL STRING AGAINST UNIQ-CHAR-OBJECT
//////////////////////////////////////////////////////////////////

const duplicateCount = (string) => {

    var letterCountObj = uniqLetterCount(string)
    var strArr = toLowerCaseArray(string)

    // console.log("Before iterate: ", letterCountObj)
    for (let z of strArr) {
        if (letterCountObj.hasOwnProperty(z)) {
            letterCountObj[z]++
        }
    }
    // console.log("After iterate: ", letterCountObj)

    return countTotal(letterCountObj)
}


//execute the function. 
duplicateCount(string)
