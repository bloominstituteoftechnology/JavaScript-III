/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding is when 'this' is inside the windows object. 
* 2. Implicit Binding is when we use this, and call it followed by an object and dot. 
* 3. New binding is when we use a constructor function to bind this.
* 4. Explicint binding is using Javascript's call methods, such as call, apply, or bind, to define our objects. 
*
* write out a code example of each explanation above
*/

// Principle 1


// code example for Window Binding
function student(id) {
    console.log(this);
    return id;
}
student(23); //?

// Principle 2
const student2 = {
    name: 'shawn',
    id: 23,
    speak: function() {
        return this.name + ', hi'
    }
}

student2.speak();//?

// code example for Implicit Binding

// Principle 3
function RichPerson(person) {
    this.greeting = "hello there";
    this.person = person.name;
    this.age = person.age
    this.speak = function() {
        return "Hi, my name is " + this.person + ", " + this.age;
    }
}

const elaine = new RichPerson({name: 'Elaine', age: 32});
elaine.speak();//?

// code example for New Binding

// Principle 4

// code example for Explicit Binding
const newPerson = function(name) {
    console.log(this.name);
}

newPerson.call(student2, 'booga')
