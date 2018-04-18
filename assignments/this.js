/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Default --> If `this` is used in a function without any implicit or explicit bindings, it will always refer to the Window Object.
* 2. Implicit Binding --> `this` will refer to the Object located nearest to the function call.
* 3. New Binding --> `this` will refer to the new Object created by a constructor function when the keyword `new` is used.
* 4. Explicit Binding --> `this` will refer to whatever Object is passed as a parameter into the .call(), .apply(), or .bind() methods.
*
* write out a code example of each explanation above
*/

// Principle 1


function whereFrom(country) {
    console.log(this);
    return `I'm from ${country}`;
}
whereFrom("USA");

// Principle 2

const flowerTypes = {
    "name": "Daises",
    pushing: function(a){
         console.log(`${a} is planting the ${this.name}!`)
    }
};

flowerTypes.pushing('Mark');

// Principle 3

function NewCar(customer, model) {
    this.name = customer;
    this.model = model;
    this.greeting = 'Congratulations';
    this.message = function (a) {
        console.log(`${this.greeting}, ${this.name}! You have just purchased a ${this.model}!`)
    }
}
const mary = new NewCar('Mary','BMW');
const george = new NewCar('George', 'Fiat');

mary.message();
george.message();


// Principle 4

let modelsMary =['Minivan', 'Audi', 'Ford'];
let modelsGeorge =['Honda', 'VW', 'Pinto'];

let savedModels = function(a, b, c) {
    console.log(`${this.greeting = 'Welcome back'}, ${this.name}. You saved: ${a}, ${b}, and ${c} in your wish list.`);
}
savedModels.call(mary,...modelsMary);
savedModels.apply(george, modelsGeorge);