/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* The value of this depends on where it is invoked, not where it was defined (or originally typed into the code).
*
*
* 1. Window Binding: 
* 2. Implicit Binding: 
* 3. Explicit Binding: 
* 4. new Binding: 
*
* write out a code example of each explanation above
*/

// Principle 1 When this is declared in global or window, its output is undefined (even when this is defined in a function, since it doesn't matter where this is defined).

// code example for Window Binding

// Currently we are inside global
    function backpack() {
      console.log(this.outerspace);
    }
    let outerspace = '🌌';
    // we are still in global
    backpack(); // output is undefined since this was invoked in the global arena. There is nothing before or after the backpack.


// Principle 2: Implicit Binding this refers to the object that is calling the function.

// code example for Implicit Binding

let planet = {
  name: 'Earth',
  space: '🌌',
  backpack() {
    console.log(this.space)
  },
}

planet.backpack();    // Output is 🌌 since with Implicit Binding this refers to whatever is to the left of backpack, which here is the object planet.

// Principle 3: new creates an object and if arguments are passed into it (e.g., below are ('Gemma', 'Brooklyn', '🌌')) those arguments are bound to the parameters in the Constructor function (as long as the constructor function used the following syntax: this.param = param;        Methods, which should be created outside of the constructor function are will also be bound, e.g., dreamsOf below)


// Binding binds everything inside the constructor function to the 

// code example for New Binding

const Child = function (name, city, dream) {
  // this binds everything inside brackets
  this.name = name;
  this.city = city;
  this.dream = dream;
}

const gemma = new Child ('Gemma', 'Brooklyn', '🌌');

console.log(gemma); // Child { name: 'Gemma', city: 'Brooklyn', dream: '🌌' }

Child.prototype.dreamsOf = function() {
  console.log(`${this.name} dreams of ${this.dream}`) 
}

gemma.dreamsOf();   // Gemma dreams of 🌌


// Principle 4

// code example for Explicit Binding

// Explicit Binding with .call .apply, & .Binding

// .call, the first argument is the this context.
// .call the second through nth argument can be used as parameters in a method 
// .call the spread operator can be applied instead of listing each argument individually.

// .apply the first argument is the this context.
// .apply the second argument can be an array of all the parameters.

//. bind acts the same way as .call, EXCEPT the function is not immediately invoked. Best practices .binds should be assigned to a variable so that variable can be called later.

const anna = {
  name: 'Anna',
  age: 16,
}



const sayName = function(hob1, hob2, hob3){
  console.log(`My name is ${this.name}.`);
};

sayName.call(anna);   // Explicit with call.  Anna is the context of this.


// --------------------------------------

const sayName2 = function(hob1, hob2, hob3){
  console.log(`My name is ${this.name} and I like: ${hob1}, ${hob2}, ${hob3}.`);
};

const hobbies = ['singing', 'eating chocolate', 'finding true love'];

sayName2.call(anna, hobbies[0], hobbies[1], hobbies[2]);   // Explicit with call and additional arguments. Anna is the context of this.
sayName2.call(anna, ...hobbies);   // Explicit with call and spread operators.  Anna is the context of this.

// --------------------------------------

const sayName3 = function(hob1, hob2, hob3){
  console.log(`My name is ${this.name} and I like: ${hob1}, ${hob2}, ${hob3}.`);
};


sayName3.apply(anna, hobbies);   // Explicit with apply.  Anna is the context of this.

// --------------------------------------

const sayName4 = function(hob1, hob2, hob3){
  console.log(`My name is ${this.name} and I like: ${hob1}, ${hob2}, ${hob3}.`);
};


const boundFn = sayName4.bind(anna, ...hobbies);   // Explicit with bind. Nothing has been invoked.  Anna is the context of this.
console.log('Invoke boundFn now!');
boundFn();


