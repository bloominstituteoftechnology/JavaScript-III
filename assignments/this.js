/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - the default binding of the this keyword if not specified. Not the best behavior!
* 2. Implicit Binding - Binding for objects. The this keyword is bound to what is left of the . when    calling a property or method from an object.
* 3. Explicit Bind - Use with functions to Explicitly set the this keyword using function methods:
    call(), apply(), and bind().
* 4. new Binding - the new keyword implicitly binds a new instance of a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name;

// Principle 2

// code example for Implicit Binding
const gary = {
  name: 'Gary',
  age: 40,
  favLang: 'JavaScript',
  talk: function() {
    return `Hi, I'm ${this.name} and my favorite programing language is ${
      this.favLang
    }`;
  }
};

console.log(gary.talk());

// Principle 3

// code example for New Binding
function Employee({ name, age, role }) {
  this.name = name;
  this.age = age;
  this.role = role;
}

Employee.prototype.introduction = function() {
  return `Hi I am ${this.name} and I am the ${
    this.role
  } at Dunder__proto__ Paper Company`;
};

const michael = new Employee({
  name: 'Michael',
  age: 45,
  role: 'Regional Manager'
});

console.log(michael.role);
console.log(michael.introduction());

// Principle 4

// code example for Explicit Binding

const pam = {
  name: 'Pam',
  role: 'Receptionist'
};

function sayName(person) {
  return `Hi I'm ${this.name} and I'm the ${this.role}`;
}

console.log(sayName.call(pam));
