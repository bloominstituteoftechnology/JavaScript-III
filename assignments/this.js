/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or global object binding. In the browser "this" will be bound to the window object, while in node, "this" will be bound to the global object.
* 2. Implicit binding, "this" is the object before the dot and called function.
* 3. New keword binding, "this" refers to the instance of an object returned by a constructor function.
* 4. Explicit binding, uses the js call and apply methods to pass the value of "this" to another.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function doSomething(action) {
  console.log(this);
  return action;
}

// Principle 2

// code example for Implicit Binding
const obj = {
  name: 'Lee',
  gender: 'male',
  age: 32,
  info: function (name) {
    console.log(`${name} is a ${this.age} year old ${this.gender}`);
  }
}

// Principle 3

// code example for New Binding
function MobileDevice(model, os, provider) {
  this.model = model;
  this.os = os;
  this.provider = provider;
  this.info = function () {
    console.log(`This mobile device is a ${this.model} on ${this.os} with service from ${this.provider}`);
  }
}

const iphone = new MobileDevice('iPhone X', 'iOS', 'AT&T');
const pixel = new MobileDevice('Google Pixel 2', 'Android', 'Verizon');

iphone.info();
pixel.info();

// Principle 4

// code example for Explicit Binding
iphone.info.call(pixel);
pixel.info.apply(iphone);
