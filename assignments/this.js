/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This is when the binding is not explictly implied, as a result the window becomes what it binds to.

* 2. The this keyword refers to an object when a function is being called by a proceeding dot. 

* 3. New Binding uses the new keyword and when it's used, the this keyword is tied to the new keyword and the new keyword is used to create a new object.

* 4. Explicit binding allows a function to use the this key word as a argument to call an object.
*
* write out a code example of each explanation above
*/

// Principle 1
// Window Binding

 function hollerAt(salutations) {
  console.log(this);
  return salutations;
}
hollerAt("As Salaamu Alaikum");

// Principle 2
// code example for Implicit Binding
    const newGreet = {
        oldphrase: 'Whats up',
        newGreetings: function(name) {
            console.log(`${name} used to say ${this.oldphrase}`);
            console.log(this);  // to show the value of the this keyword
        }
    };
    newGreet.newGreetings('Abdul Qadir');

   const sayHelloMashup = function (obj) {
        obj.sayHello = function() {
            console.log(this.name);
        };
    };

    const him = {
        name: "Ahmed",
        race: "Arab"
    };

    const her = {
        name: "Fatima",
        race: "Ethiopian"
    };

    sayHelloMashup(him);
    sayHelloMashup(her);

    him.sayHello();
    her.sayHello();




// Principle 3

// code example for New Binding

const Person = function(color, name, gender) {
    this.color = color;
    this.name = name;
    this.gender = gender
};


const Greg = new Person("black", "Abdul", "Male");


// Principle 4

// code example for Explicit Binding

const sayAge = function () {
    console.log("My age is " + this.age + " and my name is " + this.name);
}; 

const Abdul = {
    name: 'Abdul Qadir',
    age: 46
};

sayAge.call(Abdul);
