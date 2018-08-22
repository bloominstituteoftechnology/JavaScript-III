/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the default without the this keyword used, global. 
* 2. Implicit binding occurs when dot notation is used to invoke a function.
* 3. New Binding occurs when the new keyword is used to build a new instance, binding `this` to to the new object.
* 4. Explicit binding occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name){
    console.log(this);
    return name;
};
sayName("Jonathan");


// Principle 2

// code example for Implicit Binding
const myObject = {
    name: 'Jonathan',
    foods: function(food1, food2) {
        console.log(`${this.name} loves to eat ${food1} and ${food2}`);
    }
};
myObject.foods('pizza', 'chili');


// Principle 3

// code example for New Binding
const Hero = function(name, prof, race) {
    this.name = name;
    this.prof = prof;
    this.race = race;
};

const Orc = new Hero('Valrkirin', 'Warrior', 'Orc');
console.log(Orc);


// Principle 4

// code example for Explicit Binding
function sayHi(){
    console.log(`Hi ${this.name}`);
};
const name1 = {
    name: 'Val'
};
sayHi.call(name1);