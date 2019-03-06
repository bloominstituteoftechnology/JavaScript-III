/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding:
* 2. Explicit Binding:
* 3. New Binding:
* 4.  Window Binding:
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Implicit Binding - 

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

// Principle 3

// code example for New Binding

// Explicit Binding

const sayName = function(Book1, Book2, Book3){
        console.log('My name is' + this.name + 'and I love' + Book1 + ',' + Book2 + ',and ' + Book3);
};

const Samuel = {
    name: 'Samuel',
    age: 34
};

const books =['Math', 'History', 'Science'];

sayName.call(Samuel, books [0], books[1], books[2]);