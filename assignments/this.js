/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window Binding - when the function or object's scope is the window or global object. Using `this` will return the window object
* 2. implicit Binding - when the function's scope is an implicit object and using `this` in the function, gives us access to the object's attributes
* 3. new Binding - By setting up a constructor and using the new keyword to create an object, the new object and any function prototypes of the constructors have access to `this`
* 4. explicit Binding - if the function's scope is global and the object's scope is global. You can explicity bind the function to the object and thus change how `this is used from global to object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayHello1 = (name) => `Hello ${this.name}`

// const sayHello3 = function(name){
//     return `Hello ${this.name}`;
// }

// function sayHello2(name){
//     return `Hello ${this.name}`;
// }

console.log(sayHello1("vim"))



// Principle 2

// code example for Implicit Binding

// For some reason the ES6 function defintion doesn't work? Why is that?
// myObj = {
//     "name":"Vim",
//     "age":40,
//     "speak" : (() => `Hello ${this.name}`)
// }

myObj = {
    "name":"Vim",
    "age":40,
    "speak" : (function(){
        return `Hello ${this.name}`;
    })
}
console.log(myObj.speak())




// Principle 3

// code example for New Binding

function Person(attr){
    this.name = attr.name;
    this.age = attr.age
}

const vim = new Person ({
    "name": "Vim",
    "age":40
})

console.log(vim.age)


// Principle 4

// code example for Explicit Binding

function letsRide(mtn){
    return `${mtn} is so awesome right, ${this.name} ?`;
}

const friend = {
    "name": "Burton",
    "age" : 100
}

console.log(letsRide.call(friend, "Telluride"))


