/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding: 
    - Most common principle/rule. Talking in terms of dot notation, implicit binding means that 'this' references whatever is to the left of the dot. i.e., in obj.example, this points to 'obj'
* 2. Explicit binding
    - Tells a function what the context of this keyword is going to be using call apply or bind
    - Allows a function/method to explicity take in variables of another object. So the function/method changes its context to that of another object that is explicitly references with 'call'. 
    - Call takes two arguments. The first delcares the context in which 'this' is being referenced. The second argument (can be multiple) will be passed into the function that's referencing it.
    - Apply does that same thing, except you don't have to the pass in array arguements one by one like call. You just need to reference the array.
    - Bind is also very similar. Difference is that it will return us a new function instead of invoking the original function. 
* 3. new Binding
    - whenever you have a function invoke with a new keyword - this keyword is bound to new object being constructed
* 4. window Binding
    - if none of these rules apply then that this keyword is going to default to the window object unless you're in strict mode then it's just going to be undefined
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