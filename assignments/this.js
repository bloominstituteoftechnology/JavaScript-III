/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var myThis = function () {
    console.log(this);
}

myThis();
// Principle 2

// code example for Implicit Binding
var myImplicitThis = {
    name: "Nick",
    speak : function(){
        return `Hi, my name is ${this.name}`;
    }
}

console.log(myImplicitThis.speak());

// Principle 3

// code example for New Binding
function Animal() {        

    this.name = 'Zebra';
    this.say = function () {
    return "I am " + this.name; 
   };

}

var Kiwi = new Animal();
Kiwi.name = "Kiwi";
console.log(Kiwi);

// Principle 4

// code example for Explicit Binding

function greet() {
    console.log(this.name, this.place /* age.age */);
}

var person = {
    name: "Sam",
    place: "Dakotas"
}

// var age = {
//     age: 30
// }
greet.call(person);