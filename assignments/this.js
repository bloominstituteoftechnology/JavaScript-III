/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This keyword binds to the global scope of an window/object
* 2. Implicit binding to the object left of the "."
* 3. "new" is a keyword used to create a constructer, this will point to that object. 
* 4. Explicit binding makes use of .bind, .call, .apply which .this is defined. 

* write out a code example of each explanation above
*/

// Principle 1
function stranger(name) {
    console.log(this);
    return name;
}
stranger("Ricardo");
// code example for Window Binding


// Principle 2
const thisObj = {
    color: 'red',
    startRace: function (name) {
        console.log(`The light is ${this.color}, ${name}`);
        console.log(this);
    }
};
thisObj.startRace('Not Yet!');
// code example for Implicit Binding

// Principle 3
function Fighter(name) {
    this.arms = '22 inch arms';
    this.height = '6ft tall';
    this.stats = function () {
        console.log(this.arms + " " + this.height);
        console.log(this);
    };
}
const Tyson = new Fighter('Mike Tyson');
const Holifield = new Fighter('Evander Holyfield');
Tyson.stats();
Holifield.stats();
// code example for New Binding

// Principle 4
Holifield.stats.call(Tyson); 
Tyson.stats.apply(Holifield);
// code example for Explicit Binding