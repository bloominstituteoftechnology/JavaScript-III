/* THE for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding- The object left of the dot gets the this. The left of the . is where the "this" is pointed. 
* 2. Global/Window Binding - In global scope the vale of this will be the window or console object. 
* 3. New Binding - Uses a constructor function with the new keyword to build a new instance. The this keyword inside the function is bound to the new object that is defined. 
* 4. Explict Binding - Uses .call(), .bind(), and .apply() when using these methods this is specifcally defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding



// Principle 2

// code example for Implicit Binding

const sayHello = { 
    greeting: 'Hello', 
    speak: function(){ 
      console.log(this)
        return `${this.greeting}, world!`
    }
}

sayHello.speak()


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding