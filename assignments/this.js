/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. if we use it globally that means we refer to the window , by window I mean the whole js . we get the window becouse we didnt point 
// this kewword to anything the js engine will srarch for the object that been pointed to , in this case the only window that can get.


* 2. if we use it inside the object itself that means we are making it work implicitly , so the this keyword pointed to the object that been decalred .


* 3.  if we declread a new object with new keyword so this in this case will create a new object and return it without even the need to tell the js engine this , it will do it automatically.

* 4. in this case we create a Parent object (constructor,DNA) like a pattern that the new object will inherit its features by binding to it 
using the call, apply and bind mothed (tweaking) .
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function GloblThis(name) {
  console.log(this);
  return name;
}

GloblThis("Lamda");
// Principle 2
// code example for Implicit Binding
let ImplicitThis = {
  name: "Lamda",
  speak: function() {
    console.log(`${this.name} is best online scholl ever.`);
    console.log(this);
  }
};
console.log(ImplicitThis);
ImplicitThis.speak();

// Principle 3
// code example for New Binding
function newBindingThis(name) {
  this.name = name;
  this.speck = function() {
    console.log(`hello ${this.name}`);
  };
}

let jhon = new newBindingThis("Jhon");
console.log(jhon);
jhon.speck();

// Principle 4
// code example for Explicit Binding

let jerry = new newBindingThis("Jerry");

jhon.speck.call(jerry);
jerry.speck.apply(jhon);
