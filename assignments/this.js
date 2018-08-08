/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
Binding the 'this' keyword to the values provided by the object before the last '.'

* 2. Explicit Binding
Using call, apply, or bind to state in the parameter brackets what the values
for 'this' will be

* 3. New Binding
creating a new prototype object and assigning it to a variable. this variable
will keep the values for 'this' that were passed in the parameter brackets

* 4. Window Binding
Declaring the _globalest_ variables, so that if a function is invoked where 'this'
isn't referencing anything inside the function's scope (or any functions above it),
it will reference this _globalest_ variable.
*
to 'variable' in their scope chain will reference window.variable

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
window.variable = value //now any this.variable statements without any reference

// Principle 2

// code example for Implicit Binding
object.function(parameters)

// Principle 3

// code example for New Binding
let newProtoype = Prototype(param_1, param_2, param_n)

// Principle 4

// code example for Explicit Binding
function.call(object_1, object_2, object_n)
function.apply(object(s), array)
const newFunction = function.bind(object_1, object_2, object_n)
