/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the default binding for "this". By default, "this" points to the window object. 
* 2. Implicit Binding is the most common use case for the "this" keyword. When invoking a function using dot notation, "this" is automatically pointed to the object on the left.
* 3. When a function is invoked with the new keyword, "this" is pointed to the object that was just created.
* 4. Explicit Binding forces "this" to be pointed at a specific object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
window.myName = 'Danny';
console.log(this.myName);

// Principle 2
// code example for Implicit Binding
const danny = {
  name: 'Danny',
  introduceYourself: function () {
    console.log(`Hi! My name is ${this.name}.`)
  }
}

danny.introduceYourself();

// Principle 3
// code example for New Binding
const VideoGame = function(title, releaseDate, genre){
  this.title = title;
  this.releaseDate = releaseDate;
  this.genre = genre;
  this.getInfo = function(){
    console.log(`${this.title}, a ${this.genre} game, was released in ${this.releaseDate}.`);
  }
}

const popst = new VideoGame('Prince of Persia: The Sands of Time', 2003, 'Action/Adventure/Platform');
const gow = new VideoGame('Gears of War', 2006, 'FPS');
const ffxv = new VideoGame('Final Fantasy XV', 2016, 'RPG');

popst.getInfo();
gow.getInfo();
ffxv.getInfo();

// Principle 4
// code example for Explicit Binding
const introduceYourself = function () {
  console.log(`Hi! My name is ${this.name}.`)
}

const kat = {
  name: 'Kat'
}

const nate = {
  name: 'Nate'
}

introduceYourself.call(kat);
introduceYourself.call(nate);