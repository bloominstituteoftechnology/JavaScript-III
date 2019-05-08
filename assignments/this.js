/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding = global scope (forest of trees) takes all of objects properties and displays them
* 2. implicit binding = points the scope to name of the object to the left of the . when you invoke it 
* 3. explicit binding = for functions to pass either indivisual arguments in by the .call, or takes chuncks of data in through an array through .apply, or can store 'this' for later use when called through thge .bind
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

 console.log(this);

// Principle 2

 const object = {
    name: "patrick",
    speak: function(){
        return `Hello, my name is ${this.name}!`;
    }
} 
console.log(object.speak());

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding