/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: The 'THIS' keyword follows the rules of different scopes so it must be defined in a funciton and cannot be used outside of it.
* 2. Implicit binding: When using dot notation in a function the object before the dot become 'THIS' 
* 3. New Binding: When a function returns an object the keys in the object have to be proceeded with 'new.'
* 4. Explicit Binding: When using call or apply 'this' is got to be defined immediately.
*
* write out a code example of each explanation above
*/

// Principle 1

function myName(name) {
    console.log(this);
    return name;
}

myName('Jbarz');

// Principle 2

const myObj = {
    assignment: 'project',
    myName: function (name){
        console.log('Im ${name} and im working on the ${this.assignment}');
        console.log(this);
    }
};

myObj.myName('Jabari');

// Principle 3

function ThatMe(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
    const Jabari = new ThatMe('Jabari');
    const Jbarz = new ThatMe('Jbarz');

    Jabari.speak();
    Jbarz.speak();



// Principle 4

  function MyName(name,assignment){
    this.name = Jbarz;
    this.assignment = JSIII;
  }

  function Allwork(name, assignment){
    MyName.call(this,name,assignment);
    

  }

