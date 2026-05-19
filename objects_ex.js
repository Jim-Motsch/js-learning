let user = {};
user.name = "John";
user.surmane = "Smith";
user.name = "Pete";
delete user.name;

//Write the function isEmpty(obj) which returns true 
// if the object has no properties, false otherwise.
/*function isEmpty(obj){
    (obj[undefined]) ? true : false;
}
let schedule = {}; 
My Mistake I tried to use undefined which is literally looking for undefined and
also did not have a return statement*/

function isEmpty(obj){
    for(let key in obj){
        //uses for in loop to check if there are any keys at all in the obj and as
        // a result would return false
        return false;
    }
    return true;
}
/*My mistake: forgot to set let sum = 0; instead I just put let sum which would 
concatinate the strings together instead of the integers, also forgot to use bracket
notation on salaries[key] I just put sum += key */
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
/*
let calculator = {
    read(){ this.a = +prompt('Enter first value', 0)
            this.b = +prompt('Enter second value', 0)},
    sum(){ {return (this.a + this.b)}},
    mul(){ {return (this.a * this.b)}},
}; */

function Calculator(){
    this.a = 5,
    this.b = 3,
    this.sum = function(){ return (this.a + this.b)};
    this.mul = function(){ return (this.a * this.b)};
}

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){ this.value += +prompt('Enter value', 0)
    }
}
//We use ?. when something does not exist but it is okay