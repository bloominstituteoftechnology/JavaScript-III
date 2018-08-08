/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the value of this inside of that function body will be the           global object, or the window object in most cases.
* 2. Whenever an object is preceeded by a dot, the object before the dot is the context of the "this" keyword.
* 3. Whenever a contructor function is used to create an object the "this" keyword refers to the specific instance of that      object.
    Note: The "new" keyword in JS makes a standard function into a constructor function.
* 4. Whenever JS .call() or .apply() methods are used, the "this" keyword is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const name = "John Wayne";
const john = {
  name: 'John Lennon',
  speak: () => {
    console.log(`My name is ${name}`)
  }
}
console.log(john.speak());
// explantion: Since the speak method is using an arrow function the "this" keyword is set to the global object thus it picks up the name variable which is set to "John Wayne" rather than the name variable inside of the john Object which is set to "John Lennon".

// Principle 2
// code example for Implicit Binding
const john2 = {
  name: 'Brian Ruff',
  speak: function(){
    console.log("This", this);
    console.log(`My name is ${this.name}.`);
  }
}
console.log(john2.speak());
// explanation: Here the .speak()'s method "this" refers to the object john2. It then access the name property on that function. JS is able to keep tract of the "this" in this case because we are not using arrow functions which has it's own this. Instead, john2 is initiated and creates a this with the scope of the object, and we do not over write it at anypoint with ES6 content. Since the this isn't set to anything else, we can tell what the this is via looking to the left of the decimal in the "john2.speak()" method call. From my readings, most cases of binding can be determined using implicit binding identification rules.

// Principle 3
// code example for New Binding
function NBAPlayer(name, age, highestPPGAvg){
  this.name = name;
  this.age = age;
  this.highestPPGAvg = highestPPGAvg;
  this.stats = function(){
    console.log('This', this);
    return `Player name: ${this.name}, Player Age: ${age}, Player highest PPG in a given season: ${this.highestPPGAvg}`;
  }
}
let lbj = new NBAPlayer('Lebron James', 33, 30.0);
let mj = new NBAPlayer('Michael Jordan', 50, 37.1);
console.log(lbj.stats());
console.log(mj.stats());
// explanation: Here I instantiate an object using a function named NBAPlayer with a function signature of 3 parameters.
// I then added a stats method to the function which summarizes the parameters passed in. The "this" keyword for each NBAPlayer is unique to that player becase it refers to the specific instance of NBAPlayer which is created when I instantiate the object on lines 47 and 48 with the "new" keyword. Interestingly, the stats function has a closure of NBAPlayer due to using variables passed (from the parameters in the function signature) in the NBAPlayer function body

// Principle 4
// code example for Explicit Binding
const lbjNowHasMJsInfo = lbj.stats.bind(mj);
console.log(lbjNowHasMJsInfo());
// explanation: Here, we take the lbj object and access the .stats method and rebind the "this" keyword inside of the
// .stats function body so that it now uses the information generated from the mj object. Now, lbj has the stats the he
// always wished for :-P!!