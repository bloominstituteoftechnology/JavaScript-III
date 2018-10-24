/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.window binding is the defualt binding of this, 
    and it refers to the window unless in strict mode then this is undefined 

* 2. implicit binding is when ever you use dot notation, 
     in impicit binding whatever is to the left of the dot is what this points to

* 3. new binding is when a constructor function is used,
     when used in a constructor function this refers to the specific object

* 4. Explicit binding is when ever the call or apply object methods are used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this); //this has not been defined and will return the console/window object 

// Principle 2
const andrew = {
    isASuperAwesomeGuy: true,
    hasAGreatSenseOfHumor: true,
    catchPhrase:"I like pie",
    saysOffTheWallStuff: function(){
        console.log(this.catchPhrase)
    }
}
andrew.saysOffTheWallStuff();

// code example for Implicit Binding

// Principle 3
function awesomePerson(awesomeGuy) {
    this.phrase = 'Is awesome';
    this.awesomeGuy = awesomeGuy;
    this.speak = function() {
      console.log(`${this.awesomeGuy} ${this.phrase}`);
    };
  }
  
  const andrewOgle = new awesomePerson('Andrew');
  const bob = new awesomePerson('Bob');
  andrewOgle.speak();
  bob.speak();

// code example for New Binding

// Principle 4
bob.speak.call(andrewOgle);
// code example for Explicit Binding