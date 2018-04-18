/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If there isn't an object given for the "this" keyword to bind to,
*    it will default to referencing the global Window object.
*
* 2. If a function is an object method, this is implicitly set to the object
     the method is called on. 
*
*
* 3. If a function is used as a constuctor via using the New keyword,
     this will bind to to newly constructed object. 

* 4. If the bind keyword is used on a function or object property, 
     in any subsequent function or call to a new object's property
     will be permanently bound to the first argument of bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const Person = {
    name: "Cal",
    callName: function () {
        return this.name;
    }
};

console.log(Person.callName());



// Principle 3

// code example for New Binding

function Cats() {
    this.animal = 'Taurus';
}

function Dogs() {
    this.animal = 'Lady';
}

const kitty = new Cats();
console.log(kitty.animal);

const tom = new Dogs();
console.log(tom.animal);

// Principle 4

// code example for Explicit Binding

function foo() {
    return this.bar;
}

const fizzle = foo.bind({bar: 'drizzle'});
console.log(fizzle());

const dazzle = fizzle.bind({bar: 'basil'});
console.log(dazzle());

