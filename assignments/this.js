/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If a function's scope is global, this = window
* 2. If a function is called by a period, this points to the object before the period
* 3. When using a constructor, this points to the object the coinstructor creates
* 4. When using apply or call, this must be explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1
function dag(name) {
        console.log("Dang, " + name);
        console.log(this);
    }
console.log(dag("yo"));
// code example for Window Binding

// Principle 2

// code example for Implicit Binding

const dang = {
    exclamation: "dang, ",
    speak: function(name) {
        console.log(this.exclamation + name);
        console.log(this);
    }
}
dang.speak('Rob');
// Principle 3

// code example for New Binding
function Barrel(attributes) {
    this.wood = attributes.wood;
    this.size = attributes.size
}

const oak = new Barrel({
    'wood': 'oak',
    'size' : 'big'
})
Barrel.prototype.speak = function() {
    console.log(`I am made of ${this.wood}`)
}
oak.speak();
// Principle 4
dang.speak.call(dang)
// code example for Explicit Binding