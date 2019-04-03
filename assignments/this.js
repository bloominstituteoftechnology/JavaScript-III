/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. *new binding* is when `this` is used within a object creator
* 2. *window binding* is when `this` points to the window object
* 3. *implicit binding* is when `this` is used within a function, `this` points to the object to the left of the dot where it was invoked
* 4. *explicit binding* is when `this` is used in function methods
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
const object = {
    name: 'Tom',
    age: 77,
    about: function(){
        console.log(`${this.name} is around ${this.age} years old`);
        console.log(this);
    }
}
// code example for Implicit Binding

// Principle 3
function Computer(obj){
    this.screen = obj.screen;
    this.cpu = obj.cpu;
    console.log(this);
}

const myComp = new Computer({
    screen: '27-inch',
    cpu: 'Ryzen 5',
})
console.log(myComp);
// code example for New Binding

// Principle 4

// code example for Explicit Binding