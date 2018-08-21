/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window
    By default, the THIS keyword binds to the window, which is it's parent, and where all javascript is run.
* 2. Implicit
    When the THIS keyword is inside of an object, it will refer to that object
* 3. New
    THIS will refer to an object created by a constructor function
* 4. Explicit
    You explicitly set what THIS refers to by using .call/.apply/.bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const sayHi = {
    name: 'Brandon',
    sayHi: function(name) {
        console.log(`${this.name} says hi!`)
    }
};

// Principle 3

// code example for New Binding
function Animal(species) {
    this.species = species;
    this.sound = function () {
        console.log(`${this.species} says WOOF!`);
    };
}
const Dog = new Animal('Dog');

Dog.sound();

// Principle 4
// code example for Explicit Binding

const Me = {
    name: 'Brandon'
}

function favoriteFoods(food1, food2, food3) {
    console.log(`${this.name} really likes ${food1}, ${food2}, and ${food3}`)
}

favoriteFoods.call(Me, 'Tacos', 'Pizza', 'Salmon');
