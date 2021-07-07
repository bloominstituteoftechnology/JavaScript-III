/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of "this" in global scope refers to the windows object.
* 2. Whatever object is writen to the left of the dot is the context for the "this" in the function.
* 3. Whenever a constructor function is used, "this" refers to the 
specific instance of the object that is created and returned by the constructor function.
* 4. Whenever the call, apply, or bind method is used "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function getAddress(address) {
    console.log(this);
    return address;
  }
  getAddress("FL, Miami");

// Principle 2
// code example for Implicit Binding
const testResult = {
    greetPass: 'Congratulations',
    pass:'you passed the test!',
    sayResult: function(name) {
      console.log(`${this.greetPass} ${name}, ${this.pass}`);
      console.log(this);
    }
  };
 testResult.sayResult('Jeniffer');

// Principle 3
// code example for New Binding
const FirstObject = function (action){
    this.name = 'Ana';
    this.school = 'Lambda';
    this.intro = function () {
    console.log('My name is ' + this.name + ' and I am a ' + action +  ' at '+ this.school + '!');
  }
 };
  const obj = new FirstObject('student');
 const obj2 = new FirstObject('team lead');
 obj.intro();
 obj2.intro();
 
// Principle 4
// code example for Explicit Binding

function Hbday (name){
    this.greeting='Happy Birthday';
    this.name=name;
    this.speak = function(){
      console.log( this.greeting + ' '+ this.name)
    }
  }
  const ana = new Hbday('Ana');
  const pablo = new Hbday('Pablo');
  
  ana.speak.call(pablo);
  pablo.speak.apply(ana);
  
  ana.speak();
  pablo.speak();

  