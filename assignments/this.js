/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - When 'this' has no context to point to, it refers to the Window object by default.
* 2. Implicit Binding - It's when 'this' refers to the object itself. When calling a object method or property, 'this' usually points to the left of the dot notation.
* 3. Explicit Binding - When we explicity tell the our function what 'this' is by using .call(), .apply(), or .bind()
* 4. new Binding - When creating an object using the constructor function, the 'new' keyword binds 'this' to the instance of that constructor function, not the constructor itself
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const thisWindow = this.name
console.log(thisWindow)

// Principle 2

// code example for Implicit Binding
const groot = {
    'name': 'Groot',
    'team': 'Guardians of the Galaxy',
    speak: function(){
        console.log(`I am ${this.name}`);
    }
}
groot.speak()

// Principle 3

// code example for New Binding

function Avenger(name, alias){
    this.name = name;
    this.alias = alias; 
    this.speak = function(){
        console.log(`I am ${this.alias} (AKA ${this.name})`)
    }
}

const ironMan = new Avenger('Tony Stark', 'Iron Man');
ironMan.speak()

// Principle 4

// code example for Explicit Binding
const myInfo = {
    'name': 'Gabe'
}

let appsArr = ['Spotify', 'Google Sheets', 'Clash Royale']

function favApps(callThis, arr){
    console.log(`${this.name}'s favorite apps are ${arr}`)
}

favApps.apply(myInfo, appsArr)