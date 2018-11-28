/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Would make this equal to the window. I really liked Josh's example of the forest -> `this` equals the entire forest. *Bad behavior
* 2. Impliciit Binding: To know what `this` means in this context, you look to the left of the dot notation where you are invoking a function. 
* 3. New Binding: JavaScript will create a brand new object for us and save it as this. So when you reference something like an Animal into a variable zebra
    `this` would mean zebra.{Your reference} in this situation.
* 4. Explicit Binding: You tell what the `this` statement exactly references. You can do this on a function by calling Animal.call(zebra) and `this` would be 
    the same as stating zebra.{your-reference} in this context.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(){
    console.log(this);
}
hello(); // -> this = Window

// Principle 2

// code example for Implicit Binding
const person = {
    firstName: 'Brandon',
    lastName: 'Lent',
    sayName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
person.sayName(); // -> this will equal the referenced key in person

// Principle 3

// code example for New Binding
function Car(name) {
    this.name = name;
    this.speed = 55;
    this.race = function () {
        console.log(`The ${this.name} wins the race going ${this.speed}MPH`);
    }
}

const corvette = new Car('Corvette');
console.log(corvette);
console.log(corvette.race());

// Principle 4

// code example for Explicit Binding
const car = {
    name: 'Tesla'
}

const price = [`35000`, `39000`, `41000`];

function carAndPrices(price){
    console.log(`${this.name} can cost ${price}`)
}

const useLater = carAndPrices.bind(car, price);
useLater();