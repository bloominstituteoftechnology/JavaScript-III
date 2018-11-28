/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global Object Binding
*    A currently uncommon use of `this` binding that is bound to the outermost context (global context - as in the area that is not bound inside the definition of another object) - this would mean the entire console or window, hence the name
*
*   This would be like implicit binding, only in this case, the use of `this` is not placed inside an object.
*
* 2. Implicit Binding
*    This use of `this` is tied to the context of the object that it is placed inside of. It is like telling the compiler that one is referring to 'this' object that you are inside of.
*
*   It is particularly useful when an object's member and a parameter used by the object have the same name (`this` essentially is used to be more specific here).
*
* 3. `new` Binding
*    This binding basically creates a new instance of an object (termed as instantiation). It is like considering the object as a user-defined data type and then creating a new variable of type [object].
*
* 4. Explicit Binding
*    This binding makes use of one of three methods (call, bind & apply) that are used to override the default or implied binding of the current object. These methods change the context of `this` for that object into the parameter that was specified.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this) // Assume this line to be in the outermost context (not inside an object definition or block context)

// Principle 2

// code example for Implicit Binding
const SomeObject = function (someVar) {
    this.someVar = someVar; // This line in particular shows implicit binding - there is a distinction between this.someVar (the value native to the object) and someVar (the parameter taken by the object).
}

// Principle 3

// code example for New Binding
function LightSwitch(toggleValue) {
    this.toggle = toggleValue;
    this.check = function() {
        return this.toggle ? "ON" : "OFF";
    }
}

// This is `new` binding - here we create new light switches for 2 rooms
const bathroomSwitch = new LightSwitch(false);
const bedroomSwitch = new LightSwitch(true);

// Principle 4

// code example for Explicit Binding
const anotherBathroomSwitch = new LightSwitch(true);
anotherBathroomSwitch.check.call(bathroomSwitch) // On this line, we explicitly bind the context of `this` in anotherBathroomSwitch to the `this` context used in the original BathroomSwitch object
