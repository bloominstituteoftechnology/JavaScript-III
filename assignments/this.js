/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The value of 'this' references the window Object.
* 2. Implict Binding - When the function is invoked 'this' referes to what is on the left of the dot. 
* 3. Explicit Binding - 
* 4. New Binding - 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function windowBinding(){
    console.log(this);
}
windowBinding();


// Principle 2
// code example for Implicit Binding
const implicitObj = {
    greeting: 'Hello',
    greetMe: function (name) {
        console.log(`${this.greeting} ${name}`);
    }
};
implicitObj.greetMe('Jurgen');

// Principle 3
// code example for New Binding


// Principle 4
// code example for Explicit Binding