/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding
 *    The window binding is when you (often times accidentally) direct the "this" keyword to refer to the Window object. For instance,
 *    if you were to write a function in the global scope that did not "use strict" and that had a console.log(this), the "this" would
 *    refer to the window object. You typically don't want this to happen.
 *
 * 2. Implicit Binding
 *    Implicit binding is when you bind this inside of an object; the this keyword will then bind to the object in questions, such
 *    as when you are creating a key-value pair in a constructor function with this.name = attributes.name. It is important to note
 *    that, when building objectmethods (inside of a constructor function), you have to use a normal ES5 function istead of an ES6 arrow function. If
 *    you use an arrow, the "this" keyword inside of the method will bind a level above the constructor function (or any function when
 *    it's used).
 *
 * 3. Explicit Binding
 *    Explicit binding is when we specifically use .bind(), .call(), .apply(), or otherwise specifically connect the "this" phrase with an object or element.
 *    For example, this is often used in Pseudo-Classical Prototype Inheritance to connect a parent constructor function with a child one.
 *
 * 4. New Binding
 *    The New binding is used to instantiate objects through a constructor function. Through this process, there is a lot more going on than just object
 *    creation; any methods on the current prototype chain are then available to the new object, and any "this" keywords inside of the methods will bind to
 *    that object when the object calls them. This is because these objects are instances of their parent constuctor function, bound together by "new."
 *
 * write out a code example of each explanation above
 */

// Principle 1 - Window Binding

function windowBinding() {
  console.log(this); // The this is bound to the window in this instance. NOT a good thing to do.
}
windowBinding();

// Principle 2 - Implicit Binding

const implicitExample = {
  name: "The Dude",
  phrase: "That's just like, your opinion, man",
  statement: function() {
    console.log(`${this.name} abides.`); // The this is bound to the implicitExample object implicitly
  }
};
implicitExample.statement();

// Principle 3 - Explicit Binding

function ForceUser(attributes) {
  this.lightsaberColor = attributes.lightsaberColor;
  this.birthplace = attributes.birthplace;
  this.feels = attributes.feels;
}
ForceUser.prototype.feeling = function() {
  return `I have a ${this.feels} about this.`;
};

function Sith(sithAttributes) {
  ForceUser.call(this, sithAttributes); // Explicitly binding here
  this.enemies = sithAttributes.enemies;
}
Sith.prototype = Object.create(ForceUser.prototype); // Explicitly binding here
Sith.prototype.catchPhrase = function() {
  return `From my point of view the ${this.enemies} are evil!`;
};

// Principle 4 - New Keyword Binding

const darthVader = new Sith({
  // Binding using the "new" keyword here
  lightsaberColor: "Red",
  birthplace: "Tatooine",
  feels: "bad",
  enemies: "Jedi"
});
console.log(darthVader.feeling());
console.log(darthVader.catchPhrase());
