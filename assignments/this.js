/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When used in global scope the this keyword will reference the window/console object.
* 2. when using dot syntax the first item left of the dot is this in implicit binding.
* 3. when a constructor is used, this is the instance of the object that is created and returned by the constructor.
* 4. when javascripts call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function inGlobal(item){
	console.log(this);
	return name;
}

// Principle 2

const trafficLight = {
	'status': 'red light',
	'showStatus': function(){
		console.log(this.status);
	}
}

// Principle 3

function StopSign(message) {
	this.message = message;
	this.output = function(){
		return(this.message);
	}
}

const clineStop = new StopSign('STOP');
const kennedyStop = new StopSign('STOP');

clineStop.output();
kennedyStop.output();

// Principle 4

// .call, .apply, .bind

const obj = {
	num: 2
};

const addToThis = function(a) {
	return this.num + a;
};

console.log(addToThis.call(obj, 3));

// CALL
// sayName.call(me, skills[0], skills[1], skills[2])
// sayName.call(me, ...skills);

// APPLY - Just like call but it will iterate over each item in an array!
// sayName.apply(me, skills);

// BIND - Returns a function with same functionality of call
// let newFunction = sayName.bind(me, ...skills);
// newFunction();