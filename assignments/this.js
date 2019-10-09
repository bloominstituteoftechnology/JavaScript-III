/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding     - When in the global scope, the value of “this” will be the window/console Object
* 2. Implicit Binding   - Whenever a function is called by a preceding dot, the object before that dot is this
* 3. New Binding        - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function
* 4. Explicit Binding   - Whenever JavaScript’s call or apply method is used, this is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let theGuy = {
    name: 'Guy',
    isAction: function (action) {
        console.log(`${this.name} is ${action}.`)
    }
};
theGuy.isAction('walking');

// Principle 3
// code example for New Binding
function Me(attr) {
    this.name = attr.name;
    this.whoIam = function () {
        console.log(`${this.name}'s job is hard.`);
    };
}
let mike = new Me({
    name: 'Mikey',
});
let john = new Me({
    name: 'John',
});
mike.whoIam();
john.whoIam();

// Principle 4
// code example for Explicit Binding
john.whoIam.call(mike);
mike.whoIam.call(john);