//There are seven primitive types: string, number, bigint, boolean, symbol, null & undefined
//Primitives can provide methods like string .toUpperCase which creates an object then
//destroys it
let billion = 1e9; // 1 billion, literally 1 and 9 zeroes
let mcs = 1e-6; // five zeroes to the left from 1

let sum = 0.1 + 0.2;
console.log( +sum.toFixed(2) ); // 0.3

/* Two special numeric values Infinity -Infinity and NAN, represents an error they
belong to the type number, but are not normal numbers */
console.log( isNaN(NaN)); //true
console.log( isNaN("str")); //true

console.log( isFinite("15")); //true
console.log( isFinite("str")); // false, because a special value: NaN
console.log( isFinite(Infinity)) // false, because a special value: Infinity

//parseInt and parseFloat are used to convert vlaues 100px or 12pt in CSS
console.log( parseInt('100px')); // 100
console.log( parseFloat('12.5em')); //12.5

//Back ticks allow us to write strings that last multiple lines
let poop = `truth nuke: 
I
Have 
to 
poop
`;

console.log('I\'m shittin');
console.log('My\n'.length); //3

let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.at(0) ); // H

// the last character
console.log( str[str.length - 1] ); // o
console.log( str.at(-1) );

//There are two syntaxes for creating an empty array
let arr = new Array();
let arr1 = [];

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//We can replace an element
fruits[2] = "Pear";
//We can add an element
fruits[3] = "Lemon";

//An array can store a mix of values
let arr2 = ['Apple', {name : 'John' }, true, function() { console.log('hello')}];
console.log(fruits.at(-1)); //Plum
console.log(fruits.shift()) // Removes apple, aka first element
fruits.unshift('Apple') //Adds apple to the front of the array

//arr.splice syntax arr.splice(start[, deleteCount, elem1, ..., elemN])

let arr3 =["I", "study", "JavaScript"]

let removed = arr.splice(1,1); // from index 1 remove 1 element

console.log (arr3); // ["I", "JavaScript"]

let arr4 = ["I", "study", "JavaScript"];
arr4.splice(0, 3, "Let's", "dance");
console.log(arr4);

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John

//.map runs a function on every element and returns a new array of the results
//In this example it takes a .length on all of the strings
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

/*A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and 
inserts items.
slice(start, end) – creates a new array, copies elements from index start till 
end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds 
items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and 
return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values 
that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling 
func for each element and passing an intermediate result between the calls.*/

/*For plain objects, the following methods are available:
* object.keys(obj) - returns an array of keys
* object.values(obk) - returns an array of values
* object.entries(obj) - returns an array of [key, value] pairs.*/

let user9 = {
    name: "John",
    age : 30
};
//object.keys(user) = ["name", "age"]
//object.values(user) = ["John", 30]
//object.entries(user) = [ ["name","John"],["age,30"]]

for(let value of Object.values(user)){
    console.log(value); // John, then 30
}

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat); //8

//Destructing
//Array Destructing
let myArr = ['John', 'Smith']

let [firstName, surname] = myArr;

console.log(firstName); //John
console.log(surname); //Smith