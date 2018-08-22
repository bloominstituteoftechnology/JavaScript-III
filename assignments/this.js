/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global: This is the default binding, which essentially means if specific context is not declared, binding will fall back to this value.
* 2. Implicit: This is the binding that takes place when this is used in a function that is called by something. Default methods such as push are implicitly bound.
* 3. Explicit: This is the binding that takes place whenever .call .apply is appended onto a function, it allows you to over-ride the context of 'this'.
* 4. New: This is the binding that takes place when an instance of an object is created via a constructor, using the 'new' key word.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const exampleFunc = function () {

    console.log(this);
}

// This will default to whatever the global object is when I run it in my terminal.

// Principle 2

// code example for Implicit Binding

const exampleObj = {
    key1: 'value1',
    key2: 'value2',
    keyFunction: function (){
        console.log(this.key1, this.keyFunctionkey2);
    }
}

const implicitBindExample = exampleObj.keyFunction();

// The function 'keyFunction' is implicitly bound to exampleObj via dot notation, allowing exampleObj to call it, instead of a global object.
// Principle 3

// code example for New Binding

const objConstructorFunc = function (str) {

    this.key1 = 'value1',

    this.key2 = 'value2',

    this.key3 = str ;

    this.aFunction = function (){

        console.log(`I'm holding ${this.key1}, ${this.key2}, and ${str}`)

    }


}

const newBoundExample = new objConstructorFunc(' key 3 is a string argument for my "aFunction" function, which is my fourth key!');
// console.log(newBoundExample.aFunction());

// Principle 4

// code example for Explicit Binding

//Drawing from the above code:

const giveCompliment = function (str){

    this.key1 = 'value1',
    
    this.key2 = 'value2',

    this.flatterThem = function (){
        console.log(`${str} take ${this.key1} and ${this.key2}`);
    }
}

// const hairCompliment = new giveCompliment(`You have nice hair, you can have ${this.key1} and ${this.key2}.`)

const eyeCompliment = new giveCompliment('hair') ;

const hairCompliment = new giveCompliment('eyes');
// console.log(eyeCompliment.flatterThem());
// console.log(hairCompliment.flatterThem());
console.log(eyeCompliment.flatterThem.call('eyeCompliment'));
console.log(hairCompliment.flatterThem.call(hairCompliment));
