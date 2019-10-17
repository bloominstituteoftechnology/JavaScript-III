/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: 

here "this" refers to the window or default context

* 2. Implicit binding:

it specifies to the left of "this" to which object it applies or refers to

* 3. Explicit binding:

telling an object what function to use, having call, apply and bind as options. every option has a different behavior

* 4. New Binding: 

creating a new object and "this" is the relation between new object and existing objects

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const myFunction = function() {
    console.log(this.f);
 }
 
 var f = 2 ;
 myFunction();





//Principle 2
// code example for Implicit Binding
let myCat = {
  name: 'moles',
  noise: 'purrrrrr',
  cat: function(){
    console.log(this.noise);
  }
}

myCat.cat();





// Principle 3
// code example for New Binding

function Activity(movie){
  this.time = movie;
}

let myActivity = new Activity('Joker');

console.log(`My next movie is the ${myActivity.time}`);





// Principle 4
// code example for Explicit Binding

function Cooking(){
  console.log(this.sauce);
}

let food = {
  dish: 'pasta',
  sauce: 'alfredo!'
}

letsCook = Cooking.bind(food);


letsCook();
