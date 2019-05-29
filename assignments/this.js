/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  The Window/Global/Default Binding which refers to the Window (if nothing else is defaulted like in CodePen, CodePen is the Default this.name.) I like Josh's analogy like the forest. Since we don't know exactly which tree he's refering to, it's non specific.

* 2. Implicit binding is the next principle which I remember as automatic which is done to both the objects and methods. With Implicit binding, it's referring to the object to the left of the (.) is what .this will be referring to.

* 3. Explicit Binding which means stated clearly, leaving no room for error or doubt. In the example of a forest, I am referring to and pointing a specific tree. With the Explicit binding, you can use added functions to the function, which are .call, .apply and .bind.

* 4. New Binding (Constructor function) is the last. You create (construct) a new function that creates a new object. It's nice to use when you have a ton of informational arrays are created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const greetingHello = {
    greeting: 'Hello!',
    saysHello: function (name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  }
  greetingHello.saysHello('Lisa');

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding