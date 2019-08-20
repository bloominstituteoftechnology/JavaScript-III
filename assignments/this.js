/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The global object "this" pertains to when a programmer uses "this" in a global scope. It then refers to the consoled object in the global scope.
* 2. The second "this" is used more commonly used than the last. To use it one has to first declare an argument or a constant and when we use that argument or constant, and it belongs to the scope of a function, the "this" refers to that scope.
* 3. "this" is used with constructor functions as well. When the constructor function is finished and a new object is prepared under the parameters of that function this will refer back to the constructor function allowing the new object to use it's parameters.
* 4. The last "this" method has to do with the .Call() and .Apply() methods that belong to JS. When they are used the "this" is being strictly put on an argument.
*
* write out a code example of each explanation above
*/

// Principle 1
function CallMyName(name){
    console.log (this);
    return name;
}
CallMyName('alejandro')
// code example for Window Binding

// Principle 2
const someObj = {
    stuff : 'things',
    cosas : 'miscellaneous',
    room : function() {
      console.log(`I am under the impression that a pawn shop has many ${this.cosas} ${this.stuff} that it's owner does not know about.`);
      console.log(this);
    }
  }
  
  someObj.room();
// code example for Implicit Binding

// Principle 3
function ImplObj(person) {
    this.greeting = greeting;
    this.person = person;
    this.habla = function() {
        console.log(this.greeting + this.person +  n/'well hello there.');
        console.log(this);
    }
}
// code example for New Binding

// Principle 4

// code example for Explicit Binding