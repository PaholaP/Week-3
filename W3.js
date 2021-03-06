// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

console.log(ages[ages.length-1]-ages[0]);

// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(22);
console.log(ages[ages.length-1] - ages[0]);

// Use a loop to iterate through the array and calculate the average age. Print the result to the console.

var i,sum=0;
for(i = 0; i < ages.length; i++)
{
    sum =sum +ages[i];
}
console.log)sum / ages.length);

// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
 sum = 0;
for (i =0; i < names.length; i ++) {
    sum = sum + names[i].length;
}
console.log(sum / names.length);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

var con = names[0];
for(i=1; i < names.length; i++)
{
    con = con.concat(" " , names[i]);
}
console.log("Concatenated names :",con);

// How do you access the last element of any array?
//Answer: Storing lengths of each names in nameLengths Array
//Ex:

let nameLengths = [];
for (i = 0; i < names.length; i++) {
    nameLengths[i] = names [i].length;
}

// How do you access the first element of any array?
// Answer: Calculating sum of all elemnts in the nameLengths array

sum = 0;
for (i = 0; i < nameLengths.length; i++) {
 sum = sum + nameLengths[i];
}
console.log(sum);
console.log("/n/n/n");

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// // namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let namesArray = ["Sam", "Tom", "Tim", "Sally", "Buck", "Bob"];
let namesLengths = [];

for (var i = 0; i < namesArray.length; i++)
namesLengths.push(namesArray[i].length);

console.log('namesArray: ', namesArray);
console.log('namesLengths: ', namesLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let totalLengths = 0;

for(var i = 0; i < nameLengths.length; i++)
totalLengths += nameLengths [i];

console.log('Sum of all elements: ', totalLengths);
    
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function concat_n_times(word, n) {
    var con = word;
    for (i = 1; i <= n; i++) { 
        con = con.concat(word);
    } return con;
}

console.log(concat_n_times("Hello ", 3));
console.log("\n\n\n");

// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName,lastName) {
    return firstName.concat("", lastName) 
    }
console.log("Full Name: ",fullName("Lola " ,"Palacios"));

console.log("\n\n\n")

console.log(concat_n_times("Hello ", 3));
console.log("\n\n\n");

// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName,lastName) {
    return firstName.concat("", lastName) 
    }
console.log("Full Name: ",fullName("Lola " ,"Palacios"));

console.log("\n\n\n");
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isTotalGreaterThan100(arr) {
    sum = 0;
    for (i =0; i <arr.length; i++) {
        sum = sum + arr[i];
        if(sum > 100) {
            return true;
        } else {
            return false;
        }
    }
}

function compare_average(arr1,arr2) {
    if (average (arr) > average(arr2)) {

    }
}


// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average(arr) {
    sum = 0;
    for(i = 0; i <arr.length; i++) {
        sum = sum + arr[i];
    }
    return (sum /arr.length);
}


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compare_average(arr1,arr2) {
 if (average(arr1) > average(arr2)) {
    return true;
} else  {
     return false;

}
}

var myArr = [12, 24, 36, 48, 60 ]
var myArr2 = [24, 36, 12]

console.log(isTotalGreaterThan100(myArr));
console.log(average(myArr));
console.log(compare_average(myArr,myArr2));
console.log("\n\n\n");

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.5) {
        return true;
    } else {
        return false;
    }
}
     var a = willBuyDrink(true, 12);
    console.log(a)

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("baby")); 
