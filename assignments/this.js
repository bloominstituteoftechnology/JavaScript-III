/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding = Calling this from the Global scope (ie: from within a function where it has 
    global scope..without having binded the value, returns the value of the window object (and everything in it)

* 2. Implicit Binding = when using this. on whatever function or variable you are invoking.. the dot . signifies 
that the THIS refers to whatever object it was called from within

* 3. New Binding = the new keyword instantiates a new instance of a constructor function , then THIS refers to the 
specific instance of the constructor function that was instantiated: 

    ie: const jerry = new CordialPerson('Newman') ... now whenever we are invoking jerry with this, this knows it's
    jerry.. not the this on the constructor function itself 

* 4. Explicit Binding = Overrides the property values from a constructor function by explicily calling them with
a different context using the apply() or call () methods.. ie: 

    jerry.speak.call(newman);  //jerry.speak will now access newman.speak instead of its own
    newman.speak.apply(jerry); //newman.speak will now access jerry.speak instead of its own



*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const favePizza = (pizza) => {
    console.log(this);
    return pizza;
}

favePizza('Canadian Bacon and Pineapple');



// Principle 2

// code example for Implicit Binding

// function Animal (name, type, age) {
//     this.name = name;
//     this.type = type;
//     this.age = age; 
// }

let Animal = function (name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.greeting = "Meow"
    this.speak = () => {
        return `${this.greeting}, i'm ${this.name}`
    }
}


// Principle 3

let polly = new Animal('Polly', 'Cat', 3)

console.log(polly.age)
console.log(polly.speak())



// code example for New Binding

// Principle 4

const thingsPollyLikes = ['Climbing trees', 'Sleeping', 'Purring', 'Scaring birds', 'Scratching the couch']

function likes(like1, like2, like3, like4, like5) {
    console.log(`I like ${like1}, ${like2}, ${like3}, ${like4} and ${like5}! `)
}

// code example for Explicit Binding

likes.call(polly, ...thingsPollyLikes);

//or

likes.apply(polly, thingsPollyLikes)