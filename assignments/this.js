/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.car = "my car";

const thisTable = function() {
    console.log(`I am washing ${this.car}`)

};

thisTable.call(this)



// Principle 2

// code example for Implicit Binding
var me = {
    name: 'Andrew',
    age: 26,

    sayMe: function() {
        console.log(`Hello I am ${this.name}`);
    }
};
me.sayMe();


// Principle 3

// code example for New Binding
var sayHelloFriend = function(){
    console.log(`Hello friend whose name is ${this.friend}`)
}

var friendDylan = {
    friend: 'Dylan',
    age: 26
}

sayHelloFriend.call(friendDylan)

// Principle 4

let myAnimal ={
    name: 'Dog',
    age: 1,
    sound: 'bark'
    }

  function dogSound(){
    console.log(this.sound) 
  }

  let newDogSound = dogSound.bind(myAnimal);
  newDogSound();

// code example for Explicit Binding //git status

