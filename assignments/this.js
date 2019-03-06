import Const from 'Const';
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: You look at the left pf the dot at call time
* 2. Explicit Binding: Telling the function what the context of this keyword is going to be- 
using call, apply or bind
* 3. New Binding: When you have function invoke with a new keyword is bound to new object
being constructed
* 4.  Window Binding: If none of the rules apply then  this keyword is going to default
to the window object unless you're  in strict mode then it will just be undefined. 

*
* write out a code example of each explanation above
*/

// Window Binding example




// 

// Implicit Binding example - 

const me ={
    name: 'Mindy',
    Age: 34,
    sayName: function(){
            console.log(this.name);
    }
};

me.sayName();  

// when you call a function/function is invoked look to left of dot
//this keyword will reference whats to the left of the dot

// New Binding Example

Const Animal = function (color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
}

const zebra = new Animal ('black and white', 'zorro', 'zebra');


// Explicit Binding example

const sayName = function(Book1, Book2, Book3){
        console.log('My name is' + this.name + 'and I love' + Book1 + ',' + Book2 + ',and ' + Book3);
};

const Samuel = {
    name: 'Samuel',
    age: 34
};

const books =['Math', 'History', 'Science'];

sayName.apply(Samuel, books);