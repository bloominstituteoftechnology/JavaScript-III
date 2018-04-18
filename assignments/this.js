/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding

        This principle states that if you invoke a function that uses the "this" keyword but doesn't have anything to the left of the dot, the "this" keyword is going to default to the window object.

* 2. Implicit Binding

        This principle says that whatever word or object you see when you look to the left of the dot, that is what the this keyword is referring to.

* 3. New Binding

        This principle says that when a function is invoked with the "new" keyword, the "this" keyword inside that function is bound to the new object being constructed by the constructor.

* 4. Explicit Binding

        This principle says that you can explicitly state what the keyword is by using .call, .apply, or .bind. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayName = function() {
    console.log(this.name);
  };
  
  const me = {
    name: 'Dante'
  };
  
  sayName();

// Principle 2

// code example for Implicit Binding

const userPaul = {
    'name': 'Paul',
    'email': 'pg@ycombinator.com',
    'company': 'Y Combinator',
    'saysHello': function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
}

console.log(userPaul.saysHello()); // The object userPaul is what the property saysHello is referring to. 

// Principle 3

// code example for New Binding

const Engineer = function(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary
  };
  
  const dante = new Engineer('Dante Cuales', 'Backend Developer', 'USD 100,000');
  
  console.log(dante);

// Principle 4

// code example for Explicit Binding

const saysHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
}

const userPaul = {
  'name': 'Paul',
  'email': 'pg@ycombinator.com',
  'company': 'Y Combinator',
}

saysHello.call(userPaul); 