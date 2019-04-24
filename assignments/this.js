/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global scope- references the window object
* 2. Implicit scope- references the object that the function was called on
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);

// Principle 2

const implicitThis = {
    sayIt: function () {
        console.log(this);
    }
};

implicitThis.sayIt();

// Principle 3

const NewThis = function(){
    this.sayIt = function(){
        console.log(this);
    }
}

new_this_variable = new NewThis();
new_this_variable.sayIt();

// Principle 4

explicit_this_variable = new NewThis();
new_this_variable.sayIt.call(explicit_this_variable);