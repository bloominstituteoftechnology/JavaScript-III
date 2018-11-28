/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding 
* 2. implicit binding
* 3. explicit binding
* 4. new object binding
*
* write out a code example of each explanation above
*/

// Principle 1
// You will be seeing the window object and everything related to it.


// code example for Window Binding
// first we create a short object 
function checkWindow(){
    console.log(window);
}
checkWindow();

// Principle 2

// code example for Implicit Binding
const obj = {
    name : "jimmyJoe",
    breed:"pointer",
    color:"best color ever",
    info :function(){
        return `${this.name},I wish you were still here.why do ${this.breed} dogs die so early`
    }
}

console.log(obj.info());

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding