/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is like a default.  it is checked for if no other principle applies
* 2. implicit binding is the most common.  this is used to bind to the element when the element is invoked
* 3. new binding is to bind this to a newly created object
* 4. explicit binding is binding directly to an element by stating the binding element.  this can be done with .call(), .apply() & .bind()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name;

// Principle 2

// code example for Implicit Binding
let me = {
    'name': 'sean',
    'age' : 37,
    'greet' : function() {
        console.log(`Hello, I am ${this.name}`)
    }
}

// me.greet();

// Principle 3

// code example for New Binding
function Student(name, id, cohort) {
    this.name = name;
    this.id = id;
    this.cohort = cohort;
    this.studentDisplay = function() {
        return `Student is ${this.name} id #${this.id} in ${this.cohort}.`;
    }
}

let sean = new Student('sean', 123, 'FSW 14');
// let ferdonk = new Student('ferdonk', 345, 'FSW 16');
// let chrono = new Student('chrono', 678, 'FSW 18')

// console.log(sean.studentDisplay());
// console.log(ferdonk.studentDisplay());
// console.log(chrono.studentDisplay());


// Principle 4

// code example for Explicit Binding
function learning(lang) {
    console.log(`${this.name}'s cohort (${this.cohort}) is learning ${lang}`)
}

learning.call(sean, 'html');