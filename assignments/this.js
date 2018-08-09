/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
    When a function is invoked, the "this" keyword refers to the object named to the left of the dot.
        e.g: newObj.speak
            In this example, any instance of "this" will refer to keys within the "newObj" object.

* 2. Explicit Binding
    When a function is created in the global scope, it can be called in the context of the desired object using the .call() property.
        e.g: speak.call(newObj, arg2, arg3)
            The first argument passed in is the object that "this" will reference.
    The .apply() property is similar, but will allow an array to be passed in as the second parameter, and will automatically parse through it.
    The .bind() property returns a new function with "this" bound to the object passed in, which we can invoke later (whereas call and apply immediately invoke the function).

* 3. new Binding
    When the "new" keyword is used to create invoke a function from a constructor object, "this" becomes bound to the new object.
        e.g.: let casey = new Person(arg1, arg2);
        The "this" keyword is now bound to the new "casey" object, created from the Person constructor.


* 4. Window/Global Binding
    When no other binding method is used, "this" defaults to the window/global scope.
*

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayWazzup(wazzup) {
   console.log(this.wazzup)
}

sayWazzup("wazzup");

// Principle 2

// code example for Implicit Binding

const myVillain = {
  'name': 'Loki',
  'age': 1000,
  'stab': function(knife1, knife2) {
    console.log( `${this.name} can stab you with ${knife1} and ${knife2} and it is sometimes effective. The demi-god has ${this.age} years of experience!`);
  }
}

// This keyword is BOUND upon invocation.
myVillain.stab("a dagger", "a butterknife");

// Principle 3

function Hero(nemesis) {
    this.greeting = "We meet again,";
    this.nemesis = nemesis;
    this.speak = function() {
      console.log( `${this.greeting} ${this.nemesis}`);
    }
  }
  
  const megamind = new Hero('Metro Man');
  const thor = new Hero('Hela');
  const casey = new Hero('Javascript');
  
  megamind.speak();
  thor.speak();
  casey.speak();

// Principle 4

// code example for Explicit Binding

const engineer = {
  'name': 'Scotty',
  'age': 40
}

const skills = ['beaming people up', 'givin her all she\'s got', 'being the only red shirt with plot armor'];

function introduce(skill1, skill2, skill3) {
  console.log(`My name is ${this.name} and I'm proficient in ${skill1}, ${skill2}, and ${skill3}`);
}

introduce.call(engineer, skills);
introduce.apply(engineer, skills);
let holdOn = introduce.bind(engineer, ...skills);
holdOn();
