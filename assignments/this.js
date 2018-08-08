/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
this is a pointer to an object. The default value of this 
will point to the window object. For example if I wrote

* 2. Implicit Binding
Implicit binding occurs when dot notation is used to invoke a function.
Whatever is to the left of the dot is the contect for the this function.

* 3. New binding
this referes to whenver a constructor function is used and about 
the specific instance of the object that is created and returned. 

* 4. Explicit binding
this happens when JavaScript's call or apply method is used to reference 
the original object implicitly means this was being used inside the object 
and explicit meaning this was being used outside the object.

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greeting(name){
	console.log(`hello ${this}`);
}
greeting("Kevin") // 'hello [object Widow]' would be my return value

// Principle 2

// code example for Implicit Binding

const dude1 = {
	name: "the dude",
	greeting: function(){
		console.log(`${this.name} hey I got a beverage here man!`)
	},
}

dude1.greeting();

// Principle 3

// code example for New Binding

function Cat(response){
  this.response = response;
  this.animal = "cat";
  this.cat_action = function(){
    console.log(`the ${this.animal} desides to ${this.response} at you`)
  }
};
const meanCat = new Cat('scratch')
meanCat.cat_action();

// Principle 4

// code example for Explicit Binding

const dude = {
  'name': 'the dude',
  'employment': 'what a job?',
}

const skills = ['painting', 'rug selection', 'relaxation'];

function greet(){
  console.log(`${this.name} greets you. occupation: ${this.employment}. Skills include: ${skills}`);
}

greet.call(dude, skills);