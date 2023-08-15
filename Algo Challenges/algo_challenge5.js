/* 
  Consult the Oracle

  Given an array of wise answers, randomly choose a response and return it
*/

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

/**
* Given an array of wise answers, randomly choose a response and return it
* @param {Array<any>} arr
* @returns {string} the randomly chosen oracle response 
*/

function consultTheOracle(arr) {
    var item = arr[Math.ceil(Math.random()*arr.length)];
    return item;
}
console.log(consultTheOracle(lifesAnswers));

/* 
From zoom interview with student in year 2020

Given one array,
return a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
const expected2 = ["a", "a"];

const arr3 = [];
const expected3 = [];

/**
* Creates a new array that is a concatenation of the given array with itself.
* - Time: O(?).
* - Space: O(?).
* @param {Array<any>} items
* @returns {Array<any>} The resulting concatenation of the given arr with
*    itself.
*/
function concatArrWithSelf(items) {
     var newarray = [];
     for (var i = 0; i< items.length; i++) {
            newarray.push(items[i]);
    }
     for (var i = 0; i < items.length; i++) {
            newarray.push(items[i]);
    }
    return newarray
}

// Tests
var result1 = concatArrWithSelf(arr1);
console.log(result1, "should be", expected1);

var result2 = concatArrWithSelf(arr2);
console.log(result2, "should be", expected2);

var result3 = concatArrWithSelf(arr3);
console.log(result3, "should be", expected3);