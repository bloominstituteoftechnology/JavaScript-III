/* The for principles of "this";
* in your own words. explain the four principle
  for the "this" keyword below.
*
* 1. Whenever a function is declared in the global context
 that means `this` refers to the window global object

* 2. Implicti Binding is whenever a function is called by a preceding dot the 
object left of the dot gets `this`

* 3. The new Binding is explained very simple by creating a new object `this`
will refer to that object.
So if we have an object constructor and we will creat an new object
this will refer to that new object.

* 4. By using call() or apply() we can Explicit bind an object to other object
which in this case if you pass a an existing object inside the call method,
this will refer to that new object 
*
* write out a code example of each explanation above
*/



// Principle 1

// code example for Window Binding
function myName(name){
    console.log(`This refers to the window object ==>`,this);
    return name;
}

myName('Remi')

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting:'hello',
    speak: function(){
        console.log('This is implicit Binding', this)
        return `${this.greeting}, world`
    }
}

myObj.speak();


// Principle 3

// code example for New Binding
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function(){
        console.log(`This is new binding`,this)
        return `Hello, my name is ${this.name}, and I am ${this.age} years old! `
    }
}

const remi = new Person({name: 'Remi',age: 26})


remi.speak()



// Principle 4

// code example for Explicit Binding
function Person2(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function(){
        console.log(`This is Explicit binding`,this)
        return `Hello, my name is ${this.name}, and I am ${this.age} years old! `
    }
}

const victor = new Person2({name: 'Victor',age: 30})
const adrian = new Person2({name: 'Adrian', age: 32})


victor.speak.call(adrian); 
adrian.speak.apply(victor);