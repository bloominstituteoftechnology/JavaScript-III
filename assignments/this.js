/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first thing to remember is that if you use the "this" keyword when no other
binding has been explicitly assigned, outside of any other function, "this" will refer 
to the global object, which in web browsers is the window object.
* 2. The second principle is the idea behind Implicit binding, where the "this" is set to the object the method is called on.
Meaning, simply, that "this" will point to the object whenever that object is invoked in the code. On top of this, 
only the most immediate ref to an object matters.
* 3. The third principle is using the "new" keyword to make an object, which then assigns "this" to that
new object! So, when you use a function as a constructor, its "this" is bound to the new obj that was made!
* 4. The forth princible is explict binding, where you use the call, apply and bind methods to assign the "this" keyword with arguments!
*
* write out a code example of each explanation above
*/

// Principle 1
// console.log(this === window); //true? pretty sure its true lets test
// lol it doesnt work in visual code cuz there is no window, no DOM
// a = 37
// console.log(window.a) //37

function hiTrevorAndAsh () {
    //"use strict" 
    // what is the purpose of strict again? - oh, the this keyword will remain at whatever it was set to
    //during execution, so if i dont set it, it will become undefined - note: test this
    console.log(this)
    
}
hiTrevorAndAsh();

// Principle 2

const codeMan = {
    name: 'Ash',
    food: 'PHP and tears of junior devs',
    activity: function() {
        console.log(`${this.name} consumes ${this.food}.`); //the obj should be pointed at by the "this" keyword
    }
}

codeMan.activity();
// Principle 3
//running out of time, going to do this fast

function p() {   //make a fast function, this.a will be 43
    this.a = 43;
}

let obj = new p(); // new obj, let the p function construct it
console.log(obj.a);
// Principle 4

const pm = {
    name: 'Trevor'
}

const skills = ['ternary operations', 'goofing', 'asking ash for help', 'all programming langs']

function introduce (skills1, skills2, skills3){
    "use strict"
    console.log(`Hello! My name is ${this.name}, and these are my skills: ${skills1}, ${skills2}, ${skills3}`)

}
// try the call funciton, asign the "this" keyword with indiv. arg
introduce.call(pm, skills);
// oh, it kind of breaks it...

//maybe apply works better!
introduce.apply(pm, skills);
// ahh, it does, cuz it uses an array of arguments...