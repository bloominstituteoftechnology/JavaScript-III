/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - This is binding done to connect to the main window of the javascript language. You will get all of the default variables and functions found with the language by tieing this to the console value.
* 2. Implicit Binding - Is binding where the this keyword ties to the object before the dot.
* 3. New Binding - this a type of binding, which is the creation of a new object which has the properties of the object that is to the left hand side of the equal sign
* 4. Explicit Binding - this is when you have a function call a this. You are invoking this through a function call
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

function conceptObject(conceptAttribute){

    this.value = conceptAttribute.value; 
}

conceptObject.prototype.speak = function() {
    
    return(this.value);
}

// Principle 3

// code example for New Binding

const testNew = new conceptObject({
    value: 15
});

// Principle 4

// code example for Explicit Binding
console.log(testNew.speak());