/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
    
        When .this returns a value from anywhere within an object.

* 2. Implicit Binding

        When a function is preceded by a . .

* 3. New Binding

        When .this returns a value from existing variables within an object and creates a new object.

* 4. Explicit Binding






*
* write out a code example of each explanation above
*/

// Principle 1

let sayAge = function(){
        console.log(this.age);
};

// let me = {
//         age: 39,
// }
window.age = 39;
sayAge();


// code example for Window Binding

// Principle 2

let me2 = {
        name: "Nick",
        age: 39,
        sayName: function() {
                console.log(this.name);
        }
};

me2.sayName();

// code example for Implicit Binding

// Principle 3

let Animal = function(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;

};

let squirrel = new Animal('brown', 'Chippy', 'Squirrel');



// code example for New Binding

// Principle 4

var nick = {
        name: 'Nick',
        age: 39,
        sayName: function(){
                console.log('My name is ' + this.name);
        }
};

nick.sayName();

// code example for Explicit Binding