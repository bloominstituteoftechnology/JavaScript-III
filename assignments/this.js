/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/






// Principle 1 - Window/Global Object binding: this refers to Global Object(window) in a function declaration
// code example for Window Binding
function basicFunction() {
  console.log('The value of this inside a function is ' + this);
  console.log('Window-object is the same as Global object \n unless in Node where it is the NodeJS global object');
  return 'principle 1';
}
basicFunction();

// Principle 2 - Implicit binding: this when used within method of an object, refers to obj (e.g. left of dot)
// code example for Implicit Binding
var basicObjectLiteral = {
  value: 9,
  whatsThis: function() {
    console.log(`The value is ${this.value} and this refers to ${this}`);
    console.log(`this is actually ${JSON.stringify(this)}`);
  }
};
basicObjectLiteral.whatsThis();


// Principle 3 - New Binding:   this refers to new instantiation of object created using constructors
// code example for New Binding
var MyObj = function(val) {
  this.value = val;
  this.increment = function () {     // inside Constructor increment method [object Object]
    console.log(`inside Constructor increment method ${JSON.stringify(this)}`);
    console.log(this);  // this is the entire MyObj Constructor function
    this.value += 1;
    console.log(this.value);
  };
};
var counterObj1 = new MyObj(999);   // instantiate new obj using Constructor Function
counterObj1.increment(); // 1000



// Principle 4  - Explicit Binding:
// code example for Explicit Binding
var MyObj2 = function() {
  this.name = 'myObj2_name';
  this.property = 'myObj2_property';
  this.giveString = function (val) {
    console.log(`obj called ${this.name} has property ${this.property} and input value ${val}`);
    console.log(`obj is ${JSON.stringify(this)}`);
  }
};

var obj = new MyObj2();

obj.giveString('cheese');   // obj called myObj2_name has property myObj2_property and input value cheese

var otherObj = {
  name: 'other Object',
  property: 'other Object property'
};

// obj called other Object has property other Object property and input value apple
// obj is {"name":"other Object","property":"other Object property"}
obj.giveString.call(otherObj, 'apple');

// obj called other Object has property other Object property and input value Maggie
// obj is {"name":"other Object","property":"other Object property"}
obj.giveString.apply(otherObj,['Maggie']);
