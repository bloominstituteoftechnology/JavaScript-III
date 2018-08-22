/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when .this is referencing a value in the global environment. 
* 2. Implicit binding is when whatever is to the left 
* 3. New binding is when .this is used to create a new function based on a previous function.
* 4. Explicit binding is when .this is used with .call .apply or .bind on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function win() {
    return this;
}

//or
console.log(this);
console.log(window === this);

// Principle 2

// code example for Implicit Binding

const ThisIsObject = function () {
    this.name = 'This Is Object';
    this.stuff = 'Stuff';
}

ThisIsObject.prototype.doStuff = function (action) {
    console.log(`${this.name} ${this.stuff}!`);
}

 var obj = new ThisIsObject();

 obj.doStuff();

// Principle 3

// code example for New Binding

function Console(maker, model, resolution, year) {
    this.maker = maker;
    this.model = model;
    this.resolution = resolution;
    this.year = year;
   }
   
   var console1 = new Console('Nintendo', 'Switch', '720/1080', '2017');
   
   console.log(console1);

// Principle 4

// code example for Explicit Binding

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);