/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding:
* 2. Impliciit Binding:
* 3. New Binding:
* 4. Explicit Binding:
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