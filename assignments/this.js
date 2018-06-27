/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The this keyword always trys to reference to the window object. Outside of any function, the this keyword refers to the window object (global object).
* 2. The this keyword can be implicity bound to whatever is left of of the invocation
* 3. The this keyword can be explicitly bound to one context or another through the use of .call or .apply
* 4. When a function is used as a constructor with the new keyword (to create a new object instance), the this key
keyword will be bound to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayName(name) {
    console.log(this.name)
}
console.log(sayName('keegan'))// undefined because this is bound to the window which has no value for the name property
console.log(this) // points to the window object

// Principle 2
// code example for Implicit Binding
const user = {
    'name': 'keegan',
    sayHello: function() {
        return `Hello, ${this.name.toUpperCase()}!`;
    }
}
console.log(user.sayHello())

// Principle 3
// code example for New Binding
function User(userAttr) {
    this.name = userAttr.name;
    this.age = userAttr.age;
}
const jerry = new User({
    'name': 'Jerry',
    'age': 22,
})
console.log(jerry)

// Principle 4

// code example for Explicit Binding
const myObject = {
  'name': 'Jim',
  'age': 30
}

const skills = ['HTML','CSS','JS'];

function sayName(skill1, skill2, skill3) {
  console.log(`My name is: ${this.name} and I like to program using these skills: ${skill1}, ${skill2}, ${skill3} `);
}

// Call, passes this and parameter
sayName.call(myObject, skills[0], skills[1], skills[2]);
// using spread
sayName.call(myObject, ...skills);