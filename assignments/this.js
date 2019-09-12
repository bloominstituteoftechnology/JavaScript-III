/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: When "this" is called in the global scope, "this" will be refering to Window 
* 2. Implicing binding: It's when "this" is called in a functon inside another object
* 3. New binding: Can be used to create new objects using a constructor function
* 4. Explicit binding: Calls or applies another method and changes what 'this' refers to. 
 *
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const windowFunc = ()=>{
    console.log('When "this" is not called inside an object it will return: ' + this)
}
windowFunc()

// Principle 2
// code example for Implicit Binding
const implicitBindObj = {
    name: 'Code example',
    sayThings: function(){
        return `My name is ${this.name} and I became self-aware`
    }
}
console.log(implicitBindObj.sayThings())
// Principle 3
// code example for New Binding
function Parrot(parrotAttr){
    this.name = parrotAttr.name
    this.sprite = parrotAttr.sprite
    this.talk = function(){
        return  `Yoyoyo, my name is ${this.name}`
    }
}

const dadParrot = new Parrot ({
    name: 'Dad Parrot',
    sprite: 'https://cultofthepartyparrot.com/parrots/hd/dadparrot.gif',
})

console.log(dadParrot.talk())

// Principle 4
// code example for Explicit Binding

let friend = {
    name: 'Lorenzo',
    dob: 1995
}


function sayFriendsName(currYear){
    return `${this.name} is ${currYear - this.dob}`
}

console.log(sayFriendsName.call(friend, 2019))