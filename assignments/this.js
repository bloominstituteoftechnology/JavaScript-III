/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. With window binding, 'this' is called at a global level and the closest obj it can refer to is the window.
* 2. With implicit binding, the context of 'this' is whatever is left of the dot.
* 3. With new a new object is created and the context for 'this' becomes the new object.
* 4. In explicit binding, the context for 'this' is assigned via .call, .apply, or .bind.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this.name);
// Principle 2

function Person(attr) {
    this.name = attr.name,
    this.age = attr.age,
    this.intro = function(){
        console.log (`My name is ${this.name} and I am ${this.age}`)
    }
};
//'This' refers to the Person object.

// Principle 3

const Abi = new Person({name:'Abi', age: 33});
Abi.intro(); // the 'this' in ${this.name} and ${this.age} now refers to the context of the Abi element.

// Principle 4

const sayHobbie = function(hobbie1, hobbie2, hobbie3){
    console.log(`My name is ${this.name} and I like to ${hobbie1}, ${hobbie2}, and ${hobbie3}.`)
};

const myHobbies = ['knit', 'crochet', 'program'];

const abiHobbies = sayHobbie.bind(Abi, ...myHobbies);
abiHobbies();