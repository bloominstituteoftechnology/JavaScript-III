/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding is when the this keyword defaults to referring to the
      scope in which it is called. If it can't find a proper value to bind to
      locally, it progresses upwards in scope until it does, or ends up
      within the global namespace
* 2. Explicit binding is when we specifically dictate to which scope we'd like
      the this keyword to bind to. We can do this with .call(), .apply() or
      .bind()
* 3. new Binding is when we create an oject using the new keyword and the
      constructor function makes it so that this refers to the scope within
      the newly created variable.
* 4. Window binding is when the this keyword is within the global namespace,
      which usually has some definition for this, potentially undefined. In this
      case, the this keyword could refer to the browser window object, or a
      console window.
*
* write out a code example of each explanation above
*/

// Principle 1

this.name = "Alex";
console.log(this.name);

// Principle 2

// code example for Implicit Binding
function outer(nameIn, ageIn) {
  let person = {
    name : nameIn,
    age : ageIn,
    sayName : function () {
      console.log(`My name is ${this.name}`);
    },
    sayAge : function () {
      console.log(`I am ${this.name} years old`);
    }
  }

  return person;
}

// Principle 3

// code example for New Binding

function Band(members) {
  this.guitarPlayer = members.guitarPlayer;
  this.bassPlayer = members.bassPlayer;
  this.drummer = members.drummer;
}

let thePolice = new Band({
  guitarPlayer : 'Andy Summers',
  bassPlayer : 'Sting',
  drummer : 'Stewart Copeland'
})


// Principle 4

// code example for Explicit Binding

let person = function (name, age) {
  return {
    name : name,
    age  : age,
    sayName : function () {
      console.log(this.name);
    },
    mother : {
      name : "Wendy",
      sayName : function () {
        console.log(`My name truly is ${this.name}`);
      }
    }
  };
};

let steve = person("Steve", "25");
steve.sayName();
steve.mother.sayName();
steve.sayName.call(steve.mother);
steve.mother.sayName.call(steve);
let steveMom = steve.mother.sayName.bind(steve);
steveMom();
