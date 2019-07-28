/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - The 'this' is the window or console object.
* 2. Implicit -  The object being referenced is to the left of the dot as the function is called.
* 3. New - This is used with a constructor function, and refers to the object that is created and returned by the constructor function.
* 4. Explicit - When the call or apply methods are used, this is defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// let sayAge = function() {
//     console.log(this.age);
// };

// let me = {
//     age: 25
// };

// sayAge();

// Principle 2

// code example for Implicit Binding
// let me = {
//     name: 'Matt',
//     age: 25,
//     sayName: function(){
//         consolelog.log(this.name);
//     }
// };
// me.sayName();

// Principle 3

// code example for New Binding
// let Animal = function(color, name, type) {
//     this.color = color;
//     this.name = name;
//     this.type = type;
// };

// let zebra = new Animal('black and white', 'Zorro', 'Zebra');

// Principle 4

// code example for Explicit Binding
// let sayName = function() {
//     console.log('My name is ' + this.name);
// };
// let stacey = {
//     name: 'Stacey',
//     age: 34
// };
// sayName.call(stacey);