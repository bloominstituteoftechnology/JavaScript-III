/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const person = {
    'name': this.name
}

console.log(person.name)

// Principle 2

// code example for Implicit Binding
const yeet = {
    'name': 'Yeet',
    'introduce': function(location) {
        console.log(`Hello my name is ${this.name} from ${location}.`)
    }
}

yeet.introduce('Crete');

// Principle 3

// code example for New Binding


function Boom(bling, blow) {
    this.sound = bling;
    this.sound2 = blow;
    this.soundEffect  = function() {
        console.log(`The car went ${this.sound} in attempt to not go ${this.sound2}.`)
    }
} 

const carSounds = new Boom('SKRRRRRRRRRRRRRRRRRRRT', 'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM');


// Principle 4

// code example for Explicit Binding
const store = {
    'company': 'Amazon'
}

const items = ['Banana', 'Orange','Apple'];

function buy(items1, items2, items3){
    console.log(`Buying -${items1} -${items2} -${items3}) from ${this.company} .`);
}

buy.apply(store, items);
