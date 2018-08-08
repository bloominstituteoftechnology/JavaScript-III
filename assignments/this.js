/* The for principles of "this";

* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The Window Binding: this is the "default" binding that "this" will go to if it is not bound specifically.

* 2. Implicit Binding: More of an "implied" binding, "this" is bound with the invocation of the method.

* 3. Explicit Binding: Here the "this" is strongarmed to it's binding object function.( no methods)

* 4. Constructor Function: Here "this" is used in hand with the keyword new to create Object literals.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

const myObj = {
	"dance": fucntion(dance1, dance2) {
		console.log(`She thought to herself, ${dance1} is so graceful and beautiful, but ${dance2} has a beat that makes her want to shake her butt...Which to choose.`);
	}
}
console.log(myObj(ballet, samba));


// Principle 2
// code example for Implicit Binding

const myObj = {
	"dance": fucntion(dance1, dance2) {
		console.log(`She thought to herself, ${dance1} is so graceful and beautiful, but ${dance2} has a beat that makes her want to shake her butt...Which to choose.`);
	}
}
console.log(myObj.dance(ballet, samba));

// Principle 3
// code example for New Binding


// Principle 4

// code example for Explicit Binding