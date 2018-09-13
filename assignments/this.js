/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding object will be in objects found in the console.
* 2. Explicit binding is used when apply method is used.
* 3. Implicit binding is the object before a dot(.). (this.age)
* 4. New binding is the specific time that and object is created and returned during a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function giveAge(age){
    console.log(this);
    return age;
}
giveAge(98);

// Principle 2

// code example for Implicit Binding

    myObj={
        callOut: 'Over here!'
        sayName: function(name) {
            console.log($ `{this.callOut} Hey I am ${this.name}`);
            console.log(this);

        }
    };
myObj.sayName('Ronni!')


// Principle 3

// code example for New Binding

function excitedPerson(person){
    this.greeting='Howdy';
    this.person=person;
    this.speak=function(){
        console.log(this.person+this.person);
        console.log(this);
    };
}

const Woody= new excitedPerson('Partner');
const Buzz = new excitedPerson('Howdy?');

Buzz.speak();
Buzz.speak();

// Principle 4

// code example for Explicit Binding