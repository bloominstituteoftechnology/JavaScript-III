/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first this refers to the global window.
* 2. The second principle makes 'this' refer to the specific scope that it's in. It's implied by the left side of the invocation 'i.e. dog in dog.excite()'
* 3. We hold the this keyword for later use. So we make the this keyword point to something specific and we store it for later when we need it.
* 4. In this case we explicitly state what we want the this keyword to point to when we use the .apply() and .call() methods.
*
* write out a code example of each explanation above
*/

// Principle 1

const greeting = function() {
    console.log(this);
}
greeting();
// Principle 2

const dog = {
    favorite: 'bone',
    sound: 'bark',
    excite: function(){
        console.log(`Dog likes to ${this.sound} when you touch his ${this.favorite}!`)
    }
}
dog.excite();

// Principle 3
const me = {
    name: 'Holden'
}
const traits = ['cool', 'handsome', '& interesting']

const lateGreeting = howdy.bind(me, ...traits);
lateGreeting();

// Principle 4
function howdy(traits1, traits2, traits3) {
    console.log(`Hello, my name is ${this.name} and I am ${traits1} ${traits2} ${traits3}!`);
}

howdy.apply(me, traits);

