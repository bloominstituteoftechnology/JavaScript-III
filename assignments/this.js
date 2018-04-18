/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window Binding
    The 'this' keyword will refer/default to the global scope (e.g window object) when is not passed in a function. 

* 2. Principle 2: Implicit Binding
    The 'this' keyword will point to the object that's left of the dot when invoking the function. 

* 3. Principle 3: New Binding
    The 'this' keyword is used when creating constructor functions. Constructor functions creates objects. 


* 4. Principle 4: Explicit Binding
    We can reassign the values of constructor objects by binding them to new ones with the use of .call or .apply. 

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function mySports(sports) {
    console.log(this);
    return sports;
}

console.log("soccer");

// Principle 2

// code example for Implicit Binding
var me = {
    name: 'Tyler',
    age: 25,
    sayName: function () {
        console.log(this.name);
    }
 };
 me.sayName();

// Principle 3

// code example for New Binding
function Animal (color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
}

var zebra = new Animal('black and white','Zorro', 'Zebra');
  
console.log(zebra);
console.log(zebra.color);
console.log(zebra.name);

// Principle 4

// code example for Explicit Binding
var sayName = function () {
    console.log("My name is " + this.name);
};

var marco = {
    name: 'Marco',
    age: 39
};

sayName.call(marco); 