/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding - When in the global scope, the value of “this” will be the window.
* 2. Implicit Binding - Whenever a function is called by a preceding dot.
* 3. New binding - Whenever a constructor function is used.
* 4. Explicit binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function func(abc) {
    console.log( this );
    return abc;
}
func()

// Principle 2

// code example for Implicit Binding
const user = {
    firstName: 'Kseniya',
    lastName: 'Platonava',
    greeting: function(hi){
      console.log(`${hi} Dear ${this.firstName} ${this.lastName}`);
    }
}
  user.greeting('Good morning, ');

// Principle 3

// code example for New Binding
function Hello(phrase, person) {
    this.phrase = phrase;
    this.person = person;
  this.speak = function(){
      console.log(this.phrase +', '+ this.person);
  }
  }

  const anna = new Hello ( 'Good evening','Anna')
  const lisa = new Hello ('Good morning', 'Lisa')
  
  anna.speak();
  lisa.speak();
// Principle 4

// code example for Explicit Binding

function Employee (name, gender, age, title) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.tilte = title;
  }
  
  function Department(name, gender, age, title) {
    Employee.call(this, name, gender, age, title);
    this.category = 'department';
  }
  

  
  var hr = new Department ('Anna', 'f', 25, 'Manager');

console.log (hr);