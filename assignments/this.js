/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
Window binding or the default mode of 'this' applies if there no other rules of use of it. This defaults the 'this' keyword to the window object. However, in strict mode it would be undefined.

* 2. 

Implicit Binding is the most commonly used. This is when a function is invoked using dot.notation and it is on the let of the dot. This applies to objects with methods.
* 3. 

Explicit binding is cleally stated in call, apply, and bind functons. Call functions will work immeidiately in functions. Call arguments are passed one at a time.

Apply will also invoke the function right away. Apply arguments are passed into an array.

bind arguments are passed one at a time, but the function is not invoked at frst. It produces a new function that we can call later.

All of these uses let us say what exactly the "this" keyword is in any function.
* 4. 

New binding creates a new object and then 'this' is used to point at it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

//var sayFish = function(){
 //   console.log(this.fish)
//};

//var fish = {
//    species: tuna
//};

//sayFish();




// Principle 2

// code example for Implicit Binding

//var me = {
//    name: "Adam",
//    age: "40",
//    sayName: function(){
 //       console.log(this.name)
 //   }
//};

//me.sayName();

var animal = {
    species: "tiger",
    color: "orange",
    saySpecies: function(){
        console.log(this.species)
    }
};

animal.saySpecies();




// Principle 3



function food(){
console.log(this.size);
}

let cake = {
kind: 'Chocolate',
size: 'big'
}

Sweets = food.bind(cake);

Sweets(); 



// Principle 4

// code example for Explicit Binding


var sayName = function(){
    console.log("My name is " + this.name);
}

const Adam = {
    name: "Adam",
    age: "40",
};

sayName.call(Adam);


