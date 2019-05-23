/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding= the value of 'this' will be the window/console object
* 2. Implicit binding= When a function is called by a preceding dot, the object lef of the dot gets 'this'
* 3. New binding= 'this' is tied to created object. Whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function
* 4. Explicit binding= .bind, .call, .apply overides the this keyword
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const westCoast = {
    greeting:'Wessiieeed', 
    sayHello: function(TheWestCoast){
    console.log(`${this.greeting} the best coast is ${TheWestCoast}`);
    }
}

// Principle 3

// code example for New Binding
function Person(obj){
    this.name = obj.name;
    this.age =obj.age;
    this.speak = function() {
      return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
    }
  }
  
  const tatianna = new Person({name: 'Tatianna', age:37});
  const uzifatdaddy = new Person({name: 'Uzi' , age: '5'});
  
  tatianna.speak.call(uzifatdaddy);
  uzifatdaddy.speak.apply(tatianna);
  
  
  console.log(tatianna.speak());
  console.log(uzifatdaddy.speak());
  

// Principle 4

const stacey= {
   name: "Stacey",
   age: 34, 
   sayName: function(){
     console.log('Mynameis'+ this.name);
   }
}
  stacey.sayName();

  // not a method but a function on the global scope

const sayName = funtion(){
  console.log('Mynameis' + this.name);

const OGtmoni = {
  name: 'Tmoni',
  age: 37, 
}

const languages = ['JS', 'Ruby', 'Python'];
}
sayName.call(OGtmoni, languages[0],languages[1],languages[2] );
// code example for Explicit Binding