/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Explicit: when .call(), .apply(), .bind() are used. Explicitly passing in a `this` context to call() or apply(). We use .bind() to set a `this` context and to create a new function.
* 2. Implicit: Occurs when dot notation is used to invoke a function. (Look at the left side)
* 3. New: used to create a context for This with each time it is called.
* 4. Window: refers to how this is the global context whenever a function is invoked without any of these other rules.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greetings(greet) {
    console.log(this)
}
console.log(greetings());

// Principle 2

// code example for Implicit Binding
const blockchain = {
    name: 'Bitcoin',
    useCase: 'Decentralized Peer to Peer Payment System',
    pay: function () {
        return `${this.name} is a ${this.useCase}`
    }
}
blockchain.pay();

// Principle 3

// code example for New Binding
function sandwich(meat, veggie, sauce) {
    this.meat = meat;
    this.veggie = veggie;
    this.sauce = sauce;
    this.makeSandwich = function () {
        return `I am making a ${meat} sandwich with ${veggie} and ${sauce}`
    }
}

let steakSandwich = new sandwich('steak', 'onions', 'mayo');
steakSandwich.makeSandwich();
// Principle 4

// code example for Explicit Binding

const iUse = function() {
    console.log(`I use ${this.name} instead of Paypal.`);
};
iUse.call(blockchain);
iUse();
