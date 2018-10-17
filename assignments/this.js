/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding (default because the window itself is an object)
* 2. implicit binding (for object methods)
* 3. explicit binding (for functions)
* 4. new key word binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
this;

// Principle 2
// code example for Implicit Binding

const obj = {
  firstName: "ben",
  lastName: 'tsao',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
obj.fullName();
let x = obj.fullName.call(obj);

// Principle 3
// code example for New Binding

function CordialPerson(greeter){
    this.greeter = greeter;
    this.greeting ='Hello';
    this.speak = function(){
        console.log(`${this.greeting} ${this.greeter}`);
    }
};
const jerry = new CordialPerson('newman');
console.log(jerry);
// Principle 4
// code example for Explicit Binding

const me = {
    name: 'ben',
    age: 99
};

const myskills =['confused','lurk','question mark'];
function introduce(skill1,skill2,skill3){
    console.log(`Hai! I'm ${this.name} and these are my skills: ${skill1}, ${skill2}, ${skill3}`);
};
introduce.apply(me,myskills);
