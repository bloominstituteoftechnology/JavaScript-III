/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window/Global Object Binding 
*
*    In the [global scope], the value of “this” is the [window] or [undefined].
*    Is the function called in the global scope?
*         - If strict mode is enabled, return undefined.
*         - Otherwise, return the global object, ie: window.
*
* 2. Principle 2: Implicit Binding
*
*    A function is called by a preceding dot, the object bto the left of the dot is "this."
*
* 3. Principle 3: New binding
*
*    Relevant with constructor functions, "this" refers to the specific instance of the 
*    object that is created (parameter) and returned by the constructor function.
*
* 4. Principle 4: Explicit binding 
*
*    Whenever JavaScript’s .call .apply or .bind allow us to explicitly state what the 'this' 
*    keyword will be in any given fucntion:
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log('---- window binding ----' + '\n');
function carName(name) {
    console.log(this);
    return name;
  }
  carName("Alfa Romeo");

// Principle 2

// code example for Implicit Binding
console.log('\n' + '---- Implicit Binding ----' + '\n');

var me = {
  name: 'Melvin',
  age: 24,
  sayName: function() {
    console.log(this.name);
  }
};

me.sayName(); // 'me' is 'this' -- Implicit Binding.

// Principle 3

// code example for New Binding

console.log('\n' + '---- new Binding ----' + '\n');

var Animal = function(color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

console.log(zebra.color); 

// Principle 4

// code example for Explicit Binding
console.log('\n' + '---- Explicit Binding ----' + '\n');

var sayName = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3); // this references jamilex
  };
  
  var jamilex = {
    name: 'Jamilex',
    age: 18
  };
  
  var melvin = {
    name: 'Melvin',
    age: 24
  };
  
  var languages = ['JavaScript', 'Ruby', 'Python'];
  var languages2 = ['JavaScript', 'Java', 'Python'];
  
  console.log('\n' + 'using .call ----' + '\n');
  sayName.call(jamilex, languages[0], languages[1], languages[2]); 
  
  console.log('\n' + 'using .bind ----' + '\n');
  var newFn = sayName.bind(melvin, languages2[0], languages2[1], languages2[2]); 
  newFn();