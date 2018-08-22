/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Explicit uses .call .apply or .bind and you pass "this"
* 2. New uses the new keyword to create a new instance of a class
* 3. Implicit is defined inside of an object.
* 4. Window is everything else.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const me = {
    name: "Ryan",
    speak: function()   {
        return this.name;
    }
}
console.log(me.speak())
// Principle 3

// code example for New Binding
function Human(info)    {
    this.name = info.name
    this.speak = function() {
        return `${this.name}`
    }
}
const Ryan = new Human({
    name: "Ryan"
})
console.log(Ryan.speak())

// Principle 4

// code example for Explicit Binding
function Male(info) {
    Human.call(this, info)
    this.age = info.age;
    this.constructor = Male;
    this.talk = function()  {
        return `${this.name} is a ${this.constructor.name}`
    }
}
const RyanTheMale = new Male({
    name: "Ryan",
    age: 23
})
console.log(RyanTheMale.talk());
