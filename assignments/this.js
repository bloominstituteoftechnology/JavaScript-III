/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If you use .this in the window binding, you are seeing the objects of the entire window.
* 2. Implicit, or automatic, binding will automatically bind to the parent object.
* 3. When you build a function constructor and then when you use "new," that will bind it to whatever constructor you assign it to.
* 4. Explicit, you have to manually bind it to a specific parent.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
//console.log(this);

// Principle 2

// code example for Implicit Binding
const superhero = {
    name: 'superman',
    power: 'flight',
    introduce: function () {
        console.log(`Hello, I'm ${this.name}!`);
    }
}
superhero.introduce();

// Principle 3

// code example for New Binding
function Person (person, age) {
    this.name = person;
    this.age = age;
    this.greeting = 'Hello';
    this.intro = function () {
        console.log(`${this.greeting}, my name is ${this.name} and I am ${this.age} years old!`);
    }
}
const john = new Person('John', 25);
john.intro();


// Principle 4

// code example for Explicit Binding
const friend = {
    name: 'Henry'
}
const hobbies = ['play soccer', 'read', 'hike'];

function introduce(hobbies1, hobbies2, hobbies3){
    console.log(`Hi, my name is ${this.name} and I like to ${hobbies1}, ${hobbies2}, and ${hobbies3}`);
}

introduce.call(friend, ...hobbies);