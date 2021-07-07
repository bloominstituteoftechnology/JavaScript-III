/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit: Implicit means you point to the function that you are using to the left of your invoked function so this knows what it is refering to.
* 2. Explicit: Explicit binding is when a function has a .call,.apply, or .bind suffix to tell the function what to reference and what to do with it
* 3. Window: When the this keyword tries to "connect" and use the Window object
* 4. New: typically has a constructor function and you use the new keyword to create a new object within the function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let dontWindow = function(){
    console.log(this.whatever)
}
//should be undefined
dontWindow();
// Principle 2
// code example for Implicit Binding
const Me = {
    name : "Drew",
    age : 18,
    shoutName : function(){
        console.log(`My Name is ${this.name}!`)
    }
}
Me.shoutName();

// Principle 3

// code example for New Binding
let student = function(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course
};
let billy = new student("Billy",19,"FSW-14");
console.log(billy);





// Principle 4
// code example for Explicit Binding
sayName = function(){
    console.log(`Hello I am ${this.name}`);
}
greeting = function(item1,item2,item3){
    console.log(`Hello my name is ${this.name}, and I like to code in ${item1},${item2}, and ${item3}`);
}
let mySkills = ["HTML", "CSS", "JavaScript"];
sayName.call(Me);
greeting.apply(Me,mySkills);
