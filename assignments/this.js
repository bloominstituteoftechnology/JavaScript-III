/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding - look to the left of the " . " when you call/invoke the function
* 2. Explicit binding - using "call" "apply" or "bind" to tell the "this" keyword it's context
* 3. new binding - "new" keyword is bound to new object being constructed
* 4. window binding - if none of the other types apply "this" defaults to the viewport (window object)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.name)

// Principle 2


// code example for Implicit Binding
    const MyObject = function (){
        this.name = 'MyObjectName';
        this.myProperty = 'property';
      };

      MyObject.prototype.doStuff = function (action) {
        console.log(this.name + ' is ' + action + '!');
      }

// Principle 3


// code example for New Binding
function TagLine(who) {
    this.what = "Iam";
    this.why = who;
    this.speak = function() {
      console.log( this.what + ' ' + this.why)
    }
  }

  const josh = new TagLine('DrumLife');


  josh.speak();


// Principle 4

// code example for Explicit Binding
const drummer = { name: 'John', myFavoriteActivity: 'drumming' };
MyObject.prototype.doStuff.call(drummer, drummer.myFavoriteActivity);