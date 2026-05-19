/*This turns into an undefined because primitives are not objects*/
let str = "Hello";

str.test = 5;

console.log(str.test);
/*
let a = +prompt("Enter a number", 0);
let b = +prompt("Enter a number", 0);
let sum = (a + b);
console.log(sum); */

console.log( Math.round(6.35 * 10) / 10);
//Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

/* mine:
function readNumber(){
    let flag = true;
    let a = 0;
    do{
        a = prompt("Enter a valid number", 0);
        if(a === "" || a === null) return null;
        a = +a;
        flag = Number.isFinite(a);
    }while(!flag)
    return a;
} */

/*function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`); */
//My mistake not doing a null check and putting a +prompt which automatically converts it
//to a number which destroys the whole point of checking in the first place
let str1 = "john"
str1[0].toUpperCase() + str1.slice(1) // John 
//mine
function CheckSpam(str){
    let flag = true;
    let str2 = str.toLowerCase();
    if(str2.includes('viagra'))
        return flag;
    else if(str2.includes('xxx'))
        return flag;
    else 
        return (!flag);
}
//solution, simplified
function checkSpam2(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
function Truncate(str, maxlength){
    if (str.length < maxlength)
        return str;
    let cutStr = str.slice(0,maxlength - 1);
    let elispeStr = cutStr + "...";
        return elispeStr;
}

function ExtractCurrencyValue(str){
    return +str.slice(1,(str.length)) //str.slice(1) works as well
}

let styles = ['Jazz','Blues'];
styles.push("Rock-n-Roll");
let stylesLength = (styles.length)
stylesLength=Math.round(stylesLength / 2) - 1
styles[stylesLength] = "Classics";
styles.shift();
styles.unshift("Rap","Reggae");

function sumInput(){
    let arr = [];
    let i = 0;
    let j = 0;
    let flag = true;
    let sum = 0;
    do{
        i = prompt("Enter a number", "")
        if(i === null || i === ""){
            console.log("Enter a valid number");
            flag = false;
        }
        else if (isFinite(i)){
            arr[j] = i;
            j++;
            sum += +i;}
    }while(flag)
    return sum;
}

function camelize(str){
    let arr = str.split('-'); // Splits my-long-word into array ['my','long','word']
    let capitalize = arr.map((item, index) => {
        //capitalizes the first letters of all array items except the first one
        if (index === 0) return item;
        else return item[0].toUpperCase() + item.slice(1); 
    });
    let newStr = capitalize.join(""); //joins ['my','Long','Word'] into myLongWord
    return newStr;
}

function filterRange(arr, a, b){
    let someArr = arr.filter(item => item >= a && item <= b);
    return someArr;
}

let decreasingArr = [5,2,1,-10,8];
decreasingArr.sort( (a, b) => b - a);
console.log(decreasingArr);

/*My example and mistake I did not use chaining and instead over complicated the function
function copySorted(arr){
    let arr2 = arr;
    let arr3 = arr.slice();
    arr2.sort();
    return arr3;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(arr);
console.log(sorted);*/
//Correc implementation
function copySorted(languages) {
    return languages.slice().sort();
}

let languages = ["HTML", "JavaScript", "CSS"];

let sortedLanguages = copySorted(languages);

console.log(sortedLanguages);
console.log(languages);

function Calculator(){
this.methods = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b
    };
    
this.calculate = function(str){
    let arr = str.split(' ');
    let operator = arr[1];
    let num1 = +arr[0];
    let num2 = +arr[2];
    return this.methods[operator](num1 , num2);
};
this.addmethod = function(name, func){
    this.methods[name] = func;
};
}
let calc = new Calculator;
console.log (calc.calculate("3 + 7"));
console.log (calc.addmethod("*", (a,b) => a * b));
console.log (calc.calculate("3 * 7"));
//Map is an assembly line it takes every item in the array runs it through a function
//and puts the result in the new array
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names ); // John, Pete, Mary

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john, pete, mary ];
let usersMapped = users1.map(users1 => ({
    fullName: users1.name + " " + users1.surname,
    id: users1.id
}))
/*;
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName );

function sortByAge(users){
    users.sort((a,b) => a.age - b.age);
    
}
let john3 = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
//Anytime summing, counting, or collapsing an array into one value use reduce
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // 28

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(salaries){
    let i = 0;
    for (let value of Object.values(salaries)){
        i += value;
    }
    return i;
}
console.log( sumSalaries(salaries) ); // 650

//Destruction task 1

let user10 = { name: "John", years: 30 };

// your code to the left side:
// ... = user
let {name, years: age, isAdmin = false} = user10;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false
//Closure tasks
// filter's callback only receives one argument (the current element)

// to pass extra configuration, use a function that returns a function

// the returned function "closes over" the extra values — that's a closure

let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b){
  return function(x){
    if(x >= a && x <= b)
    return true;
    else
      return false;
  }
}
function inArray(a){
  return function(x){
    if (a.includes(x))
      return true;
    else
      return false;
  }
}
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

//We use closures to pass fieldname and by passing fieldname we can use our own
//function to expand the parameters

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.sort(byField('age'));

function byField(fieldName){
  return function (a, b){
      return a[fieldName] > b[fieldName] ? 1 : -1;
}
}