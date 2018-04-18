/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global Binding: this is assigned to the console
* 2. Implicit Binding: anything left of the dot is this
* 3. New Binding: with the new keyword a constructor creates a new object
* 4. Explicit Binding: this is defined with .call or .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myCat(name){
  console.log(this);
  return name;
}
myCat('Grimm');
// Principle 2

// code example for Implicit Binding
const myPet = {
  name: 'Grimm',
  sayMeow: function(animal) {
    console.log('${this.name}' is a '${this.animal}');
    console.log(this);
  }
};
myPet('Cat');
// Principle 3

// code example for New Binding
function Child(talker) {
  this.yelling = 'Mommy!';
  this.talker = talker;
  this.say = function() {
    console.log(this.yelling + this.talker);
    console.log(this);
  };
}

const girl = new Child('Lucas');
const boy = new Child('Lydia');

girl.speak();
girl.speak();

// Principle 4

// code example for Explicit Binding
// Call
let dog = {
  name: 'Hank',
  age: 1;
};

let myDog = function(trick1, trick2) {
  console.log('My dog,' + this.name + 'can do tricks like' 'trick1 ' + and +' trick2');
}

let tricks = ['sit', 'shake'];

myDog.call(dog, tricks)

//Apply
let dog = {
  name: 'Hank',
  age: 1;
};

let myDog = function(trick1, trick2) {
  console.log('My dog,' + this.name + 'can do tricks like' 'trick1 ' + and +' trick2');
}

let tricks = ['sit', 'shake'];

myDog.apply(dog, tricks)
