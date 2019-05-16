/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding---When in the global scope, the value of “this” will be the window/console Object 
* 2. Implicit Binding---Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New binding---Whenever a constructor function is used
* 4. Explicit Binding---Whenever call or apply method is used, this is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1---Window/Global Object Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Shire");
  

// Principle 2---Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ian');
  

// Principle 3---New binding
class mackDaddy {
    constructor(greeter) {
        this.greeting = 'Hello ';
        this.greeter = greeter;
        this.speak = function () {
            console.log(this.greeting + this.greeter);
            console.log(this);
        };
    }
}

const eminem = new mackDaddy('Slim');
const iceCube = new mackDaddy('Shady');

eminem.speak();
iceCube.speak();

// Principle 4---Explicit Binding

eminem.speak.call(iceCube); iceCube.speak.apply(eminem);