/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: this points to the window when used in the global scope.
* 2. Implicit: this references the object to the left.
* 3. New: When using a constructor this refers to the object instance
* 4. Explicit: call, apply and bind. Methods used to explicitly point this
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function thisWindow(){
    console.log(this);
}

thisWindow();
// Principle 2

// code example for Implicit Binding

const myObj = {
    thing: "Ima say a thing",
    sayThing: function(){
        console.log(`I say: ${this.thing}`);
        console.log(this);
    }
}

myObj.sayThing();

// Principle 3

// code example for New Binding

function Parent(name, yells){
    this.name = name;
    this.yells = yells;
    this.yell = function(){
        console.log(`${this.name} yells ${this.yells}`);
        console.log(this);
    }
}

const mom = new Parent('Mom', 'go to your room!')
mom.yell();

// Principle 4

// code example for Explicit Binding

const Person = {
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const guy = {
    firstName: "Guy",
    lastName: "Fieri"
}

Person.fullName.call(guy);

//I'm actually not sure if this is a great example of explicit binding of this, but it uses the call function