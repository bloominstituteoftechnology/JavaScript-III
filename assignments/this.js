/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit- Implict binding is when the 'this' keyword is attached to an object that 
it is currently nested in. When using dot notation, it is the item to the left of 'this'
It specifies that 'this' lives in the object directly to the left of it.
* 2. Explicit Binding- Created when we use the keywords apply, call, or bind. Basically allows us
to attach a variable, containing an object, into an external function. 'this' then refers to
the values of the variable that has been passed in as the first parameter in call, apply, or bind.
* 3. New Binding - Used with a constructor function. Allows us to create new classes as a variable, and once
passed into the function, become the reference point for the 'this' keyword.

* 4. Window Binding - When no implicit binding is specified, and no new or explicit bindings are 
created, the this keyword continues to zoom out and attaches itself to the window object, which is the
container for all of the Javascript we code. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function howManyTacosCanIEat(tacos){
    console.log(this);
    return tacos;
}
howManyTacosCanIEat(23)

// Principle 2

// code example for Implicit Binding

const tacoEater = {
  name: "Rob",
  howManyTacosCanIEat: function(number){
    console.log(`My name is ${this.name}, and I can eat ${number} tacos`)
  }
};

tacoEater.howManyTacosCanIEat(23);

// Principle 3

// code example for New Binding

function TacoTime(name, number){
  this.name = name;
  this.number = number;
  this.howManyTacosCanIEat = function(){
    console.log(`My name is ${this.name}, and I can eat ${this.number} tacos!`);
  };
}

const RobsTacos = new TacoTime("Rob", 23);
const GuyFierrisTacos = new TacoTime("Guy Fierri", 12);

RobsTacos.howManyTacosCanIEat();
GuyFierrisTacos.howManyTacosCanIEat();


// Principle 4

// code example for Explicit Binding

  const howManyTacosCanIEat = function(){
    console.log(`My name is ${this.name}, and I can eat ${this.number} tacos!`);
  };

  const rob = {
    name: "Rob",
    number: "23",
  }

  const guy = {
    name: "Guy",
    number : 12,
  }

  howManyTacosCanIEat.apply(rob);
  howManyTacosCanIEat.call(guy);

  const guysTacos = howManyTacosCanIEat.bind(guy);
  guysTacos();