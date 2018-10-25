/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding
 * 2. Implicit Binding
 * 3. Explicit Binding
 * 4. New Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
const height = function () {
    return this.innerHeight;
}
// Refresh the console @ different screen heights to see the value change!!!!!!
console.log(height());

// Principle 2

// code example for Implicit Binding
const greeting = {
    gretting: "Morning",
    goodMorning() {
        console.log(`Good, ${this.greeting}! Tevvin`);
    }
};

greeting.goodMorning();

// Principle 3

// code example for New Binding
function newPerson(buddy) {
    this.name = buddy.name;
    this.age = buddy.age;
    this.speak = function () {
        return `What's up my name is ${this.name}`;
    };
}
const friend = newPerson({
    name: "Chris",
    age: 22
});
console.log(this.name);

// Principle 4

// code example for Explicit Binding