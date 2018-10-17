/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when something defaults to .this referencing the window object and therfore global
* 2. Implicit binding is that this is set to whatever is preceeding a dot when you call it eg letter.toLowerCase() this would = letter
* 3. New binding this refers to the object created by a constructor function.
* 4. Explicit is when you use call or apply this is explicit
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function windowBinding() {
    console.log(this);
}

windowBinding();

// Principle 2
// code example for Implicit Binding

const implicitObject = {
    name: 'implicit',
    other: 'other',
    other2: 'other2',
    sayName: function() {
        console.log(this.name);
    }
};

implicitObject.sayName();

// Principle 3
// code example for New Binding

function NewObject(name, other, other2) {
    this.name = name;
    this.other = other;
    this.other2 = other2;
    this.sayName = function() {
        console.log(this.name);
    };
}

const newObjectVar = new NewObject('New Object', 'other', 'other2');

newObjectVar.sayName();

// Principle 4
// code example for Explicit Binding

const explicitBinding = {
    name: 'David'
};

const stuffArray = ['stuff1', 'stuff2', 'stuff3'];

function sayName(stuff1, stuff2, stuff3) {
    console.log(`${this.name} ${stuff1} ${stuff2} ${stuff3}`);
}

sayName.call(explicitBinding, ...stuffArray);
