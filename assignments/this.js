/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding means that the Object "this" represents is the window itself
* 2. Implicit Binding: when calling a function, the left to the dot "." is the value of "this"
* 3. New Binding: use the "new" keyword to invoke the function to a new object
* 4. Explicit Binding: Using .call or .apply to pass a "this" value to a function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const Hi = function () {
    console.log(this.name);
}

// Principle 2
// code example for Implicit Binding
const car = {
    make: 'Porsche',
    sayMake: function () {
        console.log(`${this.make} is dope`)
    }
}
car.sayMake();

// Principle 3
// code example for New Binding
const User = function (name) {
    this.name = name;
}
const louis = new User('Louis');
// Principle 4
// code example for Explicit Binding
const Animal = function (kind, age) {
    console.log(`Hey I'm a ${this.age}-year-old ${this.kind}`);
}
const Dog = {
    kind: 'dog',
    age: 5
}

Animal.call(Dog);