/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. The implicit principle of this states that anything to the left of the function being invoked is the "this" that is used.
* 3. The explicit principle states that any time "this" is used along side the .call(),.apply(), and .bind() methods, the "this" is specifically targeting a certain function. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const sayHello = function(greeting){
    console.log(greeting + ' my name is Julie');
};
sayHello('hello');
// Principle 2

// code example for Implicit Binding
const SpoiledBrat = {
    Response : function(reply){
  console.log( `hello ${reply}`);
    }
  };
SpoiledBrat.Response('house');

// Principle 3
function Tacos(type){
    this.Location = 'Taco Bell';
    this.type = 'Beef';
    this.eat = function(){
     console.log(`I like ${type} tacos from ${this.Location} `);
    }
  }
  
  const cheese = new Tacos('cheese');
  const eggs = new Tacos('eggs');
  
  eggs.eat();
// code example for New Binding

// Principle 4

function Tacos(type){
    this.Location = 'Taco Bell';
    this.type = 'Beef';
    this.eat = function(){
     console.log(`I like ${type} tacos from ${this.Location} `);
    }
  }
  
  const cheese = new Tacos('cheese');
  const eggs = new Tacos('eggs');
  
  eggs.eat.call(cheese);

// code example for Explicit Binding