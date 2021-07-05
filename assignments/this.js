/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In window binding the "this" is the console Object when in a global scope.
* 2. In implicit binding the "this" is the Object to the right of the dot.
* 3. In new binding the "this" is the "new" Object that gets created and inherits the original Object. 
     In a way it uses the original Object as a template that is then used by each "new" added Object.
* 4. In explicit binding the "this" is the object which uses methods call and apply to help it gain attributes
     from other arrays.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayGreeting(greet){
    console.log(this);//What "this" is in window binding, in this case the global scope.
    return greet;
}
sayGreeting('Hello World!');

// Principle 2
// code example for Implicit Binding
const myGreeting = {
    'intro' : 'Hello',
    sayGreeting: function (phrase) {
        console.log(`${this.intro} ${phrase}!`);
        console.log(this);//What "this" is in implicit binding, in this case myGreeting.
    }
}
myGreeting.sayGreeting("World");

// Principle 3
// code example for New Binding
function Greeting(greet) {
    this.greet = greet;
    this.phrase = 'World!';
    this.sayGreeting = function(){
        console.log(this.greet, this.phrase);
        console.log(this);//What "this" is in new binding, in this case it depend on what new object is being created
                          //which happened to be Hello and Goodbye.
    };
}

const hello = new Greeting('Hello');
const bye = new Greeting('Goodbye');

hello.sayGreeting();
bye.sayGreeting();

// Principle 4
// code example for Explicit Binding

const charlie = {
    'name': 'Charlie',
    'dog_type': 'husky',
    'age': '5',
}

const dogTricks = ['play dead', 'bark', 'sit']

//Using function.call(object, array)
function aboutDogCall (traits) {
    console.log(`${this.name} is a ${this.dog_type} who is ${this.age} years old and can ${traits}.`);
    console.log(this);//What "this" is in explicit binding, in this case it's the object charlie.
}
aboutDogCall.call(charlie, dogTricks);

//Using function.apply(object,array)
function aboutDogApply (trait1, trait2, trait3) {
    console.log(`${this.name} is a ${this.dog_type} who is ${this.age} years old and can ${trait1}, ${trait2}, and ${trait3}.`);
    console.log(this); //What "this" is in explicit binding, in this case it's the object charlie.
}
aboutDogApply.apply(charlie, dogTricks);