/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window binding deals with global scope
* 2. Implicit binding is when a function is called as a method of an object
* 3. Explicit binding is when being used as a function method
* 4. New binding is when a function is being used as a constructor
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);
// Principle 2
// code example for Implicit Binding
const person = {
    'name': 'Alex',
    'game': 'Super Mario Odyssey',
    'play': function(game) {
        console.log(`${this.name} can play ${game} and ${this.game}`)
    }
}
person.play('BotW');
// Principle 3
// code example for New Binding
const personInfo = {
       'name': 'Steve'
     }
    
     const personality = ['funny', 'persistent'];
     const moreSkills = [' more HTML', 'CSS', 'JS'];
    
    
     function introduce(skills1, skills2, skills3){
       console.log(`Hello!  My name is: ${this.name} and I like to program in: ${skills1}, ${skills2}, ${skills3}`)
     }
    
     introduce.call(personInfo, ...skills);
     introduce.apply(personInfo, skills);
// Principle 4
// code example for Explicit Binding
function randomPerson(greeter){
    this.greeter = greeter;
    this.greeting = "Hello";
    this.speak = function() {
      console.log(`${this.greeting} ${this.greeter}`)
    }
  }
  
  const Steve = new randomPerson('Alex');
  const Alex = new randomPerson('Steve');
  
  console.log(Steve);
  console.log(Alex);
  
  Steve.speak();
  Alex.speak();