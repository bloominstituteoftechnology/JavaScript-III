/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If nothing is set to 'this' itll be set to the display window by default 
* 2. Implicit binding is basically whatever is left of the dot
* 3. New binding enables you to create a constructor function then bind this to new variables being created 
* 4.  Explicit binding is directly called upon using (bind(), call(), or apply())
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function logger(param) {
    console.log(this)
}
logger();

// Principle 2
const julian = {
    name: 'Julian',
    age: 19,
    food: 'Tacos',
    game: 'Outward',
    play() {
        return `${this.name} is playing ${this.game}`
    }
}
console.log(julian.play());
// code example for Implicit Binding

// Principle 3
function enemy(color, type) {
    this.color = color,
    this.type = type
}
const spider = new enemy('red', 'melee')
console.log(spider)

// code example for New Binding

// Principle 4
const mage = {
    name: 'Mike'
}

const skills = ['fireball', 'lightning', 'watergun']

function attack(skills1, skill2, skill3) {
    console.log(`${this.name} uses ${skills1}, ${skills2}, and ${skills3}. It's super effective.`)
}

attack.call(mage, skills[0], skills[1], skills[2])

// code example for Explicit Binding