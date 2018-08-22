/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding:
Implicit binding is binding that occurs during dot notation.

* 2. Window binding
When 'this' is used without context it binds to the window object

* 3. New Binding
New binding occurs when creating an object from a constructor.

* 4. Explicit Binding
Explicit binding is when you Explicitly give binding to an object using call.(), .apply() or .bind()

*
* write out a code example of each explanation above
*/

// Principle 1

const me = {
    name: 'Doug',
    age: 32,
    speak: function () {
        console.log(this.name + ' is ' + this.age)
    }
}
me.speak()

// Principle 2

console.log(this)

// Principle 3

function Veggies(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.info = function () {
        console.log(`${this.name} is ${this.weight} and ${this.height}`)
    }
}

const lettuce = new Veggies('lettuce', '2 oz', '5 in');
lettuce.info();

// Principle 4

let you = {
    name: 'Cal',
    age: 310,
}

function speak() {
    console.log(`${this.name} is ${this.age} years old`)
}
speak.call(you);