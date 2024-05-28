// Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.
function printSum(num){
    if(num==0){
        return 0;
    }
    return num+(printSum(num-1))
}
console.log(printSum(5))


// Write a recursive function that takes a number as an input and returns the factorial of that number.
function printFactorial(number){
    if(number==0){
        return 1;
    }else if(number<0){
        return number;
    }
    return number*(printFactorial(number-1));
}
console.log(printFactorial(1))

// Write a function that takes a string and returns if the string is a palindrome.
function checkString(word) {
    if (word.length <= 1) {
        return true;
    }
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
    return checkString(word.substring(1, word.length - 1));
}
console.log(checkString("moom"));  
console.log(checkString("moon"));


// Write a recursive function that takes a string and reverse the string.
function reverseString(meaning) {
    if (meaning.length <= 1) {
        return meaning;
    }
    return reverseString(meaning.substring(1)) + meaning[0];
}

console.log(reverseString('apple'));  

// Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
function arrayCapital(arr) {
    if (arr.length === 0) {
        return [];
    }
    let firstWordCapitalized = arr[0].toUpperCase();
    return [firstWordCapitalized].concat(arrayCapital(arr.slice(1)));
}
let array = ['mango', 'apple', 'banana', 'grapes', 'lichi'];
console.log(arrayCapital(array));

// Write a recursive function to find sum of range a-b numbers.
function addTwoNumbersBetweenAllNumbers(num1, num2) {
    if (num1 > num2) {
        return 0;
    }
    return num1 + addTwoNumbersBetweenAllNumbers(num1 + 1, num2);
}
console.log(addTwoNumbersBetweenAllNumbers(5, 8)); 



// Write a recursive function that takes a number ‘n’ and returns the nth number
//  of the Fibonacci number.

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let fib = fibonacci(n - 1) + fibonacci(n - 2);
    return fib;
}
for (let i = 0; i <= 7; i++) {
    console.log(fibonacci(i));
}

// Write a recursive function that takes a list of numbers as an input and
//  returns the product of all the numbers in the list.
function productOfList(numbers) {
    if (numbers.length === 0) {
        return 1;
    }
    return numbers[0] * productOfList(numbers.slice(1));
}
let numbers = [2, 3, 4, 5];
console.log("Product of numbers:", productOfList(numbers));




