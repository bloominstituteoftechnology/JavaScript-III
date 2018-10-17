/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - for building methods
* 2. Explicit Binding - for functions
* 3. 'new' Keyword Binding - for creating new objects
* 4. Window Binding - for us not to use, but to be aware
            of what happens when this is used without one of 
            the above 3 methods
*
* write out a code example of each explanation above
*/
//-------------------------------------------------------------------

// Principle 1
// code example for Window Binding
function sayThis(){
    // "use strict" //will have undefined bind instead of window
    console.log(this);
}
sayThis();
//-------------------------------------------------------------------

// Principle 2
// code example for Implicit Binding
const myObject = {
    name: "Addie",
    greeting: "Hi, my name is ",
    speak: function(){
        console.log(this.greeting + this.name);
    }
}
myObject.speak();
//-------------------------------------------------------------------

// Principle 3
// code example for New Binding
let Food = function(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
}
let banana = new Food("Banana","Fruit","Yellow");
let zucchini = new Food("Zucchini","Vegetable","Green");
console.log(banana);
console.log(zucchini);
//-------------------------------------------------------------------

// Principle 4
// code example for Explicit Binding
let sayName = function(){
    console.log(this.name);
}
let ben = {
    name: 'Benjamin',
    age: 40
}
sayName.call(ben);
//-------------------------------------------------------------------