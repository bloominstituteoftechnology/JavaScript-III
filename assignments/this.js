/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding: 
     In global scope the value of 'this' will be the window/console Object.

* 2. Implicit (automatic) Binding:
     When a function is called by a preceeding dot, 
     the value of 'this' will be the object prior to the dot.

* 3. New Binding:
     When a constructor fuction is used the value of 'this' will be 
     the specific object that was created by the constructor.

* 4. Explicit (forced) Binding:
     When the 'call', 'apply', or 'bind' method is used the value of 'this' will be
     explicitly defined by what the method is calling/applying upon. 
     [ex. const1.function1.call(const2) => this refers to const2]

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const alphabet = function () {
    console.log(this); // this === Window {method: function, etc.}
    return ('ABC');
};
// console.log(alphabet());

// Principle 2
// code example for Implicit Binding

const learn = {
    alphabet: 'ABC',
    teachMe: function (){
        console.log(this); // this === learn {alphabet: 'ABC', teachMe: function}
        return (`${this.alphabet}'s are fun!`); // this === learn >>> this.alphabet === learn.alphabet === 'ABC'
    }
};
// console.log(learn.teachMe()); // here is where the 'this' is invoked by the .function and the learn object is prior to the dot

// Principle 3
// code example for New Binding

function Learn(me) {
    this.alphabet = 'ABC';
    this.me = me;
    this.teachMe = function () {
        console.log(this); // this === first === Learn {alphabet: 'ABC', me: 'Chelsea', teachMe: function}
        return (`${this.me} says ${this.alphabet}'s are fun!`); // this === first === Learn >>> this.alphabet === Learn.alphabet === 'ABC' // this.me === Learn.me === 'Chelsea' (me was set to 'Chelsea' when we invoked new constructor function of Learn(Chelsea))
    };
};
const first = new Learn('Chelsea'); // here is when 'first' eastablishes a new object of 'first' with 'Chelsea' as a value of 'me'
// console.log(first.teachMe()); // here is where the 'this' or 'first' is invoked by the .function 

// Principle 4
// code example for Explicit Binding

//Example 1

function LearnNums(you) {
    this.nums = '123';
    this.you = you;
    this.teachMeNums = function () {
        console.log(this); // this === student ==  LearnNums {nums: '123', you: 'Bob', teachMeNums: function}
        return (`${this.you} says ${this.nums}'s are fun!`); // this === LearnNums >>> 'student' = 'you' = 'Bob'
    };
};
const teacher = new LearnNums('Josh'); // LearnNums {nums: '123', you: 'Josh', teachMeNums: function}
const student = new LearnNums('Bob'); // LearnNums {nums: '123', you: 'Bob', teachMeNums: function}

// console.log(teacher.teachMeNums()); // Without the call method teacher = 'you' = 'josh' would be value of this 
// console.log(teacher.teachMeNums.call(student)); // here is where call explicilty defines is value of this as 'student' = 'you' = 'Bob'


// Example 2
const parent = {
    name: "Dad"
};

const skills = ["ABC\'s", "123\'s"];

function letsLearn(skills1, skills2) {
    console.log(this); // this === parent {name: Dad}
    return (`${this.name} teaches ${skills1} and ${skills2}`); // this.name === parent.name === "Dade"
}

// console.log(letsLearn.apply(parent, skills));  // .apply => this === parent [!== letsLearn]

//Example 3
const learnLater = letsLearn.bind(parent, ...skills); // this === parent
// console.log(learnLater());
