/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding are ran by the 'window'
* 2. implicit binding allows for this to apply to different objects depending on the class before the .
* 3. new binding class constructor
* 4. explicit intentionally and directly applies to the 'this' binding
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this)
// code example for Window Binding

// Principle 2

jeff.whatever()
//jeff is implicit binding
// code example for Implicit Binding

// Principle 3
let jeff= new User({
    firstName:'jeff',
    lastName:'johnson'
})
// code example for New Binding

// Principle 4

// code example for Explicit Binding
const jeff={
    name:'jeff'
}
const skills=[
    'HTML','CSS','JavaScript'
]
function intro(skill1,skill2,skill3){
    console.log('The this context is',this)
    return `my name is ${this.name} and i have learned ${skill1},${skill2},${skill3}`
}
intro.call(jeff,skills)