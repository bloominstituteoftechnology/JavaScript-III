/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default/Window Binding
        When calling a function, no this context is set and therefore the this keyword within the called function is
        assigned to the window/global object.  An example is when we do a simple function call such as foo().

* 2. Implicit Binding
        This occurs when we are calling a function that 'belongs' to an object.  The function is called with the 'containing'
        object placed before the function name separated by the dot operator.  An example is  myObject.foo().  In this case,
        foo is a function or method that is contained within myObject.  The this keyword within foo() is assigned to myObject.

* 3. Explicit Binding
        This can occur using one of three methods:  Call(), Apply(), or Bind().  For each of these the object that we want to assign to the
        this keyword is explicitly given.
        .call() example:  foo().call(myObject) - foo function is called and this is assigned to myObject.
        .apply() example: foo().apply(myObject) -  Same as .call()  - the two methods differ in how they pass parameters to the function
        .bind example:   const newFoo = foo.bind(myObject);
            When using the .bind method, a new function is created.  The new function's 'this' is explicitly bound to the object that is listed in the .bind argument list (myObject).  Anytime the new function is called, such as newFoo(), 'this' will be equal to myObject.

* 4. New keyword Binding
    This occurs when we want to create a new object using the new keyword.
    Example:  const newObject =  new constructorFunc( [arguments]);
    When using the new keyword, the constructorFunc is called and a new empty object is created.  The 'this' within the constructorFunc is assigned to this newly created object. Within the constructorFunc the new object is referenced by using the this keyword and assigned any new properties ( ex:  this.newProp =  value;). After constructorFunc has completed, the new object is passed back and assigned to the newObject variable.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function foo(){
    const a = 2;
    console.log(this.a);    //returns undefined due to this bound to window and no 'a' var exists at window scope
}
foo();  //called with no object context

// Principle 2

// code example for Implicit Binding
const myObj = {
    age: 10,
    foo: function(){
        return this.age;
    },
};
console.log(myObj.foo());   //implicit binding - Object placed before function call

// Principle 3

// code example for New Binding
function Vehicle(wheels, type) {
    this.wheels = wheels;
    this.type = type;
}

const myCar = new Vehicle(4, 'car');  //creates new object and assings this within Vehicle to new object
console.log(myCar);

// Principle 4

// code example for Explicit Binding
function speak(){
    return `Hello, my name is ${this.name}`;
}

const personObj = {
    name: 'Christopher',
};

console.log(speak.call(personObj));  //call speak function and explicitly bind this within speak() to personObj