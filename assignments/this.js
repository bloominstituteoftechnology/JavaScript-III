/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global object binding: when global, "this" is the window/console.
* 2. Implicit Binding: when an function is called with a dot, the object before the dot is "this".
* 3. New binding: When a constructor function is used, "this" refers to the object created by the constructor function
* 4. Explicit binding: When a "call" or "apply" method is used, "this" is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

function goodBook(book){
    console.log(this);
    return book;
}

goodBook("Ender's Game")

// Principle 2

const myFavoriteMovie = obj => {
    obj.movies = function(){
        console.log('The best movie ever is ${this.movie}');
        console.log(this);
    };
};

const me = {movie: 'Interstellar'};
const sister = {movie: 'Storks'};
myFavoriteMovie(me);
myFavoriteMovie(sister);

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding