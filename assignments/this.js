/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default. It's when this, the keyword, refers to the [global] window object.
* 2. Implicit binding is when this, the keyword, is binded incidentally to an object.
* 3. Explicit binding is when this, the keyword, is binded in plain text/code, i.e. with a function's bind method.
* 4. New binding is what occurs via the new keyword. The this keyword is binded via a constructor, essentially.
*
* write out a code example of each explanation above
*/

const obj = {
  attr: 'val',
  logVal: function() { console.log(this.attr + '\n') }
};

const Constructor = function(val) {
  this.attr = val;
  this.logVal = function() { console.log(this.attr + '\n') }
};

// Principle 1
// code example for Window Binding
(() => console.log('\nWindow object', this, '\n'))();

// Principle 2
// code example for Implicit Binding
(() => {
  console.log('implicit: ');
  const implicit = {...obj};
  implicit.logVal();
})();

// Principle 3
// code example for Explicit Binding
const explicit = (() => {
  const unbound = obj.logVal;
  const bound = unbound.bind(obj);
  console.log('w/o explicit: ');
  unbound();
  console.log('w/ explicit: ');
  bound();
})();

// Principle 4
// code example for New Binding
const newBinder = (() => {
  const newBinding = new Constructor('val');
  console.log('using new keyword: ');
  newBinding.logVal();
})();
