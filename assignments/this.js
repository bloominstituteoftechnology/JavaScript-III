/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window:How a function is called
* 2. Implicit:Whatever is directly left of the of the invocation
* 3. Explicit:Calling from outside, uses call, apply and bind
* 4. New:Uses a constructor to build an object
*
* write out a code example of each explanation above
*/

// code example for Window Binding
// this.name ="Keith"

// function sayName(name) {
//   console.log(this.name)
// }


// code example for Implicit Binding
// const MyObject = function (){
//   this.name = 'MyObjectName';
//   this.myProperty = 'property';
// };
//
// MyObject.prototype.doStuff = function (action) {
//   console.log(this.name + ' is ' + action + '!');
// }
//
// var obj = new MyObject();
//
// obj.doStuff('awesome');

// code example for New Binding

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
//
// var car1 = new Car('Eagle', 'Talon TSi', 1993);
//
// console.log(car1.make);

// code example for Explicit Binding

// const runner = { name: 'John', myFavoriteActivity: 'running' };
// MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity);
