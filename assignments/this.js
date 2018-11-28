/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The default this assignment is our window. This essentially is all of JavaScript in one object. We do not want this to occur in our code as it generally shows that we've missed assigned our this keyword. 
* 2. Implicit Binding - Implicit, or automatic binding, occurs when we store functions in objects. When we invoke a function, the object preceded the .functionName() is our this keyword.   
* 3. Explicit Binding 
* 4. New Keyword Binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const myObj = {
    test: "testing our this keyword",
    demo: function(){
        console.log(this.test); //Returns "testing our this keyword"
        console.log(this); // Returns our full object - myObj
    }
}
myObj.demo();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding