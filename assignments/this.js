/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Onject Binding
After writing an object,

* 2. Implcit Binding
    when a function is invoked, whatever is to the left of the
    dot, is what the keyword will be referencing
* 
3. New Binding
making a main constructor and then using that to make new objects


* 4. Explicit Binding
.call, .apply
.call uses the .call method to reference 'this' then individually calls one array at a time starting with index 0
while apply does the same thing, but just needs a array name to reference all arrays
also bind is to lock something together in a new function to save and use for later
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const info = {
    'name': this.name
};
console.log(info.name)


// Principle 2

// code example for Implicit Binding

const info = {
    'name': "Actaeon",
};

info.name

// Principle 3

// code example for New Binding

const Person = function(name, age, favorite_thing){
    this.name;
    this.age;
    this.favorite_thing
};

const the_dude = new Person('Dude', 40, 'white_russian');
const dudes_bestfriend = new Person('walter', 45, 'bowling')
console.log(the_dude);
console.log(dudes_bestfriend);

// Principle 4

// code example for Explicit Binding

const doSomething = function(thing1, thing2, thing3) {
    console.log(this.name, this.age + ' ' + thing1 + ' ' + thing2 + ' ' + thing3)
}

const the_dude = {
    'name': 'lebowski',
    'age': 40    
};

const thing = ['rug', 'bowling', 'white_russian'];
// call function
doSomething.call(the_dude, thing[0], thing[1], thing[2]);
// apply function
doSomething.apply(the_dude, thing);
// bind function 
const savePoint = doSomething.bind(the_dude, thing[0], thing[1], thing[2]);
savePoint();
