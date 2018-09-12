/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding-When in global scope, the value of 'this' will be the window Object.
* 2. Implicit Binding- whenever a function is called by a preceding dot, the object before that dot is this.
* 3. new binding - whenever a constructor function is used , this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - whenever javascript call or apply method is used, this is explicity defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function whoIs(I) {
    console.log(this);
    return I;
}
whoIs("me")

// Principle 2

// code example for Implicit Binding
const myHome = {
    greeting: 'Welcome',
    owner: function(name) {
        console.log(`${this.greeting} to my home, my name is ${name}`);
    }
};
myHome.owner('yanrong');

// Principle 3

// code example for New Binding
function pizza(store) {
    this.greeting = 'Hello';
    this.stores = store;
    this.speak = function () {
        console.log(`${this.greeting} is ${this.stores}, How can i help you`);
    }
}

const papa = new pizza('PAPA JOHN');
const Domi = new pizza('DOMINO');

papa.speak();
Domi.speak();

// Principle 4

// code example for Explicit Binding
const pizza1 = {
    'storeName': 'Papa John'
}

const pick = ['Pepperoni', 'Sausage', 'Cheese'];

function order(pick1, pick2, pick3){
    console.log(`Hello ${this.storeName}, I want to order ${pick1}, ${pick2} and ${pick3} pizza.`);
}

order.apply(pizza1,pick);