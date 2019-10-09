/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding means to bind the this keyword to the Window object. When the this keyword is bound to the global context it 
    has access to all the properties of the Window object. 
* 2. Implicit binding binds the this keyword within an object. A way to find out what this is 
    bound to is to look at the object name to the left of the dot when a method is called. 
* 3. In new binding the constructor function is used to create a new object and the this keyword allows binding each object 
    instance's key and value pair. 
* 4. Explicit biding means to intentionally override any previously created this bindinging through the .call and .apply methods. 
    After .call or .apply are used this on an object, its attributes will be those of the new context. 
*
* write out a code example of each explanation above
*/

// Principle 1
// Global binding

// code example for Window Binding
console.log(this);

// Principle 2
// Implicit Binding

// code example for Implicit Binding
const myObj = {
    name: "Roberto",
    height: "6ft 2in",
    weight: 190,
    sayHello: function() {
        console.log(`Hi, they call me ${this.name}, I'm ${this.height} tall.`);
    }
}
console.log(myObj.sayHello());

// Principle 3
// New Binding

// code example for New Binding
function Student(attrs) {
    this.name = attrs.name;
    this.id = attrs.id;
    this.hometown = attrs.hometown;
    this.alertHomeTown = function() {
        console.log(`Hi my name is ${this.name} and ${this.hometown} is my home town.`);
    }
}

const studentOne = new Student({
    name: "John",
    id: 1990,
    hometown: "Worcester"
});

const studentTwo = new Student({
    name: "Maria",
    id: 2001,
    hometown: "Portland"
});

console.log(studentOne.alertHomeTown());
console.log(studentTwo.alertHomeTown());


// Principle 4
// code example for Explicit Binding

studentOne.alertHomeTown.apply(studentTwo);
studentTwo.alertHomeTown.apply(studentOne);



