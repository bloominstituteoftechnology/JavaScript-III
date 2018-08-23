/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function Welcome(){
    return this;
}

// Principle 2

// code example for Implicit Binding
const obj = {
    name: "Dan",
    position: "Instructor",
    speak: function(){
        return `${this.name} says hi.`
    }
}

// Principle 3

// code example for New Binding
function Vehicle(obj){
    this.model = obj.model;
    this.year = obj.year;
}

const BMW = new Vehicle({model: "X5", year: 2019});

// Principle 4

// code example for Explicit Binding