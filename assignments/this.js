/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding = Directly binding somrhting to the window Object;
* 2. Implicit Binding = Whatever ends up calling the object the this is reffrenced in will be the context of this
* 3. Explicit Binding = Passing the this context in a function as an argument using call, apply, or bind methods
* 4. New Binding = Using this whithin contructor functions  to build an object
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
this.windowVariable = 'I am apart of the window';
console.log(this.windowVariable)

// Principle 2
// code example for Implicit Binding
const movie = {
    title: 'Cowboy Bebop',
    genre: 'Action',
    info: function() { return `${this.title} is a ${this.genre} movie`},
}
console.log(movie.info());

// Principle 3
// code example for New Binding
function Book(title, genre, rating) {
    this.title = title;
    this.genre = genre;
    this,rating = rating;
};

const book = Book('Popular Book Tittle', 'Sci-Fi', 10);

// Principle 4
// code example for Explicit Binding

function getBookSummary(comment0, comment1, comment2, comment3) {
    if (comment0 != null) {
        return `Top Comments
                \n ${comment0} 
                \n ${comment1} 
                \n ${comment2} 
                \n ${comment3} 
                `
    }
    return `'${this.title}' is a ${this.genre} book with a rating of ${this.rating}.`
}

const comments = ['This book sucks', 'This book is asome', 'Waste of time reading', 'It changed my perspective on life so now im going to India to find myself']

console.log(getBookSummary.call(book));
console.log(getBookSummary.apply(book, comments));

const saveBook = getBookSummary.bind(book, ...comments);
console.log(saveBook());