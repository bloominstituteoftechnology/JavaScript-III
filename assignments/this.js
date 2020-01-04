/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global binding. This means if used on the global scope (not inside a function or method) then it will be pointed at the Global scope.
* 2. Implicit binding. When you call a function using a dot, then the this applies to the function mentioned on the left side of that dot. That's the function we'll be using.
* 3. Explicit binding.  When you call a function and use .call, .apply, or bind. You "explicitly" tell "this" to use the function mentioned in the argument.
* 4. New Biding. When a constructor function is used. "This" is used in the object to refer to a specific item and then you can return that in the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

funtion animalName(type) {
    console.log(this);
    return type;
}
animalName('panther');


// Principle 2
// code example for Implicit Binding
const myMonster = {
    name: 'Dracula',
    hobby: 'suck blood',
    bat: '🦇',
    vampire: function(){
        console.log(`Hi, I'm ${this.name} and I like to ${this.hobby}. At night, I fly in the form of a ${this.bat}`);
    }
}

myMonster.vampire();

// // Principle 3
// // code example for New Binding

function Travel(country) {
    this.place = country;
}

let planningTravel = new Travel('Egypt');
console.log(`When I graduate Lambda, the first place I plan to visit is ${planningTravel.place}!`);


// // Principle 4

// // code example for Explicit Binding

function myMusic(){
    console.log(`I love music! My favorite singer is ${this.name}. Their style is ${this.style} and my favorite song is ${this.song}!`);
} 

let smEnt = {
    name: 'EXO',
    style: 'Kpop',
    song: 'Call me Baby'
}

let rnb = {
    name: 'Lizzo',
    style: 'Soul,R&B,rap',
    song: 'Soulmate'
}

myMusic.call(smEnt);
myMusic.call(rnb);