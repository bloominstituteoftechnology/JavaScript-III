/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding: This is where the this keyword is bound to the thing on the left of the dot. If you have this.<something> in a function or method. this refers to the object to the left ie: someObject.functionWithThisInIt() The this keyword refers to someObject.
* 2. Explicit binding: This applies to three methods. .call, .apply and .bind. These call calls a method with parameters. The first parameter in call is the object the method is being called on. The rest of the argmuents can be returned. Somehow. Related to call.
* .apply is similar to call, except the paramete in the .apply() method are more flexible.
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const thisObject = function(name) {
console.log(this);
return name;
}
thisObject('chad');

// Principle 2


// code example for Implicit Binding
const me = {
  'thing': 'this key word is referring to the me object',
    returnThing: function() {
      //this is referring to the me object
      console.log(this.thing);
    }
}
me.returnThing();



// Principle 3
function newPerson(name) {
  this.name = name,
  this.sound = 'Whaaaaa'
  this.cry = function() {
  console.log(`${this.name} is crying ${this.sound}!!`)
  }
}

const newBaby = new newPerson('goob')
newBaby.cry();
// code example for New Binding
//

// Principle 4
function spin(name) {
  console.log(`whaaaaaa ${name} is spinning!!`);
}

const person = {
  'name': 'chad'
}
// code example for Explicit Binding
spin.call(person);
//
