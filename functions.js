/*Function Declaration*/
function showMessage(){
    console.log("Hello");
}

showMessage();
showMessage();

let userName = "Bob";
function showNames(){ 
    userName = "John"; //if let was used before username it would be local to the function
    console.log("Hello " + userName);
}

console.log(userName); //Bob before the function call

showNames();

console.log(userName); //John after the function call

function checkAge(age){
    return(age > 18) ? true : confirm('Did your parents allow you?');
}
function checkAge(age){
    return (age > 18) || confirm('Did your parents allow you');
}

function pow(x,n){
    return (x**n);
}

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}
/*function declarations can be called anywhere but
 function expressions must be declared before being called*/

/*There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this:*/
//let func = (arg1, arg2, ..., argN) => expression;

//If there are no arguments parentheses are empty but they must be present:
let sayHi = () => console.log("Hello!");
sayHi();

let age = 18;

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

function ask(question, yes, no) {
    confirm(question) ?  yes : no;
};

ask(
  "Do you agree?",
  () => alert("You agreed.") ,
  () => alert("You canceled the execution.")
);