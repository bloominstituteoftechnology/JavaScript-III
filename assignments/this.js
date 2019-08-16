/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding refers to the entire environment from which JS acesses/controlled or influences.
* 2. Implicit Binding just means "this" keyword controlles this object specifically by prefacing the object name with a dot.
* 3. New Binding is used with Constructor functions because the function has not yet been declared thus it needs to have an after the fact scope.
* 4. Explicit binding is used in situations where the constructor function needs to be overidden.
*
* write out a code example of each explanation above
*/

// Principle 1
// Window/Global Object Binding
// code example for Window Binding

function randomFunc(item) {
  console.log(this);

  randomFunc(item);
}
//Calling "this" inside this random function has no restraints or specific bindings,
//thus its scope is absolute to all JS inside the Window//

// Principle 2
// Implicit Binding
// code example for Implicit Binding
const MyObject = function (){
   this.name = 'Pepperocinis';
   this.myProperty = 'property';
 };

 MyObject.prototype.echoIt = function (action) {
   console.log(this.name + ' are ' + action + '!');
 };

 let obj = new MyObject();

 obj.echoIt('amazing');

// Principle 3
// New binding
// code example for New Binding
const Movieline = function (){
   this.name = 'Neo says:';
   this.line = 'I thought this wasnt real?';
 };

 Movieline.prototype.newLine = function (script) {
   console.log(this.name + ' says ' + script + '!');
 };

 let script = new Movieline();

 script.morpheous('If your mind thinks its real then it is');


// Principle 4B
// Explicit Binding
// code example for Explicit Binding

const Surfer = {
    name: 'laird Hamilton',

};

 const equipment = ['surfboard', 'wetsuit', 'jetski'];

 function stuff(equipment1, equipment2, equipment3){
    console.log(`${this.name} Yo Brotha! "Those waves look dope, can you make sure my ${equipment1}, ${equipment2}, ${equipment3} is ready to go?.`);
}

 stuff.apply(surfer, equipment);
