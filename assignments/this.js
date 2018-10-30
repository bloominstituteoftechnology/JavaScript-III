/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global
* 2. with an object (implicit binding)
* 3. when creating a new object from a constructor
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let newObj = {
    name: 'Duke',
    whatIsThis: function() {
      console.log(this);
    }
  }
  newObj.whatIsThis();

// Principle 3
// code example for New Binding
function Dog (name, breed) {
    this.name = name,
    this.breed = breed,
    this.sayName = function (sound) {
        console.log(`My name is ${this.name}. I am a ${this.breed}. I say ${sound}`);
    }
}
let Duke = new Dog('Duke', 'pointer');
let Lady = new Dog('Lady', 'greyhound');
Duke.sayName();

// Principle 4
// code example for Explicit Binding
//.bind
let func = Duke.sayName.bind(Lady);
func();

//.call
Duke.sayName.call(Lady, 'woof');

//.apply
let arr = ['a', 'b']
Duke.sayName.apply(Lady, arr);
Duke.sayName.apply(Duke, arr);

