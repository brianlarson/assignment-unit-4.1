console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
    return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello, {name}!"', helloName('Dolly'))


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log('Test - should add two integers and give result', addNumbers(21, 14));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
    return firstNumber * secondNumber * thirdNumber;
}
console.log('Test - should multiple three integers and give result', multiplyThree(21, 7, 14));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('Test - test for positive number and return true', isPositive(21));
console.log('Test - test for negative number and return false', isPositive(-26));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let foods = ['Burgers', 'Pizza', 'Italian', 'Sushi'];
function getLast(array) {
    return array[array.length - 1];
}
console.log('Test - should retrieve last item in array', getLast(foods));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let cars = ['Honda', 'Toyota', 'Tesla', 'Ford', 'Chevy'];
function find(value, array) {
    for (const item of array) {
        if (item === value) {
            return true;
        }
    }
    return false;
}
console.log('Test - checks whether or not value is in array', find('Honda', cars));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
let cohort = 'Saguaro Cohort';
function isFirstLetter(letter, string) {
    if (letter == string[0]) {
        return true;
    } else {
        return false;
    }
}
console.log('Test - checks if letter is first letter in string var', isFirstLetter('S', cohort));


// 9. Function to return the sum of all numbers in an array
let numbers = [21, 28, 14, 7, 1977, 721];
function sumAll(array) {
    let sum = 0;
    // TODO: loop to add items
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    // TODO: return the sum
    return sum;
}
console.log('Test - numbers array is', numbers);
console.log('       calculate the sum of all numbers', sumAll(numbers));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const inputArray = [21, 28, 0, 14, -7, 124, 0.23, -4];
function allPositive(array) {
    let positiveNumbers = [];
    for (const value of array) {
        if (value > 0) {
            positiveNumbers.push(value);
        }
    }
    return positiveNumbers;
}
console.log('Test - input array is', inputArray);
console.log('       remove negative numbers and return new array', allPositive(inputArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
