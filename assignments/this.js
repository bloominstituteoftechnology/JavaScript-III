/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The default this assignment is our window. This essentially is all of JavaScript in one object. We do not want this to occur in our code as it generally shows that we've missed assigned our this keyword. 
* 2. Implicit Binding - Implicit, or automatic binding, occurs when we store functions in objects. When we invoke a function, the object preceded the .functionName() is our this keyword.   
* 3. Explicit Binding - Unlike implicit binding, explicit is not automatic, meaning we need to assign the this keyword. To this this we need to use a method, either .apply() or .call(). This will allow us to set the this value for our function depending on the parameters we pass to it. We can also use .bind() and hold this in a function but we'll learn more about this later.
* 4. New Keyword Binding - Is used when building new objects. Meaning when we make a constructor function and later invoke it when we create a new object, the new keyword sets this to be the object returned by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);
// Principle 2
// code example for Implicit Binding
const myObj = {
    test: "testing our this keyword",
    demo: function(){
        console.log(this.test); //Returns "testing our this keyword"
        console.log(this); // Returns our full object - myObj
    }
}
myObj.demo();
// Principle 3
// code example for New Binding
const me ={
    name:"Matt",
    location: "Brooklyn"
};

function howdy(){
    "use strict"
    console.log(`Howdy partner, my name is ${this.name} and I'm from ${this.location}!`);
}

howdy.call(me);

// Principle 4
// code example for Explicit Binding
function Person(attr){
    this.name = attr.name,
    this.height = attr.height,
    this.weight = attr.weight,
    this.health = function(){
        console.log(`Hi I'm ${this.name} and I'm ${this.height} inches tall and weigh ${this.weight} pounds`)
    }
}

const matt = new Person({
    name: "Matt",
    height: 69,
    weight: 185
});

matt.health();