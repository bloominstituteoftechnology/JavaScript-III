/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. -->  window Binding
		  If nothing is bound with 'this' keyword, it will try to go 
		  to global object window.

* 2. -->  Implicit Binding
		  Implicit binding for this occurs when dot notation is used to invoke a function.

* 3. -->  Explicit Binding
		  Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
		  We call these explicit because you are explicitly passing in a this context to call() or apply().

* 4. -->  new Binding
          whenever we’ve got a function invoked with the new operator, the this keyword here is bound to 
          the new object being built by the function constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding() {
  return this;
};

//console.log(windowBinding()); // should display window object but will be too large to display.


// Principle 2

// code example for Implicit Binding
const implicitBinding = {
   		'name': 'TOM',
   		'location': "Mountain",
   		'display': function() {
	    				console.log(`${this.name} is at ${this.location} location`);
    				}
 	}
 
 implicitBinding.display( );
// Principle 3

// code example for New Binding
let Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function() {
    					console.log(`FullName  :  ${this.firstName} ${this.lastName}`);
					}	 
}

let person1 = new Person("Tom" ,"White");
person1.fullName();
let person2 = new Person("Preet" , "Patel");
person2.fullName();


// Principle 4

// code example for Explicit Binding
let sayMyName = function () {
    	console.log('My name is ' + this.name);
};

var tom = {
    name: 'TOM'
}

let myName = sayMyName.bind(tom);
myName();