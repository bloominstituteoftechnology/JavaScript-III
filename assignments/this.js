/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit: points to the object on which the function is called, so whatever is to the left of the .this.
* 2. explicit: when we explicity state what this is using call, apply, bind, ie what comes after call in parentheses.
* 3. new: the new keyword must be used in conjunction with a constructor function for an object, so this refers to the newly created object.
* 4. window: defaults to global scope. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const personalInfo = {
    'name': 'Ian',
    'location': 'the Y-O',
    'instrument': 'guitar',
};
console.log(this.name);

// Principle 2

// code example for Implicit Binding
personalInfo.instrument();


// Principle 3

// code example for New Binding
function personalInfo() {
    this.name = name;
    this.location = location;
    this.instrument = instrument;
}

const kevinInfo = new personalInfo;

// Principle 4

// code example for Explicit Binding
const genres = ['rock', 'jazz', 'blues'];
function jammin(genres)
jammin.call(personalInfo, ...genres);