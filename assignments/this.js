/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" is found inside functions. If the function has something to the left of it, with a dot notation, where it is invoked, then that thing to the left is IMPLICITLY the context for "this".
* 2. Otherwise, instead of a normal function invocation, the function can be invoked through the .call(), .apply(), or .bind() methods of a function. In these cases, the first argument to the function invocation will be the context for "this". This is called EXPLICIT binding of "this".
* 3. If the function around "this" is a constructor function, and therefore it's invoked through the "new" keyword, then the "new" binding tells "this" that its context is the new object being created by that constructor.
* 4. If none of the above apply, "this" defaults to referring to the window in which JavaScript is running.
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