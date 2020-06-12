//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = ['3', '9', '23', '64', '2', '8', '28', '93']; //my array of ages

//1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers 
//     to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
let sub = Number(ages[ages.length - 1]) - Number(ages[0]);
console.log(sub);

function myFunction(array) {
    return Number(array[array.length - 1]) - Number(array[0])
}

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push('25')

console.log(myFunction(ages));

//1c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let amountOfAges = 0;
for (let i = 0; i < ages.length; i++ ) {
    amountOfAges += Number(ages[i]);
}

let theAverageAge = amountOfAges / ages.length;

console.log(theAverageAge);

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let lengths = names.map(function(element) {
    return element.length;
})
console.log(lengths);

let eachString = 0;
for (let i = 0; i < names.length; i++ ) {
    eachString += Number(names[i].length);
}

let avgLength = eachString / names.length;
console.log(avgLength);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let namesConcatenated = ''
for (let i = 0; i < names.length; i++) {
    namesConcatenated += names[i] + ' ';
}
console.log(namesConcatenated);

//3. How do you access the last element of any array?
// You access the last element of an array by using [array.length - 1]

//4. How do you access the first element of any array?
// by using array[0]

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to 
// the nameLengths array.

let namesLengths = ''

for (let i = 0; i < names.length; i++) {
    namesLengths += names[i].length;
}
console.log(namesLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
    let total = 0;
    for (let i = 0; i <= namesLengths.length; i++) {
        total += namesLengths.length;
    }
    console.log(total);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function twoPara(word, n) {
    return word.repeat (n);
}

let result = twoPara('woof', 4);
console.log(result);

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the 
//   last name separated by a space).
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

let fullName = getFullName('Dustin', 'Schomburg');
console.log(fullName);

//9. write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let arrayOfNum = [12, 21, 94];

let sum = arrayOfNum.reduce(function(a, b) {
    return a + b;
},0);

if (sum > 100) {
    console.log(true);
} else {
    alert('Sum is not greater than 100')
};

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let eachNum = 0;
for (let i = 0; i < arrayOfNum.length; i++ ) {
    eachNum += arrayOfNum[i];
}

let avgNum = eachNum / arrayOfNum.length;
console.log(avgNum);

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater 
// than the average of the elements in the second array.
let arr1 = [25, 30, 40, 26, 32];
let arr2 = [25, 31, 39, 29, 24];

// let arr1Avg = 0;
// for (let i = 0; i < arr1.length; i++) {
//     arr1Avg += arr1[i];
// }
// let arr1AvgNum = arr1Avg / arr1.length;

// let arr2Avg = 0;
// for (let i = 0; i < arr2.length; i++) {
//     arr2Avg += arr2[i];
// }
// let arr2AvgNum = arr2Avg / arr2.length;

// if (arr1AvgNum > arr2AvgNum) {
//     console.log(true)
// } else {
//     alert('The average of arr2 is greater than the average of arr1')
// };

let sumOfArr1 = arr1.reduce(function(a, b) {
    return a + b;
},0);
let sumOfArr2 = arr2.reduce(function(a, b) {
    return a + b;
},0);

if (sumOfArr1 > sumOfArr2) {
    console.log(true);
} else {
    alert('The average of arr2 is greater than the average of arr1')
}

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and
// if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 4923.62;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        alert ('The conditions are not met.')
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// make an array change into an object
let arrObject = ['Dustin', 'SChomburg', 25, 'Male', 'Software Developer', 'Available'];

let exampleReturn = {
    1: 'Dustin',
    2: 'Schomburg', 
    3: 25, 
    4: 'Male', 
    5: 'Software Developer',
    6: 'Available'
}
function arrayToObject(argArray) {
    var returnObject = {};
    for(let i = 0; i <= argArray.length - 1; i++) {
        returnObject[i] = argArray[i]
    }
    return returnObject;
}
console.log(arrayToObject(arrObject));


// What the function does
// I looped through an array to build an object.
// I thought this would be a good example of data transformation tactics. 