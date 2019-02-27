/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding; Which pretty much refers to the main window, or 'global scope'.
* 2. Implicit Binding; When a function is called 'this.example', this would be the 'Object' and 'example' would be the 'function'. 
* 3. New Binding; Which refers to the creation of a 'new' object within a constructor function.
* 4. Explicit binding; Which refers to when an apply() or call() method is used, 'this' us explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
function greeting(name) {
    console.log(`Hello ${this}`);
    return greeting;
}

greeting('Justin');










// Principle 2
const helloWorldFunction = message => {
    message.hello = function() {
        console.log(`Hello ${this.name}`);
        console.log(this);
    };
};


helloWorldFunction('Justin');










// Principle 3
function greetPerson(person) {
    this.greeting = 'Hello ';
    this.person = person;
    this.speak = function() {
        console.log(this.greeting + this.person);
        console.log(this);
    }
}

const justin =  new greetPerson('Justin');
const kyran = new greetPerson('Kyran');

justin.speak();
kyran.speak();










// Principle 4

function Product(name, price) {
    this.name = name;
    this.price = price;
    
}

function electronics(name, price) {
    Product.call(this, name, price);
    this.category = 'Electronics';
}

function groceries(name, price) {
    Product.call(this, name, price);
    this.category = 'Groceries';
}

const phones = [
    new electronics('iPhone XS', 1199),
    new electronics('iPhone XR', 799),
    new electronics('Samsung Galaxy S10', 1099)
]

const fruits = [
    new groceries('granny smith apple', 3),
    new groceries('fiji apple', 4),
    new groceries('orange', 2)
]


console.log(phones);
console.log(fruits);





// code example for Explicit Binding