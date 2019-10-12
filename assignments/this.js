0/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global scope is a window
* 2. impliciti bilding
* 3. new 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
function sing(singer) {

    console.log(this);
    return name;
  }
  sing();
// code example for Window Binding


// Principle 2
const myCar = {
    star: 'tur on',
    secondStep: function( pushAc) {
      console.log(`${this.star} im ready ${pushAc}`);
      console.log(this);
    }
  };
  myCar.secondStep('Go');
// code example for Implicit Binding

// Principle 3
const makeOrder = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Ryan' };
  const you = { name: 'Freddy' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  // Invoke Methods on our objects
  me.sayName();
  you.sayName();
// code example for New Binding

// Principle 4

// code example for Explicit Binding