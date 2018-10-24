/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Anything that is not attached to "this" will default to window binding.
* 2. the dot on the left of the object is "this"
* 3. uses .call and .apply methods to define "this"
* 4. returns a new function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function animalName(dogs) {
    console.log(this);
    return dog;
}
animalName("Siberian Husky")
// Principle 2

// code example for Implicit Binding
const mySlang = {
    greeting: 'Whats Up',
    sayHey: function(nickname) {
        console.log(`${this.greeting} my nickname is ${nickname}`);
        console.log(this)
    }
};
// Principle 3

// code example for New Binding
function Students(name) {
    this.student = 'Steve';
    this.teacher = teacher;
    this.greeting = function() {
        console.log(this.student + this.teacher);
        console.log(this);
    }
}

const benny = new Students('Amy');
benny.greeting();
// Principle 4

// code example for Explicit Binding
benny.greeting.call('Amy');
amy.greeting.apply(benny);