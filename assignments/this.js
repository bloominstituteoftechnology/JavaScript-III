/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" becomes a global object (window binding)
* 2. object preceding the dot is 'this' (implicit)
* 3. uses .call, .apply or .bind (explicit)
* 4. will create a new object (new binding)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayGreeting(greet) {
    console.log(this);
    return greet;
}
sayGreeting("Hello");
// Principle 2

// code example for Implicit Bind
const myLife = {    
    statement: 'I love',
    sayIt : function(food) {
        console.log('${this.statement} ${food}');
        console.log(this);
    }
};
myLife.sayIt('wings');
// Principle 3

// code example for New Binding
function NewPerson(name) {
    this.greeting = 'Hi, my name is';
    this.name = name;
    this.speak = function() {
        console.log(this greeting + ' ' + this.name);
        console.log(this);
    };
}
const akira = new NewPerson('Akira');

akira.speak();
// Principle 4

// code example for Explicit Binding
function show() {
    console.log(this.empire);
}

let myShow = {
    name: 'Cookie',
    empire: 'empire',
}

show.call(myShow);

//show.apply(myShow);

// show = show.bind(myShow)
// show();