/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding, creates a copy of the object linking to the prototype which becomes the context of 'this'
* 2. explicit binding, uses .call(), .apply(), and .bind() explicitly passing context on this when called
* 3. window binding, 'this' is not linked to any objects so it goes thru up to window
* 4. new binding, 'this" links a parent function with a new object
*
* write out a code example of each explanation above
*/

// Principle 1
implicit
// code example for implicit Binding
const obj = {
	thisExample: 'one',
	num: function(){
		return `${this.thisExample} is a number`	
}}
obj.num()

// Principle 2

// code example for explicit Binding
const vic = {
  name:'victor'
}

const things = ['candy', 'remote', 'rasor']

function knowingAround (one, two, three){
  return `My name is ${this.name} and I see in front me ${one}, ${two}, and ${three}`
}

knowingAround.apply(vic, things)
knowingAround.call(vic, 'candy', 'remote', 'rasor')
const newthings = knowingAround.bind(vic)

newthings('candy', 'bottle', 'computer')

// Principle 3
window 
// code example for window Binding
function saySomething(){
  console.log(this)
}

setTimeout(function(){console.log(this)},200)
// Principle 4

// code example for New Binding


function champ(obj){
  this.name = obj.name;
  this.saysHi = function(where){
    return `${this.name} is from ${where}`
  };
};

let Soraka = new champ({
  name: 'Soraka',
})

Soraka.saysHi('League')