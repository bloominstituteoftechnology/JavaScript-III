/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit = Implied, this refers to what is to the left of the dot.
* 2. Explicit = When using .call, .bind or .apply to tells what this is referring to 
* 3. New = The constructor keyword that creates an instance of this based on a Class
* 4. Window = If nothing else is bound to the this, it keeps bubbling out until it hits the window object
*
* write out a code example of each explanation above
*/

// Principle 1

function sample(){
  console.log(this);
};

// Principle 2

function Example(name){
    return `${this.name}`;
};

// Principle 3

const idea = new Example({
    name = "Good",
});

// Principle 4

Example.call(this, name);