/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding - looking to the left of the dot at function invokation (within an object) that neme equates to "this"
eg me= {
	name:'richard'.
	sayname: function(){
	console.log(this.name)}
	mee.sayname();
	
	
* 2. explicit binding - being able to do the same as the implicit function , but the function being  called is outside
the object and in the global scope...and we have to use the ".call" method associated with evry function

* 3. new binding - alows us to create a new object, through a defined constructor

 4. window binding - see below example
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding - its the default binding
sayName = function(){
	console.log(this.age)
	
}

let me = {
age:25};
normally would say sayName.call(me),but the below invocation will show as undefined
sayAge()
//instead you would need to use
window.age: 30; //set the age property on window.(unlees you use call,or apply.then you can do
sayAge()

// Principle 2

// code example for Implicit Binding
eg me= {
	name:'richard'.
	sayname: function(){
	console.log(this.name)}
	mee.sayname();
	
// Principle 3

// code example for New Binding

let Foo = function(name, age, weight){
	//this ={}
	this.name;
	this.age;
	this.weight;
	
}

let Foo2 = new Foo('richard', 'old', 50)

// Principle 4

// code example for Explicit Binding
sayName = function{}{
	console.log('My name is ' + this.name);
}

	richard={
		name: 'richard',
		age: 'old'
	]
	sayName.call(richard);