/* The for principles of "this":
 * In your own words, explain the four principles for the "this" keyword below.
 *
 * 1.Window binding - "this" is a global object that applies when the function is called. If the other 3 don't apply, this one does.
 * 2.Implicit binding - the object is bound to the function even though it's not actually contained within or part of the function.
 * 3.New binding - with new binding you create a new object which will be "this" when you call the function.
 * 4.Explicit binding - you have to tell it to call, apply, or bind the object.
 * 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function num() {
    return this;
}
num();

// Principle 2

// code example for Implicit Binding

const help = {
    thing: (' is trying to figure out implicit binding'),
    myFunction: function(me) {
	return `${me} $(this.thing}';
    }
    
}

console.log(help.myFunction("kelly"));

// Principle 3

// code example for New Binding

function help(param) {
    this.param = param;
}

let kelly = new help('thing');

console.log(kelly.param);//the result = 'thing'

// Principle 4
// code example for Explicit Binding

function help() {
    console.log( this.thing );
}

var obj = {
    thing: 2
};

help.call( obj ); //the result = 2
