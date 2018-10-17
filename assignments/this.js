/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 
* 0. One thing I notice is 'this' is always an object. To JavaScript, it can equal literally ANYTHING. To avoid tripping out, JavaScript automatically assigns 'this' as the Window/Global object. From there, the way it is used helps JavaScript determine exactly what 'this' the developer is talking about.

* 1. Window/Global Object Binding is the automatic defining of the 'this' keyword as the entire window that is being rendered since it is an object. 

* 2. Implicit Binding is the definition of the 'this' keyword to any object invoking a globally defined method. So something.doSomething() makes 'something' equal to 'this'. It is implied that the attached object is 'this' thing being called upon. That specific object and all its attributes are being defined as 'this'.

* 3. Explicit Binding is the binding of 'this' is the definition of the 'this' keyword as a specific object that has been defined and is usually followed by one of its attributes or methods. When invoking a globally defined function, the specific object equal to 'this' must be .call()ed with it's attributes individually inserted based on the parameters of the method, .apply()ed with an array of its attributes  inserted as the parameters, or .bind()ed and stored as a variable to be used for later.

* 4. New Binding is the definition of the 'this' keyword as the specific object being created by a constructor method to the attributes that are attached and specifically defined for the object within the prototype or template of the object.
*
* write out a code example of each explanation above
*/

// Principle 1: code example for Window Binding
console.log(this); // 'this' is equal to the rendered window

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for Explicit Binding

// Principle 4

// code example for New Binding