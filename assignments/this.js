/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this bind to global as a default
* 2. implicit binding is most common.  when a function is called with dot, what's left of dot is this
* 3. new binding.  when constructor function is used to create a new object, this bind to the created object
* 4. explicit binding.  when method call, apply are used this binds to what these methods indicate.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this);

// Principle 2

// code example for Implicit Binding

const person = {
"name" : "edward",
speak : function(){
    // console.log(`${this.name} is a person`);
}
};

person.speak();


// Principle 3

// code example for New Binding

function Animal(att) {
    this.name = att;
    this.speak = function(){
        console.log(`${this.name} is an animal`);
    }
}


const Rabbit = new Animal("rabbit");
// Rabbit.speak();

// Principle 4

// code example for Explicit Binding

const Dog = new Animal("dog");
Dog.speak();

Dog.speak.call(Rabbit);