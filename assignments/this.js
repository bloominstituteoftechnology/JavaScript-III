/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding is when the this keyword doesn't have anywhere else to look so it looks to the window by default.
* 2. Implicit Binding is when the this keyword goes with the object to the left of the dot when called. 
* 3. Explicit Binding binds the this keyword manually using 'call' 'bind' and 'apply'.
* 4. New Binding creates a new object and assigns the this keyword to an object.
*
* write out a code example of each explanation above
*/

// Principle 1

let myobject = () => {
    this.name = "Billy";
}
myobject();
console.log(window.name);



// Principle 2

let myObject = {
name: 'Anne',
color: 'red',
number: 11,
speak: function () {
 return `I'm an object and my name is ${this.name} and my favorite color is ${this.color} and my favortie number is ${this.number}`
} 
}
console.log(myObject.speak());


// Principle 3

let person = function (haircolor, eyecolor, height) {
    this.haircolor = haircolor;
    this.eyecolor = eyecolor;
    this.height = height;
    this.sayHi = function () {
        return `My haircolor is ${this.haircolor} and my eyecolor is ${this.eyecolor} and my height is ${this.height}`
    }
}
let newGuy = new person('brown', 'blue', 5);
console.log(newGuy.sayHi());



// Principle 4

let human = {
    name: 'Anne',
    species: 'human',
    speak: function () {
        return `Hi, I'm ${this.name} and im a ${this.human}`
    }
}

let newName = function () {
this.name = 'Sarah';
}

newName.call(human);
console.log(human.name); 