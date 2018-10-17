/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window or global binding - the default state of 'this' is to look at the window, or 'the walls' in Josh's example today.
* 2. Implicit binding - the 'this' keyword is referring to the object it is in, to the left of the dot in: object.property
* 3. Explicit binding - uses 'call' to allow running a function that is outside of the object on the object: method.call(object)
* 4. New binding - uses 'new' to create a new object using properties from the prototype: const newVar = new Object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name

// Principle 2

// code example for Implicit Binding
const testObj = {
    item1: 'text goes here',
    item2: 'more text',
    item3: function(){
        console.log(`${this.item1} ${this.item2}`);
    }
}

// Principle 3

// code example for New Binding
function AnotherTest(itemA, itemB){
    this.itemA = itemA;
    this.itemB = itemB;
} 

let YetAnotherTest = new AnotherTest('thisItem', 'thatItem');

// Principle 4

// code example for Explicit Binding
function sayHello(stuff) {
    console.log(`Hello, today I am talking about ${this.item2} things.`)
}

sayHello.call(testObj);