/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global bind: without giving the context, this is binding to window ojbects
* 2. implicit binding: when we call object methods, this is bind to the object to the left of dot
* 3. explicit binding: we can bind this with call, apply, bind methods by explicitly specifing the object
* 4. new binding: when we create an object with new keyword, which were formatted by function contructor, this is bind to the object intantiated by new keyword
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding


// function test(){
// console.log(this);

// }
// test();

// Principle 2

// code example for Implicit Binding

// const animal = {
//     name: 'cat',
//     age: 5,
//     origin: 'china',
//     remarks: function(){
//         return `this ${this.name} of age ${this.age} is from ${this.origin}`
//     }
    
// }

// console.log(animal.remarks());
// Principle 3

// code example for New Binding

// function Person(attributes){
//     this.name = attributes.name;
//     this.age = attributes.age;
//     this.origin = attributes.origin;
    
    
// }

// Person.prototype.speak = function(){
//     return `my name is ${this.name}, age of ${this.age}, and from ${this.origin}`
// }

// const james = new Person({
//     name: 'james',
//     age: 25,
//     origin: 'Japan'
    
// });

// console.log(james.speak());

// Principle 4

// code example for Explicit Binding
// const animal = {
//     name: 'cat',
//     age: 5,
//     origin: 'china',
//     remarks: function(greeting){
//         return `${greeting} ${this.name} of age ${this.age} is from ${this.origin}`
//     }
    
// }

// const person = {
//     name: 'james',
//     age: 35,
//     origin: 'USA'
// }

// console.log(animal.remarks.call(person, 'hello'));
