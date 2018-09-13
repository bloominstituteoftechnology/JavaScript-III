/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. By default 'this' attaches to window/global object.
* 2. If 'this' is called within object method scope, 'this' will attach to the object and look for property matches.
* 3. If the 'new' keyword is used, 'this' will default to the properties associated.
* 4. If .call(), .apply(), or .bind() are employed, the 'this' context is manually set. 
*
* write out a code example of each explanation above
*/

// Principle 1
this.name = "hello world";
 console.log(this.name);

// Principle 2

const Obj = {
  name: "Sam",
  food: "Steak",
  speak: () => {
      console.log(`${this.name} loves ${this.food}.`);
  }
}
Obj.speak();

// Principle 3
function Human(attributes){
  this.name = attributes.name;
  this.age = attributes.birthday;
}
const Sam = new Person ({
  name: "carlo",
  birthday: "June 25th"
})

// Principle 4

newObj.speak.call(obj);