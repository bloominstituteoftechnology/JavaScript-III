/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window binding -in the global scope "this" value will be the window or undefined

* 2.Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this.
* 3.New Binding - function called with "new" - it does not care about any kind of bindings, it creates the new instans
* 4.Explicit Binding- we explicitly bind a context to the function - call(), apply()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(greetings){
    console.log(this);
    return greetings;
}
sayHello("Jo reggelt!";)
// Principle 2

// code example for Implicit Binding
const myObj= {
    greeting: "Jo napot!",
    sayHello:function(name){
        console.log(`${this.greeting})my name is ${name}`);
        console.log(this);

    }
};
myObj.sayName("Csillag");

// Principle 3

// code example for New Binding

function CPerson(greeter) {
    this.greeting = 'Gutten Tag ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const russell = new CPerson('Peter');
const peter = new CPerson('Russell');

peter.speak();
russell.speak();


// Principle 4 call(), apply()

peter.speak.call(russell);
russell.speak.apply(peter);

// code example for Explicit Binding