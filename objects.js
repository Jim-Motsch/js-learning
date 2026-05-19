let user1 = new Object(); // "object constructor syntax"
let user = {            //an object
        name: "John",   //by key name stored value "John"
        age: 30,         //by key "age" store value 30
        "likes birds": true //multiword property name must be quoted
}; // "object literal syntax"

//Property values are accessable using dot notation
console.log( user.name ); //John
console.log(user["name"]);
console.log( user.age ); //30 
/*In javascript each object is its own bag of properties you can add or
delete properties on any individual object without affecting others.
Objects in javascript are individual instances not classes*/
user.email = "john@gmail.com"
/*We use [] for more complex tasks and . for simple tasks*/
let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 //bag.appleComputers = 5
}

/*The for in loop*/
let user2 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user2) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user2[key] ); // John, 30, true
}

/*variables stored in objects in js are passed by reference*/

let user3 = {name: "John" };
let admin = user; //copy the reference
//if two objects point to the same address they are equal

//Object assign syntax Object.assign(dest, ... sources)
let user4 = {name: "John"};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};
//copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissiosn1, permission2);

//now user = { name: "John", canView: true, canEdit: true }
console.log(user.name); //John
console.log(user.canView); //true 
console.log(user.canEdit); //true
//Because user.size is an object and not a primative its not enough to just copy
//clone.sizes = user.sizes this does a shallow copy
let user5 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user5);

//alert( user5.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user5.sizes.width = 60;    // change a property from one place
//alert(clone.sizes.width); // 60, get the result from the other one

// structuredClone() — deep clones an object including all nested objects
// use when you need a fully independent copy

let clone2 = structuredClone(user6);

// shallow copy (Object.assign) — nested objects are still shared
let shallowClone = Object.assign({}, user6);

// primitives are copied by value — objects are copied by reference
// this is why shallow copies break with nested objects

/*method example*/
let user7 = {
    name: "John",
    age: 30,

    sayHi() {
    console.log(this.name);
    }
};

user.sayHi();

let user8 = {name : "John"};
let admin = {name : "Admin"};

function sayHi(){
    console.log( this.name )
}

user8.f = sayHi;
admin.f = sayHi;

user8.f(); // John (this == user)
admin.f(); // Adnub (this == admin)

admin['f']();

/*returning just this allows for method chaining*/