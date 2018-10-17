/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Scope - This is when "this" is applied globally to the browser window object and can be viewed in the browser console.
* 2. Implicit Scope - This is when "this" is bounded to a specific object.
* 3. Explicit Scope - This is when "this" is bound to a specific function.
* 4. New Scope - This is when "this" is bound to the creation of new objects.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function logWindow(){
    console.log(this);
}
logWindow();

// Principle 2
// code example for Implicit Binding
const Obj = {
    firstName: "Thomas",
    lastName: "Claydon",
    whatIsMyName: function(){
        console.log(`My name is ${this.firstName} ${this.lastName}!`);
    }
}
Obj.whatIsMyName();

// Principle 3
// code example for New Binding
function CreateRobot(name){
    this.name = name;
    this.objective = 'Conquer';
    this.location = "World";
    this.statement = function(){
        console.log(`I ${this.name} will ${this.objective} the ${this.location}.`);
    }
}
const drEvil = new CreateRobot('Dr. Evil');
drEvil.statement();
// Principle 4
// code example for Explicit Binding
const person = {
    firstName: "Thomas",
    lastName: "Claydon"
}
const tasks = ["Wake Up", "Exercise", "Eat", "Code", "Sleep" ];
function introduction(task1, task2, task3, task4, task5){
    console.log(`My name is ${this.firstName} ${this.lastName} and today I will ${task1}, ${task2}, ${task3}, ${task4} and ${task5}.`);
}
introduction.call(person, ...tasks);