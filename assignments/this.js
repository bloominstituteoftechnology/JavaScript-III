/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding: when a method is called using dot notation, the reference for "this" becomes the object before the dot
* 2. explicit binding: "this" inside an object of a constructor references the object instead of the constructor
* 3. new binding: "this" inside a constructor references to a new object when the object is created.
* 4. world binding: when the reference for "this" is pointing to the global("world") scope
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function tsaiAsks(){
    console.log(`Where is ${this}?`);
}
tsaiAsks();

// Principle 2

// code example for Implicit Binding
const tsaiObject = {
    'name': 'Tsai',
    'age': 37,
    'printAge': function() {
        console.log(`My name is :${this.name}`);
    }
}
tsaiObject.printAge();



// Principle 3

// code example for New Binding
function Student(id, name){
    this.studentID = id;
    this.studentName = name;
    this.outputID = function(){
        console.log(`My name is ${this.studentName}`);
    }
}

// Principle 4

// code example for Explicit Binding
function Student(id, name){
    this.studentID = id;
    this.studentName = name;
    this.outputID = function(){
        console.log(`My name is ${this.studentName}`);
    }
}

const tsai = new Student(23,'Tsai Huang');
tsai.outputID();