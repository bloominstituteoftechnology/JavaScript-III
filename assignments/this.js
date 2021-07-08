/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global object binding: if not bound in any other way .this defaults to the window object
* 2. Implicit binding: when a function is called after a dot, .this refers to the object before the dot.
* 3. New binding: when a constructor is being used .this refers to the object created by the constructor. 
* 4. Explicit binding: when you used .call or .apply to specifically tell the computer what .this refers to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const global = this;

// Principle 2

// code example for Implicit Binding
const implicit = {
    'whoAmI': 'me',
    'who': function(name){
        return console.log(`Its ${this.whoAmI}. ${name}`)
    }
}

implicit.who('Mario');

// Principle 3

// code example for New Binding
function President(attributes) {
    this.name = attributes.name;
    this.number = attributes.number;
}

const Obama = new President({
    'name': 'Barry', 
    'number': 44,
});

const Bush = new President({
    'name': 'Dubyah', 
    'number': 43,
});

console.log(Bush);
console.log(Obama);

// Principle 4

// code example for Explicit Binding

function OrangePresident(orAttributes) {
    President.call(this, orAttributes)
    this.tweets = orAttributes.tweets;
}



const Trump = new OrangePresident({
    name:'Donnie', 
    number:45, 
    tweets: true}); 

console.log(Trump)