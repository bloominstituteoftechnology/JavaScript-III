/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 1)Window Binding - By defining a variable a in windows context , ib the example below 
when testFunction is called we use (this.a) which will point to this window context value of a ie 10 and will print 10 as ouput .

* 2. I With Implicit binding - the "this" keyword will be bound implicitly to  testObj object,
 so when testObj.testFunction() function is called the "this" will point to testObj and will print 10 output. 
 As shown in my example below. 

* 3. With Explicit binding one can force a function to use a particular object for "this" binding , we dont have to put property
 function to the reference the object and we will explicitly say to the function about which object it should  used . 
 This can be done using functions such as "call" , "apply" or "bind".

* 4. With New Binding one must call the function using a new operator. 

function testFunction(){
*
* write out a code example of each explanation above
*/

// Principle 1/Window binding

// code example for Window Binding

function sayName(name) {
  console.log(this);
  return name;
}
sayName("Michael");

// Principle 2

// code example for Implicit Binding

const myObj = {
  greeting: "Hello",
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello("Robert");

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
  this.greeting = "Hello ";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson("Newman");
const newman = new CordialPerson("Jerry");

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman);
newman.speak.apply(jerry);

//function testFunction(){

//  this.name = "John";

//this.getName = function(){

//return "I am "+this.name;

//}

//}

//let name = "Bryan",

//let testObj2 = new testFunction();

//console.log(this.name) //print Bryan
