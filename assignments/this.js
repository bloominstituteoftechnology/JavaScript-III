/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/Global Binding - "when the function is invoked that doesn't have anything to the left of the dot, not using the new neither explicit binding then 'this' keyword is going to be window object."
* 2. Implicit Binding - "when the function is invoked look to the left of the dot and that is what 'this' keyword is going to reference."
* 3. new Binding - "when the function is invoked with the new keyword, 'this' keyword inside that function is bound to the new object being constructed."
* 4. Explicit Binding- when 'call', 'apply', 'bind' methods are used. In the below example, .call forces its this to be child
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let randomName = function() {
    console.log(this.name);
 };
 let one = {
     name: "Peter"
 };
 randomName();
//  window.name = 'Pers';
//  randomName();

// Principle 2

// code example for Implicit Binding

let parent = {
    name: 'Greg',
    age: 35,
    greeting: function(){
        console.log('Hello, my name is ', this.name);
    }
};
parent.greeting();
// Principle 3

// code example for New Binding
let Student = function(lastName, firstName, gender) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.gender = gender;
};

let newStudent = new Student ('Twen', 'Mark', 'M');
console.log(newStudent);


// Principle 4

// code example for Explicit Binding
 function parentOne() {
   console.log(this.age);
};
let child = {
    age: 15
};
parentOne.call(child);