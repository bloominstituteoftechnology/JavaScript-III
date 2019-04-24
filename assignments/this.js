/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding will take the whole function
* 2. implicit binding will take a method inside a function
* 3. new binding will create a new method that can be create over and over again
* 4. explicit binding is going to overrides objects
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function global(binding){
    console.log(this)
    return binding;
}

console.log(global())

// Principle 2
// code example for Implicit Binding

const implicit = {
    binding: 'bound',
    consoleLog: function(logged){
        console.log(`${this.binding} is ${this.logged}`);
        console.log(this);
    }
};

implicit.consoleLog("logged")

// Principle 3
// code example for New Binding

function newBind(person){
    this.show = 'Game of Thrones';
    this.person = person;
    this.likes = function(){
        console.log(this.person + " likes "+ this.show);
        console.log(this);
    };
}

const tom = new newBind('Jerry');
const jerry = new newBind('Tom');

tom.likes();
jerry.likes();

// Principle 4
// code example for Explicit Binding

jerry.likes.call(tom);
tom.likes.apply(jerry);

tom.likes();
jerry.likes();
