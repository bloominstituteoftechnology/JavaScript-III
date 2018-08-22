// Here's some text for the commit.

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Explicit -- when we use .call() or .apply()
* 2. Implicit -- what's to the left of the period in a function call
* 3. New -- creates a new object based on given parameters
* 4. Window -- lets us attach a value on a global scale, mwahahaha
*
* write out a code example of each explanation above
*/

// Principle 1 -- explicit 


let theonetheonlyJOHNSPRAUL = { 
    sayMyName: function() {
        console.log('Hello, my name is', this.name);
    }
}

// theonetheonlyJOHNSPRAUL.sayMyName.call({name: 'John Spraul'});

// Principle 2 -- implicit 

let spoonerism = { 
    name: 'Sprohn Jaul',
    age: 24,
    sayMyName: function() {
        console.log('Hello, my name is', this.name);
    }
}

// spoonerism.sayMyName();

// Principle 3 -- new binding

function DatingAppProfile(name, like, dislike) {
    this.name = name;
    this.like = like;
    this.dislike = dislike;
}

var person1 = new DatingAppProfile('Tommy Collison', 'long walks on the beach', 'getting caught in the rain')

// console.log(person1.like);

// Principle 4 -- window

global.name = 'Homer' // same as `let name =` 

function bestPhilosopher() { 
 console.log('Obviously', this.name);
}

// bestPhilosopher();