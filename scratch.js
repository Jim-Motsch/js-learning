console.log("Hello");
/* variables to create a variable in js use let*/
let message;
message = "poop";
console.log(message)
/* We can copy data from multiple variables */
let output = "Hello World";
message = output;
console.log(output); // Hello World
console.log(message); // Hello World
/* Constants */
const RED_COLOR = "F#0";
//RED_COLOR = orange this would throw console.error();
let red = RED_COLOR;
console.log(red);
/*1. Declare two variables: admin and name.
  2. Assign the value "John" to name.
  3. Copy the value from name to admin.
  4. Show the value of admin using alert (must output “John”).*/
let admin;
let name;
name = "John";
admin = name;
console.log(name);
/* Back ticks allow us to wrap text */
let newName = "John"
console.log(`Hello ${newName}!`); //Hello John
console.log(`We can add${1 + 2}`); //We can add 3

let name2 = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name2"}` ); // hello name2

// the expression is a variable, embed it
alert( `hello ${name2}` ); // hello Ilya

let apples = "2"
let oranges = "3"
console.log(apples + oranges); //23
console.log(+apples + +oranges); //5

let a = 1, b = 1
console.log( ++a ); // 2
console.log( b++ ); // 1

console.log( a ); //2
console.log( b ); //2
/*Unary operator converts strings to numbers by putting + at the beginning
for example +"1" + +"2" = 3 */

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

5 > 4; //true
"apple" > "pineapple" //a comes before p so it is true
"2" > "12" //because they are strings 2 is larger than 1

/* || will find the first truthy value and return it*/
console.log("" || 0 || 1); //will return 1 
console.log(undefined || null || 0);

let age;
if (age >= 14 && age <= 90);
//Write an if condition to check that age is not between 14 and 90 inclusively
if (!(age >= 14 && age <= 90));

let userJ = "John"
console.log(userJ ?? "Anonymous") //John (UserJ is not undefined)

let firstname = null;
let lastname = null;
let nickName = "Supercoder"
console.log(firstname ?? lastname ?? nickName ?? "Anonymous"); //Supercoder
/* *|| returns the first truhty value ?? returns the first defined value */

/*A label is an identifier with the for loop labelName : for(..) */
let i = 0
while (i < 3){
        console.log( `number ${i}!`)
        i++;
}

switch (a){
    case 0:
        console.log(0)
        break;
    case 1:
        console.log(1)
        break;
    case 2:
    case 3:
        console.log('2 , 3')
        break;
}