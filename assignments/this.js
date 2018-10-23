/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window Binding:-
-- When using this in a local scope function then consoling the object, it will print the whatever you invoke the function outside the scope ( in the global scope). So this will always indicate into something specific 
and if there is nothing to point at . This will point out the window(live broweser).

* 2. Implicit or (Automatic) Binding:-
--It basically refers to the object before the dot. so for an example,
instead of calling the object by ( myObj.key) you can use (this.key).
and it is useful to use incase the object's name gets changed. it is more dynamic.

* 3. New Binding:-
--It is a keyword that is used to creat a new object inside of constructor functions(Always).

* 4. explicit binding -functions/ 
-- It occures when one of the three methods are being used on a function. blind(),call(), apply().

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function anyThing(animal) {
    console.log(this);
    return animal;
  }
  console.log(anyThing("DOG"));

// Principle 2

// code example for Implicit Binding
const lambdaSchool = {
    instructor : 'Cameron',
    pm : 'Austin',
    ceo : 'Allred',
    awesomeness : '100%',
    level : function () {
        console.log(`${this.pm} is ${this.awesomeness} man`)
    }

}
lambdaSchool.level();
// Principle 3

// code example for New Binding
function Users(user1,user2) {
    this.user1 = user1;
    this.user2 = user2;
    this.speak = function () {
        console.log(`${this.user1} is awsome ${this.user2} is a brat`)
    }
}
const users = new Users('Mustafa','Monty');
console.log(users);

// Principle 4

// code example for Explicit Binding
const pets = {
    combine: function() {
        return `${this.name} is a ${this.type}`;
    }
}
const pet1 = {
    name:"Rocko",
    type: "Husky",
}
const pet2 = {
    name:"Mary",
    type: "Pug",
}
console.log(pets.combine.call(pet1));
