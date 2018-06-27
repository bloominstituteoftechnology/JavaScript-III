/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - .this would default to windows object , no other rules apply
* 2. implicit - occurs when dot notation is used to invoke a function
* 3. explicit - forcing a function call using a particular object
* 4. new - brings up a new object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var sayAge = function() {
  console.log(this.age);
};

var me = {
  age: 25
};

sayAge();
window.age = 35;
sayAge();

// Principle 2

// code example for Implicit Binding

var myObject = function () {
  this.name = 'MyObjectName';
  this.myProperty = 'property';
};

MyObject.prototype.doStuff = function (action) {
  console.log(this.name + ' is ' + action + '!');
}

var obj = new MyObject();

obj.doStuff('awesome'); // prints 'MyObjectName is awesome!'

// Principle 3

// code example for New Binding
function foo(p1,p2) {
  this.val = p1 + p2;
}
var bar = foo.bind(null,"p1");

var baz= new bar ("p2");

baz.val; //p1p2

// Principle 4

// code example for Explicit Binding

function foo(){
  console.log(this.a);
}

var obj = {
  a :2
};

var bar = function() {
  foo.call(obj);
};

bar(); //2
setTimeout (bar , 100); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2
