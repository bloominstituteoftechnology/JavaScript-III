/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window = global scope binding
* 2. Implicit Binding = left of the dot at call time
* 3. New Binding = bond to a new object being constructed
* 4. Explicit Binding = call apply bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// var sayAge = function() {
//     console.log(this.age)
// };

// window.age = 35;
// sayAge();


// Principle 2

// code example for Implicit Binding
var me = {
    "name": 'William',
    "age": 33,
    "sayName": function(){
        console.log(this.name);
    }
};

me.sayName();

// Principle 3

// code example for New Binding
function Animal(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
};
var zebra = new Animal('black and white', 'Zorro', 'Zebbra')

console.log(zebra)

// Principle 4

// code example for Explicit Binding
let sayName =  function(){
    console.log(this.name);
}
var notMe = {
    "name": 'Billy Boy',
    "age": 113,
};

sayName.call(notMe);