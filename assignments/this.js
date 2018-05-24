/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when used in global context, the this refers to the window of the current application being used, whether it be a browser window or an application window like here with VSCode. 
* 2. when an object is created and the this is used to list the objects key:values pairs, it's implicit that the this refers to the object that's being created. if the object has functions with an argument in it, the arguments that are passed in are the ones that are passed into the object's function. 
* 3. when an object is created via a function, the this refers to the object that's created. the new object will have the same key:value pairs as defined in the constructor functions, but the key:value pairs will be specic to the new object's key:values
* 4. let's say you have an object and you want to add a specific method that belongs on another object. you can add in the other object's method, by referencing the other object method (i.e. otherObject.prototype.method), and then using .call() or .apply() (i.e. otherObject.prototype.method.call(object, objectProperty1, objectProperty2)), you can explicitly bind the method to the object (the this will refer to the object now, not the other object). with the the .call() or .apply() methods, you also have to pass in the arguments that will be passed on the method that was added to the object. 
*
* write out a code example of each explanation above
*/

// Principle 1 // when used in global context, the this refers to the window of the current application being used, whether it be a browser window or an application window like here with VSCode. 

// code example for Window Binding
function greet(name) {
    return this;
}
// greet("john")
console.log(greet("johnn"));


// Principle 2 // when an object is created and the this is used to list the objects key:values pairs, it's implicit that the this refers to the object that's being created. if the object has functions with an argument in it, the arguments that are passed in are the ones that are passed into the object's function. 

// code example for Implicit Binding


// Principle 3 // when an object is created via a function, the this refers to the object that's created. the new object will have the same key:value pairs as defined in the constructor functions, but the key:value pairs will be specic to the new object's key:values

// code example for New Binding

// Principle 4 // let's say you have an object and you want to add a specific method that belongs on another object. you can add in the other object's method, by referencing the other object method (i.e. otherObject.prototype.method), and then using .call() or .apply() (i.e. otherObject.prototype.method.call(object, objectProperty1, objectProperty2)), you can explicitly bind the method to the object (the this will refer to the object now, not the other object). with the the .call() or .apply() methods, you also have to pass in the arguments that will be passed on the method that was added to the object. 

// code example for Explicit Binding