/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding means that in the global scope, "this" refers to the window/console.
* 2. Implicit Binding means that in method calls "this" refers to the object on which the method is called (i.e., to the left of the dot).
* 3. New Binding means that "this" refers to the instance of a constructor created by the keyword new.
* 4. Explicit Binding means that "this" refers to the object passed to call(), apply() and bind().
*
* write out a code example of each explanation above
*/

// Principle 1 - Window Binding
var movieTitle = 'Tully';
const sayMovieTitle = () => console.log(this.movieTitle);
sayMovieTitle();

// Principle 2 - Implicit Binding
const sayNowPlaying = (obj) => {
  obj.tellMe = function() {
    console.log(`${this.title} is playing today.`);
  }
};

const mon = { title: 'Avengers: Infinity War' };
const tue = { title: 'A Quiet Place' };

sayNowPlaying(mon);
sayNowPlaying(tue);

mon.tellMe();
tue.tellMe();

// code example for New Binding

const Movie = function (title, duration) {
  this.title = title;
  this.duration = duration;
  this.sayRuntime = function() {
    console.log(`${this.title} is ${this.duration} minutes long.`);
  };
};

const actionPic = new Movie('Deadpool 2', 124);
const dramaPic = new Movie('The Rider', 90);

actionPic.sayRuntime();
dramaPic.sayRuntime();


// Principle 4 - Explicit Binding
const genericPic = new Movie('Movie Title', 0);
const docPic = { title: 'RGB', duration: 97};
genericPic.sayRuntime.call(docPic);