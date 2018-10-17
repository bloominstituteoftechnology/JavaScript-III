/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If you are in a global scope, or if no other binding is attached, 
the window is what is used for "this". 
* 2. Implicit Binding - This will be referred to in whatever object you are currently in. 
* 3. Explicit Binding - When you use 3 types of functions (.call, .apply, .bind) to explicity define
what this is referring to. 
* 4. New binding - You create new objects in javascript with the "new" keyword. This references 
everything inside this block of code.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello() {
    console.log(this);
}
sayHello(); // Window

// Principle 2

// code example for Implicit Binding
const person = {
    name: "Jon Snow",
    location: "Winterfall",
    knowledge: "nothing",
    greet: function () {
        console.log(`Hello! My name is ${this.name} and I am from ${this.location}!`)
    },
    knows: function () {
        console.log(`I know ${this.knowledge}.`)
    }
}
person.greet(); // Hello! My name is Jon Snow and I am from Winterfall!
person.knows(); // I know nothing.


// Principle 3

// code example for New Binding

function SmallCouncil(hand, commander, coin, laws, whisperers, ships, grandMaester) {
    this.hand = hand;
    this.commander = commander;
    this.coin = coin;
    this.laws = laws;
    this.whisperers = whisperers;
    this.ships = ships;
    this.grandMaeser = grandMaester

    this.announcement = function() {
        console.log(`Hello all, please be advised the follow:
        ${this.hand} will serve as Hand of the King,
        ${this.commander} will serve as Lord Commander of the Kingsguard,
        ${this.coin} will serve as Master of coin,
        ${this.laws} will serve as Master of laws,
        ${this.whisperers} will serve as Master of whisperers,
        ${this.ships} will serve as Master of ships,
        ${this.grandMaeser} will serve as Grand Maester,
        `)
    };
} 

const tommenCouncil = new SmallCouncil("Lord Tywin Lannister", "Ser Jaime Lannister", "Lord Petyr Baelish", "Ser Kevan Lannister", "Varys", "Lord Mace Tyrell", "Pycelle")

tommenCouncil.announcement();

// Principle 4

// code example for Explicit Binding
const wildling = {
    "name": "Tormund"
}

const hobbies = ["killing", "eating", "making jokes"];

function speech(hobbie1, hobbie2, hobbie3) {
    console.log(`Hello, my name is ${this.name} and I enjoy ${hobbie1}, ${hobbie2}, and ${hobbie3}.`)
}

speech.apply(wildling, hobbies); // Hello, my name is Tormund and I enjoy killing, eating, and making jokes.