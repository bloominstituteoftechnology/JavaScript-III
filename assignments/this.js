/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding makes a reference to the global value
* 2. Implicit binding makes a reference to the object before the . when a function is called
* 3. New binding makes a reference to newly created object returned by the constructor 
* 4. explicit deals with call and apply; which are explicit calls for the 'this'
*
* write out a code example of each explanation above
*/

// Principle 1

function barkingDog(Bark) {
    console.log(this);
    return name
}
barkingDog("Barkanese");


// Principle 2

const myObj = {
    bark: "Barkanese",
    barkingDog: function(type) {
        console.log(`${this.type} by ${name}`);
        console.log(this);
    }
};
myObj.barkingDog('Barking');

// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak() = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

newman.speak();
jerry.speak();

// Principle 4

jerry.speak.call(newman);
newman.speak.apply(jerry);