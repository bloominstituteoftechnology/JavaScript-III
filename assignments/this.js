/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when in the global scope, this refers to the window object.
* 2. implicit- when a function is called with a dot, this refers to whatever is to the left of the dot.
* 3. explicit- whenever the javascript method call or apply is used, the first argument is what this is referring to.
* 4.  new - whenever a constructor function is used, this refers to the object created with the function.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function helloWorld(planet) {
    console.log(this); 
    return 'hi ' + planet//? 
};

helloWorld("earth"); //?


// Principle 2
// code example for Implicit Binding

const person = {
    'language': 'javascript',
    'type': 'programmer', 
    'code': function(name) {
        return `${name} can code in ${this.language}!`; //? 
    }
}

person.code('josh'); //? 


// Principle 3
// code example for New Binding
function ninjaAttack(enemy) {
this.scream = "HiYAAAA! "
this.enemy = enemy;
this.kick = function() {
  return this.scream + this.enemy + ' was kicked!';
}
}

const redNinja = new ninjaAttack('bad guy'); //?
// Principle 4
redNinja.kick(); //?
// code example for Explicit Binding

function Car(object) {
    this.color = object.color;
    this.wheels = object.wheels;
    this.convertible = object.convertible;
    this.engine = object.engine;
    this.startEngine = function () {
     return `Zoom Zoooom, engine is running!`;
    }
}

const mazda = new Car({color:'red', wheels: 4, convertible: true, engine: 'v8' });
mazda.startEngine(); //? 