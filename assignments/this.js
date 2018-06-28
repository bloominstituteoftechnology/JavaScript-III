/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The value of 'this' references the window Object. Default option when nothing declared to left of dot. 
* 2. Implict Binding - When the function is invoked 'this' referes to what is on the left of the dot. 
* 3. New Binding - Used with constructor functions. Defines 'this' as the new instance created from the constructor.  
* 4. Explicit Binding - Whenever .call/.apply/.bind are called. These methods explicity tell you what the 'this' keyword will be in a given function. 
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
function implicitObj() {
    greeting: 'Hello',
    greetMe: function (name) {
        console.log(`${this.greeting} ${name}`);
    }
};
implicitObj.greetMe('Jurgen');

// Principle 3
// code example for New Binding
function Student(name, class, major) {
    this.name = name; 
    this.class = class;
    this.major = major;
};
let jurgen = new Student('Jurgen', 'CS12', 'Engineering');


// Principle 4
// code example for Explicit Binding
function explicitBinding() {
    console.log(`${this.name}`);
}
let jurgen = {
    name: 'Jurgen'
}
explicitBinding.call(jurgen);

