/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
The 'this' keyword is bound to the "Window" object by default. "Window" is a global
variable that is representative of the browser window that is affected by the code.

* 2. Implicit Binding
The 'this' keyword is implicitly bound an object when invoking a method results in 
running code that contains it. In this case, 

* 3. New Binding
The 'this' keyword is bound by the "new" keyword when creating an object from a
constructor function. The "this" keyword in this case will be bound to 
the created object.

* 4. Explicit Binding
The 'this' keyword is explicitly bound to the object that is the given argument
in the call, apply, or bind methods.  These methods allow us to bind 'this' to whichever
object we see fit.

. These methods are meant to call 

*
* write out a code example of each explanation above
*/

// Principle 1

console.log(`${this.name} would happen to be the value of the name property of your Window object.`)

// Principle 2

var dessert = {
    flavor: 'Rocky Road',
    food: 'Ice Cream',
    speak: function () {
        console.log(`${this.flavor} is one of the most popular flavors of ${this.food}`)
    }
}
dessert.speak()



// Principle 3

const MusicMaker = function(genre, artist, songname) {
    this.genre = genre;
    this.artist = artist;
    this.songname = songname
    this.instruments = []
}
MusicMaker.prototype.addinstrument = function (instrument) {
    this.instruments.push(instrument)
}

const NewSong1 = new MusicMaker('Alt. Rock', 'Modest Mouse', 'Float On');


// Principle 4
const vacations = ['San Francisco', 'New York City', 'Cancun', 'Colorado Springs']

const myname = {
  first_name: 'Jacob',
  last_name: 'Bryan'
}

function statement(place1, place2, place3, place4) {
    return (`My name is ${this.first_name} ${this.last_name}, and I have visited ${place1}, ${place2}, ${place3}, and ${place4} on vacations in my life.`)
}

function speak() {
    console.log(statement.apply(myname, vacations))
}