/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When you're in global scope, the value of `this` will be the window  and object in the browser, or the console object in node,  or whenever is the parent object is in the environment that JavaScript lives in
* 2. Principle two is called implicit binding.  Whenever you have a nested object, `this` refers to the object "left of the dot".
* 3. whenever you have a constructor function  and you use a new to initialize a new object to based on it,`this` will refer to the newly created object.
* 4. Principle four is called explicit binding. Explicit binding happens when you use call or apply to assign a function to an object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function principleOneExample(){
    //in the node environment this will be the console.
    console.log(this)
}
principleOneExample()

// Principle 2

// code example for Implicit Binding
const principleTwoObject= {
    name:"shin chan",
    getName: function(){
        return `my name is ${this.name}`
    }
}
console.log(principleTwoObject.getName())


// Principle 3

// code example for New Binding
function Superhero(obj){
    this.name= obj.name 
    this.power= obj.power
    this.speak = function(){
        return `I am ${this.name} and I can ${this.power}!`
    }
}
const onePunchMan= new Superhero({
    name:"One Punch Man",
    power:"one punch anything"
})

console.log(onePunchMan.speak())

// Principle 4

// code example for Explicit Binding
function attack(){
    return `${this.name} uses ${this.power }`
}
console.log(attack.apply(onePunchMan));