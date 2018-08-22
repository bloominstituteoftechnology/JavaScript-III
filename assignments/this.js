/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. New Binding - is when you create a constructor then and setting it to a new object , or specific instance of the object. 
*    It will then be returned by the constructor function.
*
* 2. Window/Global Binding - "this" will be bound to the window if there is no constructor it can be bound too.
* 3. Implicit - Is a function that is called with a preceding dot. What this mean is
*    that anything that is left of the dot notation for a function is "this"
* 
*  4. Explicit - This is when you can use a call or apply method to explicity define "this". It allows you override 
*     constructors by explicitly calling a new context with call or apply.  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function HelloWorld(name) {
    console.log (`Hello, ${name}`);
    console.log(this);
}
HelloWorld('Stefan');
// Principle 2

// code example for Implicit Binding

const stefanObj = {
    greet: 'Hello World, ',
    greeting: function(name)
 {
     console.log(`${this.greet} my name is ${name}`)
  
 }}

stefanObj.greeting('Stefan')
// Principle 3

// code example for New Binding
 
 function StefanHello (stefanHi){
     
    this.newGreet= 'Hello CSPT2, ';
    this.stefanHi = stefanHi;
    this.speak =  function()
 {
     console.log(`${this.newGreet} my name is ${this.stefanHi}`);

 };
 }
 const stefan = new StefanHello('Stefan');
 const mehdi = new StefanHello('Mehdi');
 
 stefan.speak();
 mehdi.speak();

// Principle 4

// code example for Explicit Binding


function User (info) {
    this.gender = info.gender;
    this.age = info.age;
    this.fullname = info.fullname;
    this.hometown = info.homeTown;
    this.speak = function () {
        
        return `Hello CSPT2 and Anthony :). My name is ${this.fullname}`;
    };
}

const stefan = new User ({
    gender: 'Male',
    age: 40,
    fullname: 'Stefan Clem',
    homeTown: 'Harlan, Ky'
});

console.log(stefan);
console.log(stefan.speak());