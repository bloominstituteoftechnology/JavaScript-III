/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If you aren't in an object's scope, "this" refers to the entire window
* 2. If an object calls a function with the "." syntax, the function uses the object as "this" implicitly
* 3. If you use a constructor with the new keyword, "this" refers to the specific instance created by it
* 4. If you use js' "call" or "apply" methods you get to set the "context" of it explicitly to another object, thereby changing what "this" refers to
*
* write out a code example of each explanation above
*/

// Principle 1

function whatIsThis(that) {
    console.log(`this is ${this} and that is ${that}`);
}
whatIsThis(42);

// Principle 2

let messageFromSpace = {
    message: "You have 100 years to surrender",
    relayMessage() { console.log(this.message) },
}
messageFromSpace.relayMessage();

// Principle 3

function Constructor() {
    this.name = "Bill";
    this.job = "Constructing"
    this.doJob = function() {
        console.log(`Hey ${this.name}, do your job!`);
        console.log(`I am doing ${this.job} already!`);
    }
}
constructor = new Constructor();
constructor.doJob();

// Principle 4

whatIsThis.call(constructor, constructor.name);