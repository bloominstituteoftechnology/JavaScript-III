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

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding
function User(obj) {
    this.gender = obj.gender;
    this.height = obj.height;
};

let corey = new User({
    gender: 'Male',
    height: '6 feet',
})
console.log(corey);
// Principle 4

// code example for Explicit Binding