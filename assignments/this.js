/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
*  1. Window binding:
    Whenever a function is contained in the global scope, the value of this inside of that function will be the window object. 
    Functions within the global scope are in fact methods on the window object. So, calling greetMe('john'); 
    is no different than calling window.greetMe('john'); Therefore, this inside of the greetMe function points 
    to window.

    function greetMe(name) {
    console.log('Hello ' + name);
    console.log(this);
    }

    greetMe('John');


* 2. Implicit Binding:
    Whenever a function is called by a preceding dot, the object before that dot is this.
    This example is similar to what we saw above with window.greetMe. Here, instead of window we have the greetMe object 
    on the left of the dot. Therefore, this inside of the speak method points to greetMe.

    const greetMe = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
        }
    }

    greetMe.speak('John');


* 3. New Binding:
    Whenever a constructor function is used, this refers to the specific instance of 
    the object that is created and returned by the constructor function.

        // Constructor Function
    // --------------------
    function GreetMe(name) {
        this.greeting = 'Hello ';
        this.name = name;
        this.speak = function() {
            console.log(this.greeting + this.name);
            console.log(this);
        }
    };

    var greetJohn = new GreetMe('John');
    var greetJane = new GreetMe('Jane');

    greetJohn.speak();
    greetJane.speak();


    In the example above, both the greetJohn and greetJane variables are assigned a unique object returned by 
    the GreetMe constructor function. Therefore, this inside of the speak method points to the unique GreetMe 
    object instance stored in the variable on which the speak method is being called. This is evident by looking at 
    the name property on the GreetMe object.

* 4. Explicit Binding:
    Whenever JavaScript’s call or apply method is used, this is explicitly defined.

    greetJohn.sayGoodbye.call(greetJane); //this points to greetJane
    greetJane.sayGoodbye.apply(greetJohn); //this points to greetJohn

    JavaScript’s call and apply methods allow you to execute a function in a different context. 
    The first argument passed to either of these methods explicitly sets what this points to. 
    Because call and apply are explicit, they present the clearest case of what this points to. 
    This is evident by looking at the name property logged to the console by each invocation of the sayGoodbye method.




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