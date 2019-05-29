/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: When "this" is mentioned in the global scope, it reffers to the Window, or console Object.
* 2. Implicit Binding: "this" applies to whatever you used (left of the dot) to call the function 
* 3. New Binding: "this" reffers to the object being created with the constructor function
* 4. Explicit Binding: using Call, apply, and bind, you pass in what "this" will reffer to as an argument.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var newFunc = function(){
    console.log(this.age)
}
var me = {
    age:25
};
newFunc(); //usually undefined since it's pointing to the console/Window

// Principle 2

// code example for Implicit Binding
var classList = {
    one: "sage",
    two: "skye",
    three: "noah",
    listClass: function(){
        console.log("Students: " + this.one + "," + this.two + "," + this.three); // this reffers to the obj it is in
    }
};
classList.listClass();


// Principle 3

// code example for New Binding

var Shape = function(color, name, sides){
    this.color = color; //this reffers to the color of the new shape: square
    this.name = name;
    this.sides = sides;
};
var square = new Shape('blue', 'square', 4);
console.log(square);

// Principle 4

// code example for Explicit Binding

var sayName = function(){
    console.log('My name is ' + this.name); //this reffers to the var that was called with the func
};
var john = {
    name: "John",
    age: 25
};
sayName.call(john);