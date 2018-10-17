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
    
* 4. 
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