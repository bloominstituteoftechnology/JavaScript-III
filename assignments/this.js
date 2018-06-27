/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: is an automatic binding. When you invoke a function is going to look to the left of the dot.
* 2. Explicit Binding: using call, apply and bind you can pass arguments to functions in a global scope.
* 3. New Binding: use .new keyword to bind a function using .this keyword to constrcut new objects.
* 4. Window Binding: if you invoke a function using .this keyword and there isn't anything to the left of the dot, .this is going to point to the window.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
sayName();


// Principle 2

// code example for Implicit Binding
let me = {
    name: 'Luis',
    age: 25,
    speak: function (){
        console.log(this.name);
    }
};

me.speak();

// Principle 3

// code example for New Binding
let Animal = function(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
};

let lion = new Animal('yellow', 'Simba', 'Lion')

// Principle 4

// code example for Explicit Binding
let sayName = function(){
    console.log('My name is ' + this.name);
};

let fernando = {
    name: 'Fernando',
    age: 27,
};

sayName.call(fernando);
