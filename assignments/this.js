/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window Binding/ When using this in a local scope function then consoling the object, it will print the whatever you invoke the function outside the scope ( in the global scope). So this will always indicate into something specific 
and if there is nothing to point at . This will point out the window(live broweser)

* 2. Implicit or (Automatic) Binding/ 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
function anyThing(animal) {
    console.log(this);
    return animal;
  }
  console.log(anyThing("DOG"));
// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const lambdaSchool = {
    instructor : 'Cameron',
    pm : 'Austin',
    ceo : 'Allred',
    awesomeness : '100%',
    level : function () {
        console.log(`${this.pm} is ${this.awesomeness} man`)
    }

}
lambdaSchool.level();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding