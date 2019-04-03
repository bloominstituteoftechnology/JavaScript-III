/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - ties the this keyword to global/widow variables/objects 'catch all'
* 2. Implicit Binding - The this keyword points to the object on which the function was called.  Uses a dot with the onject to the left of it when invoking.
* 3. Explicit Binding - Uses call, apply, or bind to invoke a function with a value with this
* 4. New - creates a new object, this points to the object that was created
*
* write out a code example of each explanation above.
*/

// Principle 1
// code example for Window Binding

function functionName() {
    console.log(this);
}

functionName();

// Principle 2

// code example for Implicit Binding

const me = {
    name: 'Brandi',
    age: 'Used to be 23',
    'hair color': 'blonde',
    greet: function(){
        console.log(`Hello, I'm ${this.name}, I ${this.age}.`)
    }
}

me.greet();

// Principle 3
// code example for New Binding

function overwatch(hero, heroType, heroWeapon) {
  this.hero = hero
  this.heroType = heroType
  this.heroWeapon = heroWeapon
}

 const sombra = new overwatch('Sombra', 'Damage', 'Gun');
 console.log(sombra)

 const hanzo = new overwatch('Hanzo', 'Damage', 'Bow & Arrow')
 console.log(hanzo)

// Principle 4
// code example for Explicit Binding.

const person = {
    name: 'Brandi'
}

var favoriteOverwatchHeroes = [' Tracer', ' Widowmaker', ' Ashe', ' Symmetra', ' Zenyatta']

function nerdIntro () {
    console.log(`Hi, I'm ${this.name}, and my favorite Overwatch Heroes to play are: ${this.favoriteOverwatchHeroes}.`)
}

nerdIntro();