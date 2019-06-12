/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
        function sayName(name) {
        console.log(this);
        return name;
        }
        sayName("D'Artagnan");
            -
* 2. Implicit Binding
        const myObj = {
        greeting: 'Hello',
        sayHello: function(sayHello) {
            console.log(`${this.greeting} my name is ${name}`);
            console.log(this);
        }
        };
        myObj.sayHello('Ryan');
            -Implicit binding is a .this reference is is nested inside of a function. myObj.sayHello('target') to invoke.
* 3. New binding
        function CordialPerson(greeter) {
        this.greeting = 'Hello ';
        this.greeter = greeter;
        this.speak = function() {
            console.log(this.greeting + this.greeter);
            console.log(this);
        };
        }

        const jerry = new CordialPerson('Newman');
        const newman = new CordialPerson('Jerry');

        jerry.speak();
        newman.speak();
            -in the code above, new is being invoked to tell js to create a new CordialPerson with the names newman and jerry. after that code, jerry/newman is able to be invoked with .speak which is defined above that.
* 4. Explicit binding
        function greet () {
        alert(`Hello, my name is ${this.name}`)
        }

        const user = {
        name: 'Tyler',
        age: 27,
        }
            -this is like implicit, but rather than .this invoking a funcion that is nested inside of a function, its entirely own its own outside of it. In the code above, this.name is being used to invoke the name of 'tyler' tha tis defined under const user, along with an age, but that isnt being invoked. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding