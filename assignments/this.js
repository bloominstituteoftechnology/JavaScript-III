/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Global binding -   if 'this' is used in the global scope it returns either the
                        window object if the script was run in a web browswer or the 
                        module.exports object if it was run using node.
* 2. Implicit binding - 'this' will be whatever is to the left of the dot when a
                        method is called.
* 3. New binding -      With new, instances can be created from the same object
                        blueprint. Each will be stored in a variable and a totally
                        new context is created that this will be bound to when
                        using that object.
* 4. Explicit binding - This can seem tricky, but it really is just when we are
                        binding a context to a function. We have a function and we
                        can use methods like call and apply to bind a particular
                        context to it and storing that function with context into
                        another callable variable.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

/* 
 * both console.log entries will display the same result, even the one inside the
 * function. This is because the function is basically a method of the global
 * object, whether it is the window or module.exports. I included the second
 * parameter of 'this === module.exports' to clearly show what is returned when
 * the script is run in node vs. the web browser.
 */
console.log(this, this === module.exports);
function func() {
    console.log(this, this === module.exports);
}

// Principle 2

// code example for Implicit Binding

/*
 * Here we create an object called obj and give it a property of name. We also
 * create a function called sayName. Now we can call the sayName function using
 * the dot syntax and attach it to the obj. Thus, in this particular context
 * obj is 'this'.
 */

const obj = {
    name: 'Eric',
    sayName: function() {
        console.log(this.name);
    }
}
obj.sayName();

// Principle 3

// code example for New Binding

/*
 * Similar to the example for implicit binding, this actually uses a function
 * as a template to create instances of objects from. The 'this' keyword will
 * apply to whatever instance is invoking the method, much like with implicit
 * binding, but the key difference is new creates many contexts and this will
 * refer to whatever context is currently being used.
 */

function Person(name) {
    this.name = name;
    this.sayName= function() {
        console.log(this.name);
    }
}
const person = new Person("Eric");
person.sayName();

// Principle 4

// code example for Explicit Binding

/*
 * What we do here is create a function and create an object. We then use the
 * call method associated with the function and pass in the object, giving
 * the function a context that 'this' will refer to.
 */

const blah = function() {
    console.log(this);
}

const o = {
    name: "Eric"
}

blah(); // prints either window or module.exports depending on environment
blah.call(o) // prints o
