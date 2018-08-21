/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: Absence an object, "this" will reference Window which is at the highest level
* 2. Implicit Binding: When "this" is within an object, it references that object
* 3. New Binding: When calling 'new', you're creating a new instance of a class, 'this' references that class
* 4. Explicit Binding: When using .call .apply .bind to bind objects to functions
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// this is not referencing any object, so the computer keeps looking at a higher level
function saySomething(){
    console.log(this)
}


// Principle 2

// code example for Implicit Binding
let car = {
    model: 'Mazda CX3',
    vroom: function(){
      return `${this.model} is silky smooth!`
    }
  }
  
  car.vroom()

// Principle 3

// code example for New Binding
function User(obj) {
    // this = {};
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.lovesJavascript = true;
    this.saysHi = function(person) {
        return `${this.firstName} says hi to ${person}!`
    };
    // return this
};

let Corey = new User({
    firstName: 'Corey',
    lastName: 'Feldman'
})

// Principle 4

// code example for Explicit Binding

const yourObject = {
    name: 'Paul',
    city: 'BKK'
}

const thingsYouEnjoy = ['bball', 'card collecting', 'coding', 'fire']

function tellUsAboutYourself(thing1, thing2, thing3, thing4){
return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3} and ${thing4}.`
}

const paulIntro = tellUsAboutYourself.bind(yourObject);
paulIntro(...thingsYouEnjoy);

// tellUsAboutYourself.call(yourObject, ...thingsYouEnjoy );

// tellUsAboutYourself.apply(yourObject, thingsYouEnjoy);

