/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding
    Global binding is the default context of the "this" keyword. "this" would refer to the window object.
* 2. Implicit binding
    Implicit binding is when the "this" keyword is refering to whatever the left of the dot when the function is called.
* 3. New binding
    New binding is when using a class constructor to create new objects by using the "new" keyword. "this" then creates a new object and binds the properties assigned to object and then returns them.
* 4. Explicit binding
    Explicit binding is when the specific class constructor that "this" is refering to is passed in to .call .bind or .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    const sayThis = function (){
        console.log(this.name) //'this' keyword refering to the default window object
    }
    
    window.name = 'global' //window name property assigned 'global'. if this is not set the function would return undefined.
    sayThis();

// Principle 2

// code example for Implicit Binding
const callOfDuty = {
    name: 'Call of Duty',
    type: 'First person shooter',
    platform: 'Playstation',
    sayThis: function(){
        console.log(`This game is called ${this.name}`)
    }
}

callOfDuty.sayThis(); //function is called and "this" keyword is refering to the what ever is left of the dot (callOfDuty)

// Principle 3

// code example for New Binding
const Game = function(name, type, platform){
    this.name = name;
    this.type = type;
    this.platform = platform;

}

const Madden = new Game('Madden', 'Sports Game', 'X-Box'); // Madden object is created and bound properties because of "this" keyword in Game function

console.log(Madden.name);

// Principle 4

// code example for Explicit Binding
const sayThis = function(){
    console.log(`This game is called ${this.name}`)
}

const callOfDuty = {
    name: 'Call of Duty',
    type: 'First person shooter',
    platform: 'Playstation'};

sayThis.call(callofDuty); //using .call on the sayThis function we explicitly specify the context of "this" within the function that is on the global scope.



